function createAskProfessorButton() {
  if (
    document.getElementById(
      "askProfessorFloatingButton"
    )
  ) {
    return;
  }

  var askButton =
    document.createElement("a");

  askButton.id =
    "askProfessorFloatingButton";

  askButton.href =
    "./ask-professor.html";

  askButton.setAttribute(
    "data-i18n",
    "askProf"
  );

  askButton.setAttribute(
    "aria-label",
    "Ask the Professor"
  );

  askButton.textContent =
    "ASK THE PROFESSOR";

  askButton.style.position = "fixed";
  askButton.style.right = "18px";
  askButton.style.bottom = "18px";
  askButton.style.zIndex = "10000";
  askButton.style.display = "inline-flex";
  askButton.style.alignItems = "center";
  askButton.style.justifyContent = "center";
  askButton.style.minHeight = "52px";
  askButton.style.padding = "13px 20px";
  askButton.style.border =
    "1px solid #ff7300";
  askButton.style.borderRadius = "999px";
  askButton.style.color = "#050201";
  askButton.style.background =
    "linear-gradient(135deg,#ffb067,#ff7300)";
  askButton.style.fontFamily =
    "Montserrat,Arial,sans-serif";
  askButton.style.fontSize = "13px";
  askButton.style.fontWeight = "900";
  askButton.style.textDecoration = "none";
  askButton.style.boxShadow =
    "0 14px 34px rgba(255,115,0,.38)";

  document.body.appendChild(askButton);
}

createAskProfessorButton();
