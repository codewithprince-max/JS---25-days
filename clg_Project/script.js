const questions = [
  "Tell me about yourself",
  "Why should we hire you?",
  "What are your strengths?",
  "What are your weaknesses?",
  "Describe a challenge you faced"
];

let current = 0;
let timer;
let timeLeft = 30;
let answers = [];

function startInterview() {
  current = 0;
  answers = [];
  showQuestion();
}

function showQuestion() {
  if (current >= questions.length) return;

  document.getElementById("questionBox").innerText = questions[current];
  document.getElementById("answer").value = "";

  timeLeft = 30;
  document.getElementById("timer").innerText = timeLeft;

  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = timeLeft;

    if (timeLeft <= 0) {
      nextQuestion();
    }
  }, 1000);
}

function nextQuestion() {
  clearInterval(timer);

  let ans = document.getElementById("answer").value;
  answers.push(ans);

  current++;
  showQuestion();
}

function analyzeAnswer(ans) {
  let score = 0;
  let feedback = "";

  if (ans.length > 50) {
    score += 3;
    feedback += "Good detail. ";
  } else {
    feedback += "Answer too short. ";
  }

  if (ans.toLowerCase().includes("team")) {
    score += 2;
    feedback += "Mentions teamwork. ";
  }

  if (ans.toLowerCase().includes("learn")) {
    score += 2;
    feedback += "Shows learning attitude. ";
  }

  if (ans.toLowerCase().includes("hardwork")) {
    score += 3;
    feedback += "Shows dedication. ";
  }

  return { score, feedback };
}

function submitInterview() {
  clearInterval(timer);

  let totalScore = 0;
  let feedbackText = "";

  answers.forEach((ans, i) => {
    let result = analyzeAnswer(ans);
    totalScore += result.score;
    feedbackText += `<p><b>Q${i + 1}:</b> ${result.feedback}</p>`;
  });

  document.getElementById("result").innerHTML = `
    <h3>📊 Result</h3>
    <p>Total Score: ${totalScore}</p>
    ${feedbackText}
  `;
}