/* MULTIPLICATION SIMPLE
 * This program should ask multiplication questions, displaying which question
 * is being asked, and counting the number of equations with at least one error.
 * FLOWCHART: https://lucid.app/lucidchart/5a3164fd-459f-494d-9cae-b4a6be593b13/view
 */


/* main controls the program. Calling askQuestions() provides feedback depending on the 
 * number right returned: Either "Perfect!" or it says how many right out of the number asked. 
 * Store the number of questions to ask in a variable called questions.
 * @param none
 * @return none
 */
function main() {
let questions = 5
let right = askQuestion(questions)
if (right == questions) alert ("Perfect!")
else alert ("you got " + right + " out of " + questions)
}

/* askQuestions calls askQuestion() question number if times, sending the question number as an argument. 
 * It counts the number right returned, and return number right to main().
 * @param: none
 * @return: {integer} score (0-questions)
 */
function askQuestions() {
let right = 0
let question = 1
while (question <= questions ) {
  score += askQuestion(questions)
questions++
}
right
}

/* askQuestion asks a multiplication question, using the question parameter to say which
 * question is being asked.  It returns 1 if correct, 0 if incorrect.
 * @param: {integer} question 
 * @return: {integer} (0 or 1) or {boolean}
 */
function askQuestion(question){
  //L-H= Math.random()*(H-L+1)+L;
  let a = Math.floor(Math.random()*9-3+1)+3
  let b = Math.floor(Math.random()*9-3+1)+3
  let product = a*b
  let equations = "question " + question + ": " + a + " * " + b + " =?"
  let answer = prompt(equations)
  if (answer == product) {
    alert ("correct")
    return true 
  }
else alert ("incorrect")
return false 
}
