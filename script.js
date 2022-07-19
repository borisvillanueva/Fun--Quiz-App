const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startQuiz(){
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(()=> Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    
}
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
   nextButton.classList.add('hide')
   while (answerButtonsElement.firstChild) {
       answerButtonsElement.removeChild(answerButtonsElement.firstChild)
   }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    
}
function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: "You're 3rd place right now in a race. What place are you in when you pass the person in 2nd place?",
        answers: [
            {text: '1st' , correct: false},
            {text: '2nd' , correct: true},
            {text: '3rd' , correct: false},
            {text: 'None of the Above' , correct: false}
        ]
    },
    {
        question: 'How many months have 28 days?',
        answers: [
            {text: '2' , correct: false},
            {text: '1' , correct: false},
            {text: 'All of them' , correct: true},
            {text: "Depends if there's a leap year or not." , correct: false}
        ]
    },
    {
        question: "How many 0.5cm slices of bread can you cut from a whole bread that's 25cm long? ",
        answers: [
            {text: '1' , correct: true},
            {text: '25' , correct: false},
            {text: '39' , correct: false},
            {text: "None of the above." , correct: false}
        ]
    },
    {
        question: "The answer is really big. ",
        answers: [
            {text: 'THE ANSWER' , correct: false},
            {text: 'Really big' , correct: false},
            {text: 'An elephant' , correct: true},
            {text: "The data given is insufficient." , correct: false}
        ]
    },
    {
        question: "Divide 30 by half and add ten. ",
        answers: [
            {text: '40.5' , correct: false},
            {text: '50' , correct: false},
            {text: '70' , correct: true},
            {text: "I know this is a trick question, so NONE. Ha!" , correct: false}
        ]
    },
    {
        question: "Mathew's father has three sons- Joseph I and Joseph II. Can you guess the name of the third son? ",
        answers: [
            {text: 'Joseph III' , correct: false},
            {text: 'Jerin' , correct: false},
            {text: 'Mathew' , correct: true},
            {text: "Joseph II" , correct: false}
        ]
    },
    {
        question: "What room do ghosts avoid? ",
        answers: [
            {text: 'The bathroom' , correct: false},
            {text: 'the bedroom' , correct: false},
            {text: 'the kitchen' , correct: false},
            {text: "the living room " , correct: true}
        ]
    },
    {
        question: "How is this possible: Alex is the father of Bo. But Bo is not the son of Alex.",
        answers: [
            {text: 'Alex is lying' , correct: false},
            {text: "Bo is to young to know his dad's name" , correct: false},
            {text: 'Bo is a girl' , correct: true},
            {text: "I still have no clue" , correct: false}
        ]
    },
    {
        question: "What is tall when it’s young, but short when it’s old?",
        answers: [
            {text: 'A tree' , correct: false},
            {text: "A candle " , correct: true},
            {text: 'A puppy' , correct: false},
            {text: "A rumor" , correct: false}
        ]
    },
    {
        question: "What has several keys but cant unlock anything?",
        answers: [
            {text: 'A locksmith' , correct: false},
            {text: "Alicia Keys" , correct: false},
            {text: 'A piano' , correct: true},
            {text: "An island" , correct: false}
        ]
    },
]
