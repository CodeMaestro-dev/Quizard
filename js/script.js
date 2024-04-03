const containerBodyQuestion = document.querySelector(
  ".container__body__question"
);
const answerA = document.getElementById("answers-A");
const answerB = document.getElementById("answers-B");
const answerC = document.getElementById("answers-C");
const answerD = document.getElementById("answers-D");

const containerBodyAnswersIndicator = document.querySelectorAll(
  ".container__body__answers--indicator"
);
const containerBodyAnswersIndicatorLabel = document.querySelectorAll(
  ".container__body__answers--indicator label"
);
const questionNumber = document.querySelector("#question-number");
const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");

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
    answer: "Hypertext markup language",
  },
];

// Logics

// if (answerA) {
//   answerA.addEventListener("click", () => {
//     console.log(answerA.checked);
//   });
// }
// if (answerB) {
//   answerB.addEventListener("click", () => {
//     console.log(answerB.checked);
//   });
// }
// if (answerC) {
//   answerC.addEventListener("click", () => {
//     console.log(answerC.checked);
//   });
// }
// if (answerD) {
//   answerD.addEventListener("click", () => {
//     console.log(answerD.checked);
//   });
// }

function getUserAnswer() {
  for (let i = 0; i < containerBodyAnswersIndicator.length; i++) {
    if (answerA) {
      answerA.addEventListener("click", () => {
        console.log(answerA.checked);
        containerBodyAnswersIndicator[0].style = "background-color: #74f412";
        if (questions[0].options[0] === questions[0].answer) {
          console.log("correct answer");
        }
      });
      answerA.addEventListener("blur", () => {
        containerBodyAnswersIndicator[0].style = "backgroound-color: #00ffb0";
      });
    }
    if (answerB) {
      answerB.addEventListener("click", () => {
        console.log(answerB.checked);
        containerBodyAnswersIndicator[1].style = "background-color: #74f412";
        console.log(questions[0].options[1]);
      });
      answerB.addEventListener("blur", () => {
        containerBodyAnswersIndicator[1].style = "backgroound-color: #00ffb0";
      });
    }
    if (answerC) {
      answerC.addEventListener("click", () => {
        console.log(answerC.checked);
        containerBodyAnswersIndicator[2].style = "background-color: #74f412";
        console.log(questions[0].options[2]);
      });
      answerC.addEventListener("blur", () => {
        containerBodyAnswersIndicator[2].style = "backgroound-color: #00ffb0";
      });
    }
    if (answerD) {
      answerD.addEventListener("click", () => {
        console.log(answerD.checked);
        containerBodyAnswersIndicator[3].style = "background-color: #74f412";
        console.log(questions[0].options[3]);
      });
      answerD.addEventListener("blur", () => {
        containerBodyAnswersIndicator[3].style = "backgroound-color: #00ffb0";
      });
    }
    break;
  }
}

getUserAnswer();

// function getCheckedAnswer() {
//     let userAnswer = "";
//     if(answerA.checked) {
//         userAnswer = answerA.value;
//     } else if(answerB.checked) {
//         userAnswer = answerB.value;
//     } else if(answerC.checked) {
//         userAnswer = answerC.value;
//     } else if(answerD.checked) {
//         userAnswer = answerD.value;
//     }
//     console.log(userAnswer);
//     return(userAnswer);
// }

// getCheckedAnswer();

let number = 0;
containerBodyQuestion.innerHTML = `<h1>${questions[number].question}</h1>`;

