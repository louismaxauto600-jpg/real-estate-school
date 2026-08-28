PRO-MAX Académie — Real Estate School
Plateforme dijital pwofesyonèl pou aprann prensip byen imobilye, suiv pwogrè etidyan, prepare pou egzamen final la epi resevwa yon sètifika dijital.
Direksyon: Max Louis, alias Le Baron
Lokalizasyon: Orlando, Florida
Fòma: 100% sou entènèt
Lang: Kreyòl, English, Español
Fonksyon prensipal yo
Paj dakèy ak 6 kou byen imobilye.
Enskripsyon etidyan ak Payment Center.
Pwogrè chak leson konsève sou aparèy etidyan an.
Student Dashboard pou kou, egzamen, sètifika ak aktivite etid.
Final Exam avèk nòt minimòm 80% pou pase.
Certificate Center avèk opsyon enprime oswa sove an PDF.
Pwofesè AI Max Louis — Alias Le Baron.
Repons AI an Kreyòl, English ak Español.
Kesyon ekri oswa kestyon atravè mikwofòn.
Vwa AI pou li repons pwofesè a.
Avatar Live avèk foto pwofesè a kòm solisyon sekou.
Istwa konvèsasyon ak sistèm revizyon kestyon.
Practice Center, plan etid pèsonalize 7 jou ak rapò etid.
Sis kou yo
#
Kou
Fichye
01
Fondasyon byen imobilye
course-01.html
02
Lwa ak etik pwofesyonèl
course-02.html
03
Finansman ak ipotèk
course-03.html
04
Valyasyon pwopriyete
course-04.html
05
Maketing ak relasyon kliyan
course-05.html
06
Preparasyon egzamen
course-06.html
Pwofesè Max AI
Paj ask-professor.html pèmèt etidyan an:
chwazi yon kou;
chwazi yon mòd: eksplike, rezime, egzanp, egzamen oswa quiz;
ekri oswa anrejistre kestyon li;
resevwa repons ki baze sou materyèl pwogram nan;
tande repons lan avèk vwa AI;
konsève istwa kestyon li yo;
voye yon repons pou revizyon si li pa klè;
lanse Avatar Live lè sèvis la konfigire.
Foto ofisyèl pwofesè a se professor-max-louis.png.
Paj prensipal yo
Paj
Fichye
Homepage
index.html
Enskripsyon
registration-center.html
Konfimasyon enskripsyon
registration-success.html
Payment Center
payment-center.html
Student Dashboard
student-dashboard.html
Pwofesè AI
ask-professor.html
Practice Center
professor-practice-center.html
Plan etid 7 jou
professor-study-plan.html
Rapò etid
student-study-report.html
Final Exam
final-exam.html
Certificate Center
certificate-center.html
Netlify Functions
Fonksyon
Wòl
netlify/functions/ask-professor.js
Jenere repons Pwofesè Max avèk OpenAI
netlify/functions/professor-voice.js
Konvèti repons pwofesè a an vwa
netlify/functions/transcribe-professor-question.js
Konvèti kestyon mikwofòn an tèks
netlify/functions/create-live-avatar.js
Kreye sesyon LiveAvatar
Environment variables
Mete kle sa yo nan Netlify → Site configuration → Environment variables. Pa mete kle prive yo dirèkteman nan GitHub.
OPENAI_API_KEY=your_private_openai_key
OPENAI_MODEL=gpt-5.6-luna
OPENAI_TTS_VOICE=cedar

LIVEAVATAR_API_KEY=your_private_liveavatar_key
LIVEAVATAR_AVATAR_ID=your_avatar_id
LIVEAVATAR_CONTEXT_ID=your_context_id
LIVEAVATAR_SANDBOX=true
OPENAI_API_KEY obligatwa pou chat AI, transkripsyon ak vwa. Paramèt LIVEAVATAR_* yo obligatwa sèlman pou Avatar Live.
Deplwaman
Mete tout fichye yo nan rasin menm GitHub repository a.
Konekte repository a ak Netlify.
Sèvi ak rasin repository a kòm publish directory.
Ajoute environment variables ki nesesè yo.
Fè yon nouvo deploy.
Verifye index.html, ask-professor.html, Dashboard, Final Exam ak Certificate Center.
Done etidyan
Pwogrè kou, nòt pratik, plan 7 jou, istwa Pwofesè Max ak rezilta egzamen yo konsève nan localStorage navigatè a. Sa vle di done sa yo rete sou aparèy ak navigatè etidyan an sof si yon bazdone ekstèn ajoute pita.
Sekirite
Pa mete OpenAI oswa LiveAvatar API keys nan HTML oswa JavaScript piblik.
Pa mete enfòmasyon bankè konfidansyèl nan README a.
Tout apèl AI prive yo dwe pase atravè Netlify Functions.
Payment Center la pa dwe mande nimewo kat dirèkteman san yon processeur peman sekirize.
Mak ak konsepsyon
Idantite vizyèl ofisyèl la itilize Orange Apricot + Black Fade. Logo prensipal la se real-estate-school-logo.png.
© 2026 PRO-MAX ACADÉMIE · REAL ESTATE SCHOOL
