const quizDB = [
    {

        question: "What does HTML stand for?",


        a: "Hyper Text Preprocessor",
        b: "Hyper Text Markup Language",
        c: "Hyper Text Multiple Language",
        d: "Hyper Tool Multi Language",
        ans: "ans1"

    },
    {

        question: "What does CSS stand for?",


        a: "Common Style Sheet",
        b: "Colorful Style Sheet",
        c: "Computer Style Sheet",
        d: "Cascading Style Sheet",
        ans: "ans4"

    },
    {

        question: "What does PHP stand for?",


        a: "Hypertext Preprocessor",
        b: "Hypertext Programming",
        c: "Hypertext Preprogramming",
        d: "Hometext Preprocessor",
        ans: "ans1"

    },
    {

        question: "What does SQL stand for?",


        a: "Stylish Question Language",
        b: "Stylesheet Query Language",
        c: "Statement Question Language",
        d: "Structured Query Language",
        ans: "ans4"

    },
    
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');


let questionCount = 0;
let score = 0;


const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;



}
loadQuestion();
const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {


        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
        
    });
    return answer;
  

};
const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;

    };
    questionCount++;
    deselectAll();
    if (questionCount < quizDB.length) {
        loadQuestion();
    }
    else {
        showScore.innerHTML = `<h3>You scored ${score}/${quizDB.length}✌</h3>️
        <button class="btn" onclick="location.reload()"> Play Again</button> `;
        
        
        
        
        showScore.classList.remove('scoreArea');

    }

});
