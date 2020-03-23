// variable for questions
  /*
    @TODO: write your questions here
  */
var questions = [
  
  {
    Q: "What is a quote that inspires you?",
    Ans: ["Go Hard or Go Home", "Life Begins at The End Of Your Comfort Zone", "Fall In Love With Taking Care Of Yourself"],
    correctAns: "Fall In Love With Taking Care Of Yourself"
  },
  {
    Q: "What's Your Favorite TV Show?",
    Ans: ["Comedy", "Sports", "Musical"],
    correctAns: "Comedy"
  },
  {
    Q: "What will finally break the internet?",
    Ans: ["Server Down", "Battery Discharged", "Hardware problems"],
    correctAns: "Server Down"
  },
  {
    Q: "What’s the most useless talent you have?",
    Ans: ["Singing", "Cooking", "Dancing"],
    correctAns: "Dancing"
  },
  {
    Q: "If you have a logo instead of a name, what would it look like?",
    Ans: ["Sunflower", "Half eaten apple", "Half moon on sky with star"],
    correctAns: "Half moon on sky with star"
  },
  {
    Q: "If your life was a movie, what songs would be on the soundtrack?",
    Ans: ["I heard it through the grapevine","I am sunflower a little funny",  "somebody i used to know"],
    correctAns: "I heard it through the grapevine"
  },
  {
    Q: "Which Color Looks Best On You??",
    Ans: ["Black","White", "I like to mix it up"],
    correctAns: "I like to mix it up"
  },
  {
    Q: "What Is Your Spirit Animal?",
    Ans: ["Peacock","Corgi","Tiger"],
    correctAns: "Peacock"
  },
  {
    Q: "What are your typical mornings like?",
    Ans: ["Hittng the gym and then off to work","Blasting music while I shower and get ready", "Answering emails before I even get into work"],
    correctAns: "Blasting music while I shower and get ready"
  }
  ,
  {
    Q: "Which member of your friend group are you?",
    Ans: ["The Funny One","The Good Friend",  "The Smart One"],
    correctAns: "The Good Friend"
  }

];

// variables to keep track of quiz state
var time = questions.length * 5;
var currentQuestionIndex = 0;
var timerId;
var score = 0;

/**
 * Variables to reference DOM elements
 * 
 * @description
 * You MAY want to consider the following elements:
 *  - [x] A button to start the quiz
 *  - [x] An element that displays the current time
 *  - [x] A questions container that has:
 *    - [ ] An element that displays the current question text
 *    - [x] A container for the choices buttons
 *  - [ ] An element that displays whether the user got a question correct or not
 *  - [ ] An input field to allow the user to put in their initials 
 *  - [x] A button to submit the user's high score
 * 
 * NOTE: Make sure your `index.html` elements correspond to these!
 * 
 * @see https://www.w3schools.com/jsref/met_document_getelementbyid.asp
 */
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var wrapper = document.getElementById("wrapper");
var startBtn = document.getElementById("start");
var response = document.getElementById("response");


/*
  @TODO: write the rest of your variables here
*/
/**
 * Function to start the quiz
 * 
 * @description
 * This function does the following:
 *  - [x] Hide/show page elements
 *  - [x] Start the timer
 *  - [x] Get the next question
 */
function startQuiz() {

  // hide start screen
  // var startScreenEl = document.getElementById("start-screen");
  // startScreenEl.setAttribute("class", "hide");
  // un-hide questions container
  // questionsEl.removeAttribute("class");

  // start timer
  timerId = setInterval(clockTick, 1000);

  // show starting time
  timerEl.textContent = time;

  // call the function that gets the next question 
  getQuestion();
}
/**
 * Function to display next question
 * 
 * @description
 * This function will:
 *  - [ ] Retrieve next question and answers
 *  - [ ] Update the page accordingly
 * 
 * @see https://www.w3schools.com/jsref/event_onclick.asp
 * @see https://www.w3schools.com/js/js_htmldom_methods.asp
 */
 /*
    @TODO: write your function code here
  */
function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  //  console.log(currentQuestion);

  
    questionsEl.textContent = currentQuestion.Q;
    // console.log(currentQuestion.Q);

    choicesEl.innerHTML = "";
     currentQuestion.Ans.forEach(function(item, i){
      var choiceButton = document.createElement("button");
      choiceButton.textContent = item;
      // console.log(item);

      // Adding event listner to choice button

      choiceButton.addEventListener("click",function(evt){
       
        // console.log(evt.target.value);

        // Grabing correct answer

        var correctAns = questions[currentQuestionIndex].correctAns;
        // console.log(correctAns);
        var currentChoice = evt.target.value;
        if (currentChoice === correctAns){
          console.log("You are right!");
          response.textContent = "You are right!"
          score++;
          console.log("your score");
        }
        else {
          console.log("oops You are wrong!")
          time-= 10;
          response.textContent = "Oops you are wrong!"
        }
        currentQuestionIndex +=1
        getQuestion();
      })
      choiceButton.classList.add("answers");
      choiceButton.setAttribute("value", item);
      choicesEl.append(choiceButton);
      if (currentQuestionIndex === questions.length-1)
      {
        quizEnd();
      }
     }) 
}
/**
 * Function that runs when the user clicks on an answer
 * 
 * @description
 * This function will:
 *  - [ ] Check if the user picked the right answer or not, and behave accordingly
 *  - [x] End quiz if no more questions left, or go onto next question
 *
 * HINT: for hiding/showing elements, take a look at the `.hide` class in
 *  `styles.css`!
 * 
 * @see https://www.w3schools.com/jsref/met_win_settimeout.asp
 * @see https://www.w3schools.com/jsref/met_element_setattribute.asp
 * @see https://www.w3schools.com/jsref/met_element_removeattribute.asp
 */
function questionClick() {
  /*
    @TODO: write the rest of your function code here
  */
  // check if we've run out of questions
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }

}
/**
 * Function to end the quiz
 * 
 * @description
 * This function will:
 *  - [ ] Stop the timer
 * 
 *  - [ ] Update the DOM accordingly
 *
 * HINT: for hiding/showing elements, take a look at the `.hide` class in
 *  `styles.css`!
 * 
 * @see https://www.w3schools.com/jsref/met_win_clearinterval.asp
 * @see https://www.w3schools.com/jsref/met_element_setattribute.asp
 * @see https://www.w3schools.com/jsref/met_element_removeattribute.asp
 */
function quizEnd() {

  /*
    @TODO: write your function code here
  */
 console.log("This is the last question and your score is " + score);
 wrapper.innerHTML="your score is :" + score;
 saveHighscore();
}
/**
 * Function to handle the timer
 * 
 * @description
 * This function will:
 *  - [ ] Update the timer
 *  - [x] End the quiz if the user runs out of time
 */
function clockTick() {
  /*
    @TODO: write the rest of your function code here
  */
  // end the quiz if the user runs out of time
    time--
    timerEl.textContent = time; 
    // console.log(time);  

  if (time <= 0) {
    console.log(time);
    clearInterval(timerId);
    quizEnd();
  }
  
}
/**
 * Function to save a new high score
 * 
 * @description
 * This function will:
 *  - [ ] Let user save their initials and high score
 *  - [ ] Redirect to high scores page
 * 
 * @see https://www.w3schools.com/jsref/prop_text_value.asp
 * @see https://www.w3schools.com/jsref/prop_win_localstorage.asp
 * @see https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
 */
function saveHighscore() {
  /*
    @TODO: write your function code here
  */
 console.log(score);
 localStorage.setItem("score", score);

}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
//startBtn.onclick = startQuiz();

startBtn.addEventListener("click", startQuiz);
