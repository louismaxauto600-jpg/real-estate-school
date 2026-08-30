"use strict";

/* =========================================================
   PRO-MAX ACADÉMIE — REAL ESTATE SCHOOL
   JAVASCRIPT.JS — COMPLETE & FINAL
========================================================= */

const translations = {
  en: {
    ecosystemLabel: "PROFESSIONAL DIGITAL ECOSYSTEM",
    navHome: "Home",
    navCourses: "Courses",
    navPath: "Pathway",
    navExam: "Practice Exam",
    navCertificate: "Certificate",
    navAskProf: "Ask Professor",
    navContact: "Contact",

    heroEyebrow: "A PRO-MAX ACADÉMIE SCHOOL",
    heroTitleOne: "Build your knowledge.",
    heroTitleTwo: "Open the door to your future.",
    heroText:
      "Learn real estate principles, prepare for your licensing exam, and develop the skills to serve clients with confidence and professionalism.",

    startLearning: "Start learning",
    enrollNow: "Enroll now",
    statCourses: "Essential courses",
    statLanguages: "Languages",
    statOnline: "Online",

    announcementTitle: "ENROLLMENT OPEN",
    announcementText:
      "The new Real Estate School session is now available.",
    reserveSeat: "Reserve your seat",

    coursesEyebrow: "TRAINING PROGRAM",
    coursesTitle:
      "Courses that prepare you for the market",
    coursesText:
      "Each module takes you from core foundations to professional practice.",

    levelBeginner: "BEGINNER",
    levelCore: "CORE",
    levelIntermediate: "INTERMEDIATE",
    levelProfessional: "PROFESSIONAL",
    levelFinal: "FINAL",
    openCourse: "OPEN COURSE",

    course1Title: "Real estate fundamentals",
    course1Text:
      "Property, title, rights, responsibilities, and industry vocabulary.",

    course2Title: "Law and professional ethics",
    course2Text:
      "Contracts, disclosures, fair housing, and fiduciary duties.",

    course3Title: "Finance and mortgages",
    course3Text:
      "Loans, interest, credit, closing costs, and financial calculations.",

    course4Title: "Property valuation",
    course4Text:
      "Market analysis, comparables, value estimates, and investments.",

    course5Title: "Marketing and clients",
    course5Text:
      "Listings, negotiation, presentations, and client relationships.",

    course6Title: "Exam preparation",
    course6Text:
      "Structured review, practice questions, and exam strategy.",

    pathEyebrow: "STUDENT PATHWAY",
    pathTitle: "Your pathway to success",

    step1Title: "Enroll",
    step1Text: "Create your student profile.",

    step2Title: "Learn",
    step2Text:
      "Complete all 6 modules at your pace.",

    step3Title: "Practice",
    step3Text:
      "Test your knowledge regularly.",

    step4Title: "Succeed",
    step4Text:
      "Prepare for your exam and career.",

    quizEyebrow: "PRACTICE QUESTION",
    quizTitle: "Test your knowledge",
    quizQuestion:
      "Which document states the terms of a transaction between a buyer and seller?",

    answer1: "An appraisal",
    answer2: "A purchase agreement",
    answer3: "A listing photo",

    scoreLabel: "SCORE",
    correct:
      "Correct! It is the purchase agreement.",
    incorrect:
      "Not correct. Try again.",

    certificateTitle:
      "Certificate of completion",
    certificateText:
      "After completing all modules and the final assessment, you will receive a digital PRO-MAX Académie certificate.",
    viewRequirements: "View requirements",

    contactEyebrow: "OFFICIAL CONTACT",
    contactTitle:
      "Connect with the Real Estate School",

    websiteLabel: "Website",
    emailLabel: "Email",
    phoneLabel: "Phone",
    phoneHaitiLabel: "Haiti phone 🇭🇹",
    locationLabel: "Location",

    footerSlogan:
      "Built for today. Ready for tomorrow. Forward all the way.",

    askProfessor: "ASK THE PROFESSOR",
    courseOpened:
      "The course was added to your progress.",

    requirements:
      "Complete all 6 courses and pass the final assessment with at least 80%."
  },

  es: {
    ecosystemLabel:
      "ECOSISTEMA DIGITAL PROFESIONAL",

    navHome: "Inicio",
    navCourses: "Cursos",
    navPath: "Trayectoria",
    navExam: "Examen práctico",
    navCertificate: "Certificado",
    navAskProf: "Preguntar al profesor",
    navContact: "Contacto",

    heroEyebrow:
      "UNA ESCUELA DE PRO-MAX ACADÉMIE",

    heroTitleOne:
      "Construye tus conocimientos.",

    heroTitleTwo:
      "Abre la puerta a tu futuro.",

    heroText:
      "Aprende los principios de bienes raíces, prepárate para tu examen de licencia y desarrolla las habilidades necesarias para servir a tus clientes con confianza y profesionalismo.",

    startLearning:
      "Comenzar a aprender",

    enrollNow:
      "Inscribirse ahora",

    statCourses:
      "Cursos esenciales",

    statLanguages:
      "Idiomas",

    statOnline:
      "En línea",

    announcementTitle:
      "INSCRIPCIONES ABIERTAS",

    announcementText:
      "La nueva sesión de Real Estate School ya está disponible.",

    reserveSeat:
      "Reserva tu lugar",

    coursesEyebrow:
      "PROGRAMA DE FORMACIÓN",

    coursesTitle:
      "Cursos que te preparan para el mercado",

    coursesText:
      "Cada módulo te lleva desde los fundamentos hasta la práctica profesional.",

    levelBeginner:
      "PRINCIPIANTE",

    levelCore:
      "ESENCIAL",

    levelIntermediate:
      "INTERMEDIO",

    levelProfessional:
      "PROFESIONAL",

    levelFinal:
      "FINAL",

    openCourse:
      "ABRIR CURSO",

    course1Title:
      "Fundamentos de bienes raíces",

    course1Text:
      "Propiedad, títulos, derechos, responsabilidades y vocabulario del sector.",

    course2Title:
      "Ley y ética profesional",

    course2Text:
      "Contratos, divulgaciones, vivienda justa y deberes fiduciarios.",

    course3Title:
      "Financiamiento e hipotecas",

    course3Text:
      "Préstamos, intereses, crédito, costos de cierre y cálculos financieros.",

    course4Title:
      "Valoración de propiedades",

    course4Text:
      "Análisis de mercado, comparables, estimación de valor e inversión.",

    course5Title:
      "Mercadeo y clientes",

    course5Text:
      "Listados, negociación, presentaciones y relaciones con clientes.",

    course6Title:
      "Preparación para el examen",

    course6Text:
      "Repaso estructurado, preguntas de práctica y estrategia de examen.",

    pathEyebrow:
      "TRAYECTORIA DEL ESTUDIANTE",

    pathTitle:
      "Tu camino hacia el éxito",

    step1Title:
      "Inscríbete",

    step1Text:
      "Crea tu perfil de estudiante.",

    step2Title:
      "Aprende",

    step2Text:
      "Completa los 6 módulos a tu ritmo.",

    step3Title:
      "Practica",

    step3Text:
      "Evalúa tus conocimientos regularmente.",

    step4Title:
      "Triunfa",

    step4Text:
      "Prepárate para tu examen y tu carrera.",

    quizEyebrow:
      "PREGUNTA DE PRÁCTICA",

    quizTitle:
      "Evalúa tus conocimientos",

    quizQuestion:
      "¿Qué documento establece las condiciones de una transacción entre un comprador y un vendedor?",

    answer1:
      "Una tasación",

    answer2:
      "Un contrato de compraventa",

    answer3:
      "Una foto del anuncio",

    scoreLabel:
      "PUNTUACIÓN",

    correct:
      "¡Correcto! Es el contrato de compraventa.",

    incorrect:
      "Respuesta incorrecta. Inténtalo de nuevo.",

    certificateTitle:
      "Certificado de finalización",

    certificateText:
      "Después de completar todos los módulos y la evaluación final, recibirás un certificado digital de PRO-MAX Académie.",

    viewRequirements:
      "Ver los requisitos",

    contactEyebrow:
      "CONTACTO OFICIAL",

    contactTitle:
      "Conéctate con Real Estate School",

    websiteLabel:
      "Sitio web",

    emailLabel:
      "Correo electrónico",

    phoneLabel:
      "Teléfono",

    phoneHaitiLabel:
      "Teléfono de Haití 🇭🇹",

    locationLabel:
      "Ubicación",

    footerSlogan:
      "Construido para hoy. Preparado para mañana. Siempre hacia adelante.",

    askProfessor:
      "PREGUNTAR AL PROFESOR",

    courseOpened:
      "El curso fue añadido a tu progreso.",

    requirements:
      "Completa los 6 cursos y aprueba la evaluación final con al menos un 80%."
  },

  ht: {
    ecosystemLabel:
      "EKOSISTÈM DIJITAL PWOFESYONÈL",

    navHome:
      "Akèy",

    navCourses:
      "Kou yo",

    navPath:
      "Parcours",

    navExam:
      "Egzamen",

    navCertificate:
      "Sètifika",

    navAskProf:
      "Mande Pwofesè",

    navContact:
      "Kontak",

    heroEyebrow:
      "YON LEKÒL PRO-MAX ACADÉMIE",

    heroTitleOne:
      "Bati konesans ou.",

    heroTitleTwo:
      "Louvri pòt avni ou.",

    heroText:
      "Aprann prensip byen imobilye, prepare pou egzamen lisans ou, epi devlope konpetans pou sèvi kliyan avèk konfyans ak pwofesyonalis.",

    startLearning:
      "Kòmanse aprann",

    enrollNow:
      "Enskri kounye a",

    statCourses:
      "Kou esansyèl",

    statLanguages:
      "Lang",

    statOnline:
      "Sou entènèt",

    announcementTitle:
      "ENSKRIPSYON OUVÈ",

    announcementText:
      "Nouvo sesyon Real Estate School la disponib kounye a.",

    reserveSeat:
      "Rezève plas ou",

    coursesEyebrow:
      "PWOGRAM FÒMASYON",

    coursesTitle:
      "Kou ki prepare w pou mache a",

    coursesText:
      "Chak modil fèt pou mennen w soti nan fondasyon yo rive nan pratik pwofesyonèl.",

    levelBeginner:
      "DEBITAN",

    levelCore:
      "ESANSYÈL",

    levelIntermediate:
      "ENTÈMEDYÈ",

    levelProfessional:
      "PWOFESYONÈL",

    levelFinal:
      "FINAL",

    openCourse:
      "OUVRI KOU A",

    course1Title:
      "Fondasyon byen imobilye",

    course1Text:
      "Pwopriyete, tit, dwa, responsablite ak vokabilè endistri a.",

    course2Title:
      "Lwa ak etik pwofesyonèl",

    course2Text:
      "Kontra, divilgasyon, lojman ekitab ak obligasyon fidisyè.",

    course3Title:
      "Finansman ak ipotèk",

    course3Text:
      "Prè, enterè, kredi, closing costs ak kalkil finansye.",

    course4Title:
      "Valyasyon pwopriyete",

    course4Text:
      "Analiz mache, konparab, estimasyon valè ak envestisman.",

    course5Title:
      "Komèsyalizasyon ak kliyan",

    course5Text:
      "Listing, negosyasyon, prezantasyon ak relasyon kliyan.",

    course6Title:
      "Preparasyon egzamen",

    course6Text:
      "Revizyon estriktire, kesyon pratik ak estrateji egzamen.",

    pathEyebrow:
      "PARCOURS ETIDYAN",

    pathTitle:
      "Chemen ou pou reyisit",

    step1Title:
      "Enskri",

    step1Text:
      "Kreye pwofil etidyan ou.",

    step2Title:
      "Aprann",

    step2Text:
      "Fini 6 modil yo nan rit ou.",

    step3Title:
      "Pratike",

    step3Text:
      "Teste konesans ou regilyèman.",

    step4Title:
      "Reyisi",

    step4Text:
      "Prepare pou egzamen ak karyè.",

    quizEyebrow:
      "KESYON PRATIK",

    quizTitle:
      "Teste konesans ou",

    quizQuestion:
      "Ki dokiman ki esplike kondisyon yon tranzaksyon ant achtè ak vandè?",

    answer1:
      "Yon appraisal",

    answer2:
      "Yon kontra acha",

    answer3:
      "Yon listing photo",

    scoreLabel:
      "NÒT",

    correct:
      "Kòrèk! Se kontra acha a.",

    incorrect:
      "Pa kòrèk. Eseye ankò.",

    certificateTitle:
      "Sètifika akonplisman",

    certificateText:
      "Apre w fin konplete tout modil yo ak evalyasyon final la, w ap resevwa yon sètifika dijital PRO-MAX Académie.",

    viewRequirements:
      "Gade kondisyon yo",

    contactEyebrow:
      "KONTAK OFISYÈL",

    contactTitle:
      "Konekte avèk Real Estate School",

    websiteLabel:
      "Sit entènèt",

    emailLabel:
      "Imèl",

    phoneLabel:
      "Telefòn",

    phoneHaitiLabel:
      "Telefòn Ayiti 🇭🇹",

    locationLabel:
      "Lokalizasyon",

    footerSlogan:
      "Konesans. Preparasyon. Siksè nan byen imobilye.",

    askProfessor:
      "MANDE PWOFESÈ A",

    courseOpened:
      "Kou a ajoute nan pwogrè ou.",

    requirements:
      "Konplete 6 kou yo epi pase evalyasyon final la ak omwen 80%."
  }
};


