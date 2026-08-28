"use strict";

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") return { statusCode: 405, body: "Method not allowed" };
  if (!process.env.OPENAI_API_KEY) return { statusCode: 503, body: "OPENAI_API_KEY is not configured" };

  let payload;
  try { payload = JSON.parse(event.body || "{}"); }
  catch (_error) { return { statusCode: 400, body: "Invalid request" }; }

  const text = String(payload.text || "").trim().slice(0, 3500);
  const language = ["ht", "en", "es"].includes(payload.language) ? payload.language : "ht";
  if (!text) return { statusCode: 400, body: "Text is required" };

  const voiceStyle = {
    ht: "Speak in clear Haitian Creole with a warm, authoritative professor tone, natural pace, and careful pronunciation.",
    en: "Speak in clear English with a warm, authoritative professor tone and a natural teaching pace.",
    es: "Speak in clear Spanish with a warm, authoritative professor tone and a natural teaching pace."
  }[language];

  try {
    const response = await fetch("https://api.openai.com/v1/audio/speech", {
      method: "POST",
      headers: { "Authorization": "Bearer " + process.env.OPENAI_API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "gpt-4o-mini-tts",
        voice: process.env.OPENAI_TTS_VOICE || "cedar",
        input: text,
        instructions: voiceStyle,
        response_format: "mp3"
      })
    });
    if (!response.ok) {
      console.error("Voice API error", response.status, await response.text());
      return { statusCode: 502, body: "Professor voice is unavailable" };
    }
    const audio = Buffer.from(await response.arrayBuffer());
    return {
      statusCode: 200,
      headers: { "Content-Type": "audio/mpeg", "Cache-Control": "no-store" },
      isBase64Encoded: true,
      body: audio.toString("base64")
    };
  } catch (error) {
    console.error("Professor voice error", error);
    return { statusCode: 500, body: "Professor voice is unavailable" };
  }
};
