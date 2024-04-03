const containerBodyQuestion = document.querySelector(".container__body__question");
const containerBodyQuestionHeading = document.querySelector(
    ".container__body__question h2"
)
const answerA = document.getElementById("answers-A");
const answerB = document.getElementById("answers-B");
const answerC = document.getElementById("answers-C");
const answerD = document.getElementById("answers-D");

const containerBodyAnswersIndicatorLabel = document.querySelectorAll(
  ".container__body__answers--indicator label"
);
const questionNumber = document.querySelector("#question-number");
questionNumber.innerHTML = 1;
const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");

console.log(containerBodyQuestion);

if (answerA) {
  answerA.addEventListener("click", () => {
    console.log(answerA.checked)
  });
}
if (answerB) {
  answerB.addEventListener("click", () => {
    console.log(answerB.checked)
  });
}
if (answerC) {
  answerC.addEventListener("click", () => {
    console.log(answerC.checked)
  });
}
if (answerD) {
  answerD.addEventListener("click", () => {
    console.log(answerD.checked)
  });
}



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
    options: [
      "Junior Stylesheet",
      "Java Styles",
      "Java Script",
      "JavaScript",
    ],
    answer: "JavaScript",
  },
  {
    question: "4. Which is a JavaScript Library",
    options: [
      "React",
      "Bootstrap",
      "Bulma",
      "Laravel",
    ],
    answer: "React",
  },
  {
    question: "5. Who invented HTML and what year",
    options: [
      " HÃ¥kon Wium Lie, 1994",
      "Brendan Eich, 1995",
      "Tim Berners-Lee, 1993",
      "Tim Berners-Lee, 1989",
    ],
    answer: "Hypertext markup language",
  },
];

console.log(questions[0].options[0]);




previousButton.addEventListener("click", () => {
  console.log('previousButton');  
})

nextButton.addEventListener("click", () => {
  console.log('nextButton');  
})