/* =========================================================
   START APPLICATION
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {
    let currentLanguage = "en";
    let courseProgress = {};

    const LANGUAGE_KEY =
      "promaxRealEstateLanguage";

    const PROGRESS_KEY =
      "promaxRealEstateProgress";


    /* =====================================================
       STORAGE
    ===================================================== */

    function readStorage(
      key,
      fallback
    ) {
      try {
        const savedValue =
          window.localStorage.getItem(key);

        return savedValue === null
          ? fallback
          : savedValue;
      } catch (error) {
        return fallback;
      }
    }


    function writeStorage(
      key,
      value
    ) {
      try {
        window.localStorage.setItem(
          key,
          value
        );

        return true;
      } catch (error) {
        return false;
      }
    }


    /* =====================================================
       TRANSLATION
    ===================================================== */

    function getLanguagePack(
      language
    ) {
      return (
        translations[language] ||
        translations.en
      );
    }


    function translatePage(
      language
    ) {
      if (!translations[language]) {
        language = "en";
      }

      currentLanguage = language;

      const languagePack =
        getLanguagePack(
          currentLanguage
        );

      document.documentElement.lang =
        currentLanguage;

      document
        .querySelectorAll(
          "[data-i18n]"
        )
        .forEach(function (element) {
          const key =
            element.getAttribute(
              "data-i18n"
            );

          if (
            Object.prototype
              .hasOwnProperty.call(
                languagePack,
                key
              )
          ) {
            element.textContent =
              languagePack[key];
          }
        });

      document
        .querySelectorAll(
          "[data-i18n-placeholder]"
        )
        .forEach(function (element) {
          const key =
            element.getAttribute(
              "data-i18n-placeholder"
            );

          if (
            Object.prototype
              .hasOwnProperty.call(
                languagePack,
                key
              )
          ) {
            element.placeholder =
              languagePack[key];
          }
        });

      document
        .querySelectorAll(
          ".lang-btn"
        )
        .forEach(function (button) {
          button.classList.toggle(
            "active",
            button.getAttribute(
              "data-lang"
            ) === currentLanguage
          );
        });

      const askButton =
        document.getElementById(
          "askProfessorFloatingButton"
        );

      if (askButton) {
        askButton.textContent =
          languagePack.askProfessor;
      }

      writeStorage(
        LANGUAGE_KEY,
        currentLanguage
      );
    }


    /* =====================================================
       LANGUAGE BUTTONS
    ===================================================== */

    document
      .querySelectorAll(
        ".lang-btn"
      )
      .forEach(function (button) {
        button.addEventListener(
          "click",
          function () {
            const selectedLanguage =
              button.getAttribute(
                "data-lang"
              );

            translatePage(
              selectedLanguage
            );
          }
        );
      });


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
      document.getElementById(
        "menuToggle"
      );

    const mainNav =
      document.getElementById(
        "mainNav"
      );

    if (
      menuToggle &&
      mainNav
    ) {
      menuToggle.addEventListener(
        "click",
        function () {
          const menuIsOpen =
            mainNav.classList.toggle(
              "open"
            );

          menuToggle.setAttribute(
            "aria-expanded",
            String(menuIsOpen)
          );
        }
      );

      mainNav
        .querySelectorAll("a")
        .forEach(function (link) {
          link.addEventListener(
            "click",
            function () {
              mainNav.classList.remove(
                "open"
              );

              menuToggle.setAttribute(
                "aria-expanded",
                "false"
              );
            }
          );
        });
    }


    /* =====================================================
       ASK PROFESSOR BUTTON
    ===================================================== */

    function createAskProfessorButton() {
      let askButton =
        document.getElementById(
          "askProfessorFloatingButton"
        );

      if (askButton) {
        return askButton;
      }

      askButton =
        document.createElement("a");

      askButton.id =
        "askProfessorFloatingButton";

      askButton.href =
        "./ask-professor.html";

      askButton.setAttribute(
        "aria-label",
        "Ask the Professor"
      );

      askButton.textContent =
        "ASK THE PROFESSOR";

      askButton.style.position =
        "fixed";

      askButton.style.right =
        "18px";

      askButton.style.bottom =
        "18px";

      askButton.style.zIndex =
        "10000";

      askButton.style.display =
        "inline-flex";

      askButton.style.alignItems =
        "center";

      askButton.style.justifyContent =
        "center";

      askButton.style.minHeight =
        "54px";

      askButton.style.padding =
        "14px 21px";

      askButton.style.border =
        "1px solid #ff7300";

      askButton.style.borderRadius =
        "999px";

      askButton.style.color =
        "#050201";

      askButton.style.background =
        "linear-gradient(135deg,#ffb067,#ff7300)";

      askButton.style.fontFamily =
        "Montserrat,Arial,sans-serif";

      askButton.style.fontSize =
        "13px";

      askButton.style.fontWeight =
        "900";

      askButton.style.letterSpacing =
        ".03em";

      askButton.style.textDecoration =
        "none";

      askButton.style.boxShadow =
        "0 14px 34px rgba(255,115,0,.42)";

      document.body.appendChild(
        askButton
      );

      return askButton;
    }

    createAskProfessorButton();


    /* =====================================================
       FIX INTERNAL ROUTES
    ===================================================== */

    const routeCorrections = {
      "/student-dashboard":
        "./student-dashboard.html",

      "/registration-center":
        "./registration-center.html",

      "/course-01":
        "./course-01.html",

      "/course-02":
        "./course-02.html",

      "/course-03":
        "./course-03.html",

      "/course-04":
        "./course-04.html",

      "/course-05":
        "./course-05.html",

      "/course-06":
        "./course-06.html",

      "/finale-exam":
        "./final-exam.html",

      "finale-exam.html":
        "./final-exam.html",

      "/certificate-center":
        "./certificate-center.html"
    };

    document
      .querySelectorAll(
        "a[href]"
      )
      .forEach(function (link) {
        const href =
          link.getAttribute("href");

        if (
          Object.prototype
            .hasOwnProperty.call(
              routeCorrections,
              href
            )
        ) {
          link.setAttribute(
            "href",
            routeCorrections[href]
          );
        }
      });


    /* =====================================================
       TOAST
    ===================================================== */

    function showToast(
      message
    ) {
      const toast =
        document.getElementById(
          "toast"
        );

      if (!toast) {
        return;
      }

      toast.textContent =
        message;

      toast.classList.add(
        "show"
      );

      window.clearTimeout(
        showToast.timeoutId
      );

      showToast.timeoutId =
        window.setTimeout(
          function () {
            toast.classList.remove(
              "show"
            );
          },
          3000
        );
    }


    /* =====================================================
       COURSE PROGRESS
    ===================================================== */

    try {
      const savedProgress =
        JSON.parse(
          readStorage(
            PROGRESS_KEY,
            "{}"
          )
        );

      if (
        savedProgress &&
        typeof savedProgress ===
          "object"
      ) {
        courseProgress =
          savedProgress;
      }
    } catch (error) {
      courseProgress = {};

      writeStorage(
        PROGRESS_KEY,
        "{}"
      );
    }


    document
      .querySelectorAll(
        ".course-card"
      )
      .forEach(function (courseCard) {
        const courseKey =
          courseCard.getAttribute(
            "data-course"
          );

        const progressBar =
          courseCard.querySelector(
            ".progress-track span"
          );

        if (
          courseKey &&
          courseProgress[
            courseKey
          ] &&
          progressBar
        ) {
          progressBar.style.width =
            "20%";
        }

        const courseButton =
          courseCard.querySelector(
            ".course-start"
          );

        if (!courseButton) {
          return;
        }

        courseButton.addEventListener(
          "click",
          function () {
            if (courseKey) {
              courseProgress[
                courseKey
              ] = true;
            }

            writeStorage(
              PROGRESS_KEY,
              JSON.stringify(
                courseProgress
              )
            );

            if (progressBar) {
              progressBar.style.width =
                "20%";
            }
          }
        );
      });


    /* =====================================================
       PRACTICE QUIZ
    ===================================================== */

    const quizButtons =
      document.querySelectorAll(
        ".quiz-options button"
      );

    const quizResult =
      document.getElementById(
        "quizResult"
      );

    const scoreValue =
      document.getElementById(
        "scoreValue"
      );

    const scoreRing =
      document.querySelector(
        ".score-ring"
      );

    quizButtons.forEach(
      function (button) {
        button.addEventListener(
          "click",
          function () {
            quizButtons.forEach(
              function (option) {
                option.classList.remove(
                  "correct",
                  "wrong"
                );
              }
            );

            const isCorrect =
              button.getAttribute(
                "data-answer"
              ) === "correct";

            button.classList.add(
              isCorrect
                ? "correct"
                : "wrong"
            );

            const languagePack =
              getLanguagePack(
                currentLanguage
              );

            if (quizResult) {
              quizResult.textContent =
                isCorrect
                  ? languagePack.correct
                  : languagePack.incorrect;
            }

            if (scoreValue) {
              scoreValue.textContent =
                isCorrect
                  ? "100"
                  : "0";
            }

            if (scoreRing) {
              scoreRing.style.background =
                "conic-gradient(var(--orange) " +
                (
                  isCorrect
                    ? 360
                    : 0
                ) +
                "deg, #251005 0deg)";
            }
          }
        );
      }
    );


    /* =====================================================
       CERTIFICATE
    ===================================================== */

    const certificateButton =
      document.getElementById(
        "certificateBtn"
      );

    if (certificateButton) {
      certificateButton.addEventListener(
        "click",
        function () {
          showToast(
            getLanguagePack(
              currentLanguage
            ).requirements
          );
        }
      );
    }


    /* =====================================================
       REVEAL ANIMATION
    ===================================================== */

    const revealElements =
      document.querySelectorAll(
        ".reveal"
      );

    if (
      "IntersectionObserver" in
      window
    ) {
      const observer =
        new IntersectionObserver(
          function (
            entries,
            activeObserver
          ) {
            entries.forEach(
              function (entry) {
                if (
                  entry.isIntersecting
                ) {
                  entry.target
                    .classList.add(
                      "visible"
                    );

                  activeObserver
                    .unobserve(
                      entry.target
                    );
                }
              }
            );
          },
          {
            threshold: 0.12
          }
        );

      revealElements.forEach(
        function (element) {
          observer.observe(
            element
          );
        }
      );
    } else {
      revealElements.forEach(
        function (element) {
          element.classList.add(
            "visible"
          );
        }
      );
    }


    /* =====================================================
       FOOTER YEAR
    ===================================================== */

    const yearElement =
      document.getElementById(
        "year"
      );

    if (yearElement) {
      yearElement.textContent =
        new Date().getFullYear();
    }


    /* =====================================================
       INITIAL LANGUAGE
    ===================================================== */

    const savedLanguage =
      readStorage(
        LANGUAGE_KEY,
        "en"
      );

    currentLanguage =
      translations[savedLanguage]
        ? savedLanguage
        : "en";

    translatePage(
      currentLanguage
    );
  }
);
