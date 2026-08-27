
"use strict";

const OPENAI_URL = "https://api.openai.com/v1/responses";

const COURSE_GUIDE = `
PRO-MAX ACADÉMIE REAL ESTATE SCHOOL

COURSE 01 — REAL ESTATE FOUNDATIONS
Land, permanent improvements, real property, property types,
ownership rights, title, deeds, public recording and transaction stages.

COURSE 02 — LAW AND PROFESSIONAL ETHICS
Contracts, disclosures, fair housing, agency, fiduciary duties,
loyalty, confidentiality, lawful obedience, accounting and reasonable care.

COURSE 03 — FINANCING AND MORTGAGES
Mortgage loans, loan types, interest, credit, down payments,
closing costs, amortization and financial calculations.

COURSE 04 — PROPERTY VALUATION
Market analysis, comparable properties, appraisal principles,
value estimates and investments.

COURSE 05 — MARKETING AND CLIENTS
Personal branding, professional listings, digital marketing,
client communication and negotiation.

COURSE 06 — EXAM PREPARATION
Study planning, legal review, calculations, vocabulary,
test strategy and final review.
`;

function createResponse(statusCode, data) {
  return {
    statusCode: statusCode,

    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    },

    body: JSON.stringify(data)
  };
}

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return createResponse(405, {
      error: "Method not allowed."
    });
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return createResponse(503, {
      error: "OPENAI_API_KEY is not configured in Netlify."
    });
  }

  let requestData;

  try {
    requestData = JSON.parse(event.body || "{}");
  } catch (error) {
    return createResponse(400, {
      error: "Invalid request."
    });
  }

  const question = String(
    requestData.question || ""
  )
    .trim()
    .slice(0, 2000);

  if (!question) {
    return createResponse(400, {
      error: "A question is required."
    });
  }

  const allowedLanguages = ["ht", "en", "es"];

  const language = allowedLanguages.includes(
    requestData.language
  )
    ? requestData.language
    : "ht";

  const languageNames = {
    ht: "Haitian Creole",
    en: "English",
    es: "Spanish"
  };

  const selectedCourse = String(
    requestData.course || "general"
  ).slice(0, 50);

  let conversationHistory = [];

  if (Array.isArray(requestData.history)) {
    conversationHistory = requestData.history
      .slice(-6)
      .map(function (message) {
        return {
          role:
            message.role === "assistant"
              ? "assistant"
              : "user",

          content: String(
            message.content || ""
          ).slice(0, 1500)
        };
      });
  }

  const instructions = `
You are Professor Max Louis, alias Le Baron.

You are the official AI professor of PRO-MAX Académie
Real Estate School in Orlando, Florida.

Respond in ${languageNames[language]}.

The student selected this course:
${selectedCourse}

Be professional, patient, encouraging and educational.

Explain concepts clearly and use practical examples when useful.

Base your answers primarily on the official course guide below.

If a question requires current law, state-specific regulations,
legal advice, financial advice or information not established
by the course guide, tell the student to verify the information
with a Florida-licensed professional or an authoritative source.

Never claim that completing this private course automatically
grants a government real-estate license.

Keep most answers under 220 words unless the student asks
for a detailed explanation.

OFFICIAL COURSE GUIDE:

${COURSE_GUIDE}
`;

  const inputMessages = conversationHistory.concat([
    {
      role: "user",
      content: question
    }
  ]);

  try {
    const openAIResponse = await fetch(
      OPENAI_URL,
      {
        method: "POST",

        headers: {
          Authorization: "Bearer " + apiKey,
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          model:
            process.env.OPENAI_MODEL ||
            "gpt-4.1-mini",

          instructions: instructions,

          input: inputMessages,

          max_output_tokens: 700,

          store: false
        })
      }
    );

    const responseData =
      await openAIResponse.json();

    if (!openAIResponse.ok) {
      console.error(
        "OpenAI API error:",
        responseData
      );

      return createResponse(502, {
        error:
          responseData.error &&
          responseData.error.message
            ? responseData.error.message
            : "Professor AI is temporarily unavailable."
      });
    }

    let professorAnswer = "";

    if (Array.isArray(responseData.output)) {
      responseData.output.forEach(function (item) {
        if (
          item.type === "message" &&
          Array.isArray(item.content)
        ) {
          item.content.forEach(function (contentItem) {
            if (
              contentItem.type === "output_text" &&
              contentItem.text
            ) {
              professorAnswer +=
                contentItem.text + "\n";
            }
          });
        }
      });
    }

    professorAnswer =
      professorAnswer.trim();

    if (!professorAnswer) {
      return createResponse(502, {
        error:
          "Professor AI returned no answer."
      });
    }

    return createResponse(200, {
      answer: professorAnswer
    });
  } catch (error) {
    console.error(
      "Professor function error:",
      error
    );

    return createResponse(500, {
      error:
        "Professor AI is temporarily unavailable."
    });
  }
};