previousButton.addEventListener("click", () => {
  console.log(number);
  if (number > 0) {
    number--;
    containerBodyQuestion.innerHTML = `<h1>${questions[number].question}</h1>`;
  } else {
    number = 5;
  }

  for (let i = 0; i < containerBodyAnswersIndicatorLabel.length; i++) {
    if (containerBodyQuestion.innerText === "1. What does HTML stand for?") {
      containerBodyAnswersIndicatorLabel[i].innerHTML = questions[0].options[i];
    } else if (
      containerBodyQuestion.innerText === "2. What does CSS stand for?"
    ) {
      containerBodyAnswersIndicatorLabel[i].innerHTML = questions[1].options[i];
    } else if (
      containerBodyQuestion.innerText === "3. What does JS stand for?"
    ) {
      containerBodyAnswersIndicatorLabel[i].innerHTML = questions[2].options[i];
    } else if (
      containerBodyQuestion.innerText === "4. Which is a JavaScript Library?"
    ) {
      containerBodyAnswersIndicatorLabel[i].innerHTML = questions[3].options[i];
    } else if (
      containerBodyQuestion.innerText === "5. Who invented HTML and what year?"
    ) {
      containerBodyAnswersIndicatorLabel[i].innerHTML = questions[4].options[i];
    } else {
      containerBodyAnswersIndicatorLabel[i].innerHTML = questions[0].options[i];
    }
  }

  console.log(containerBodyQuestion.innerText);
});

nextButton.addEventListener("click", () => {
  console.log(number);
  if (number < 5) {
    number++;
    containerBodyQuestion.innerHTML = `<h1>${questions[number].question}</h1>`;
  } else {
    number = 0;
  }

  for (let i = 0; i < containerBodyAnswersIndicatorLabel.length; i++) {
    if (containerBodyQuestion.innerText === "1. What does HTML stand for?") {
      containerBodyAnswersIndicatorLabel[i].innerHTML = questions[0].options[i];
    } else if (
      containerBodyQuestion.innerText === "2. What does CSS stand for?"
    ) {
      containerBodyAnswersIndicatorLabel[i].innerHTML = questions[1].options[i];
    } else if (
      containerBodyQuestion.innerText === "3. What does JS stand for?"
    ) {
      containerBodyAnswersIndicatorLabel[i].innerHTML = questions[2].options[i];
    } else if (
      containerBodyQuestion.innerText === "4. Which is a JavaScript Library?"
    ) {
      containerBodyAnswersIndicatorLabel[i].innerHTML = questions[3].options[i];
    } else if (
      containerBodyQuestion.innerText === "5. Who invented HTML and what year?"
    ) {
      containerBodyAnswersIndicatorLabel[i].innerHTML = questions[4].options[i];
    } else {
      containerBodyAnswersIndicatorLabel[i].innerHTML = questions[0].options[i];
    }
  }

  console.log(containerBodyQuestion.innerText);
});


for (let i = 0; i < containerBodyAnswersIndicatorLabel.length; i++) {
    if (containerBodyQuestion.innerText === '1. What does HTML stand for?') {
        containerBodyAnswersIndicatorLabel[i].innerHTML = questions[0].options[i];
  } else if (containerBodyQuestion.innerText === '2. What does CSS stand for?') {
      containerBodyAnswersIndicatorLabel[i].innerHTML = questions[1].options[i];
    } else if (containerBodyQuestion.innerText === '3. What does JS stand for?') {
      containerBodyAnswersIndicatorLabel[i].innerHTML = questions[2].options[i];
    } else if (containerBodyQuestion.innerText === '4. Which is a JavaScript Library?') {
      containerBodyAnswersIndicatorLabel[i].innerHTML = questions[3].options[i];
    } else if (containerBodyQuestion.innerText === '5. Who invented HTML and what year?') {
      containerBodyAnswersIndicatorLabel[i].innerHTML = questions[4].options[i];
    } else {
      containerBodyAnswersIndicatorLabel[i].innerHTML = questions[0].options[i];
    }
  }
  
  console.log(containerBodyQuestion.innerText)

switch (containerBodyQuestion.innerText) {
  case questions[0].question:
    number = 0;
    break;
  case questions[1].question:
    number = 1;
    break;
  case questions[2].question:
    number = 2;
    break;
  case questions[3].question:
    number = 3;
    break;
  case questions[4].question:
    number = 4;
    break;
}

switch (containerBodyQuestion.innerText) {
  case questions[0].question:
    questionNumber.innerText = 1;
    break;
  case questions[1].question:
    questionNumber.innerText = 2;
    break;
  case questions[2].question:
    questionNumber.innerText = 3;
    break;
  case questions[3].question:
    questionNumber.innerText = 4;
    break;
  case questions[4].question:
    questionNumber.innerText = 5;
    break;
}
