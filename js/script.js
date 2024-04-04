const questions = [
  {
    question: "1. What does HTML stand for?",
    options: [
      "Hypertext markup language",
      "Hypervisor Tech Machine learning",
      "Hyper Text Markup Language",
      "Hyper Text Markup Logo",
    ],
    answer: "Hypertext markup language",
  },
  {
    question: "2. What does CSS stand for?",
    options: [
      "Colorful Style Sheet",
      "Cascading Style Sheet",
      "Computer Semantic Sheet",
      "Cascading Semantic Stub",
    ],
    answer: "Cascading Style Sheet",
  },
  {
    question: "3. What does JS stand for?",
    options: ["Junior Stylesheet", "Java Styles", "Java Script", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "4. Which is a JavaScript Library?",
    options: ["React", "Bootstrap", "Bulma", "Laravel"],
    answer: "React",
  },
  {
    question: "5. Who invented HTML and what year?",
    options: [
      " HÃ¥kon Wium Lie, 1994",
      "Brendan Eich, 1995",
      "Tim Berners-Lee, 1993",
      "Tim Berners-Lee, 1989",
    ],
    answer: "Tim Berners-Lee, 1993",
  },
];

const containerBodyEl = document.querySelector(".container__body");
const questionNumberEl = document.querySelector("#question-number");
let count = 0;
let questionAnswered = 0;
let correctAnswer = 0;

// Event handlers
function nextQuestions() {
  const options = document.querySelectorAll("input");
  for (let option of options) {
    if (option.checked) {
      questionAnswered += 1;
      break;
    }
  }
  if (count < questions.length - 1) {
    count += 1;
    change();
    renderQuestion();
  } else {
    renderSummary();
  }
}

function checkAnswer(e) {
  if (e.currentTarget.value === questions[count].answer) {
    correctAnswer += 1;
    e.currentTarget.parentElement.classList.toggle("correct");
    for (let option of e.currentTarget.parentElement.parentElement.children) {
      if (option.children[0].value !== questions[count].answer) {
        option.disabled = true;
        option.parentElement.style.pointerEvents = "none";
      }
    }
  } else {
    e.currentTarget.parentElement.classList.toggle("wrong");
    for (let option of e.currentTarget.parentElement.parentElement.children) {
      console.log(option.children[0].value);
      if (option.children[0].value === questions[count].answer) {
        option.classList.toggle("correct");
        option.disabled = true;
        option.parentElement.style.pointerEvents = "none";
        break;
      }
    }
  }
}

// Rendering of pages
function renderQuestion() {
  containerBodyEl.innerHTML = `
    <div class="container__body__question">
            <h2>${questions[count].question}</h2>
    </div>
    <div>
      <div class="container__body__answers">
        <div class="container__body__answers--indicator">
          <input type="radio" name="answers" id="answers-A" value="${questions[count].options[0]}" />
          <label for="answers-A">${questions[count].options[0]}</label>
        </div>
        <div class="container__body__answers--indicator">
          <input type="radio" name="answers" id="answers-B" value="${questions[count].options[1]}" />
          <label for="answers-B">${questions[count].options[1]}</label>
        </div>
        <div class="container__body__answers--indicator">
          <input type="radio" name="answers" id="answers-C" value="${questions[count].options[2]}" />
          <label for="answers-C">${questions[count].options[2]}</label>
        </div>
        <div class="container__body__answers--indicator">
          <input type="radio" name="answers" id="answers-D" value="${questions[count].options[3]}" />
          <label for="answers-D">${questions[count].options[3]}</label>
        </div>
      </div>
    </div>
`;
  questionNumberEl.innerHTML = `${count + 1}`;
  const answers = document.querySelectorAll("input");
  for (let answer of answers) {
    answer.addEventListener("input", checkAnswer);
  }
}

// Function for rendering the summary page
function renderSummary() {
  containerBodyEl.innerHTML = `
    <div class="summmary__body">
      <h2>You answered ${questionAnswered} out of ${questions.length} questions</h2>
      <p>You got ${correctAnswer} out of ${questions.length} correct</p>
    </div>
    <div>
      <button id="retake-test">Retake Test</button>
    </div>
`;
  document.getElementById("next-button").style.display = "none";
  document.getElementById("retake-test").addEventListener("click", () => {
    window.location.reload();
  });
  document.querySelector(".container__header--timer").style.display = "none";
}

// Function for random number
// function printRandomNumber() {
//   let count = Math.floor(Math.random() * 5);
//   return(count)
// }

// Initial Rendering ogf page
renderQuestion();

// Selecting the buttons
const nextButton = document.getElementById("next-button");

// Event Listeners
nextButton.addEventListener("click", nextQuestions);

// Progress bar
const progress = document.querySelector(".progress--done");

function change() {
  progress.style.width = `${(count / (questions.length - 1)) * 100}%`;
}

// Timer

const timer = document.getElementById("timer");
function timeCounter() {
  let sec = 29;
  var time = setInterval(function () {
    timer.innerHTML = `${sec} sec`;
    sec--;
    if (sec < 0) {
      clearInterval(time);
    }
    if (timer.innerHTML === "0 sec") {
      renderSummary();
    }
  }, 1000);
}

timeCounter();
