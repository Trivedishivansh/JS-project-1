const quizData = [
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: "JavaScript"
    },
    {
      question: "What does CSS stand for?",
      options: ["Central Style Sheets", "Cascading Style Sheets", "Coded Style Sheets", "Clean Style Sheet"],
      answer: "Cascading Style Sheets"
    },
    {
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "HyperText Markdown Language", "HyperTool Markup Language", "Hyperlink Text Mark Language"],
      answer: "HyperText Markup Language"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const resultEl = document.getElementById("result");
  
  function loadQuestion() {
    const current = quizData[currentQuestion];
    questionEl.textContent = current.question;
    optionsEl.innerHTML = "";
  
    current.options.forEach(option => {
      const div = document.createElement("div");
      div.textContent = option;
      div.className = "option";
      div.onclick = () => selectOption(div, option);
      optionsEl.appendChild(div);
    });
  }
  
  function selectOption(div, selectedOption) {
    // Remove previous selection
    Array.from(document.getElementsByClassName("option")).forEach(el => el.classList.remove("selected"));
    div.classList.add("selected");
    div.dataset.selected = selectedOption;
  }
  
  nextBtn.onclick = () => {
    const selectedDiv = document.querySelector(".option.selected");
    if (!selectedDiv) return alert("Please select an option!");
  
    const selected = selectedDiv.dataset.selected;
    if (selected === quizData[currentQuestion].answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  };
  
  function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    resultEl.classList.remove("hidden");
    resultEl.innerHTML = `<h2>Your Score: ${score} / ${quizData.length}</h2>`;
  }
  
  loadQuestion();
  