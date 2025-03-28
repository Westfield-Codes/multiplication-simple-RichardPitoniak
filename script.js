/* MULTIPLICATION SIMPLE
 * This program should ask multiplication questions, displaying which question
 * is being asked, and counting the number of equations with at least one error.
 * FLOWCHART: https://lucid.app/lucidchart/5a3164fd-459f-494d-9cae-b4a6be593b13/view
 */

main()

/* main controls the program. Calling askQuestions() it provides feedback depending on the 
 * number right returned: Either "Perfect!" otherwise it says how many right out of the number asked. 
 * set the number of questions as the variable questions 
 * @param none
 * @return none
 */
function main() {
let questions = 5 
let right = askQuestions(questions)
if (right == questions) { alert ("perfect")}
else alert (" you got " + right + " out of " + questions)
}
/* askFive calls askQuestion() question times, sending the question number as an argument. 
 * It counts number wrong returned, and return number wrong to main().
 * @param: none
 * @return: score (0-questions)
 */
function askQuestions() {



}

/* askQuestion asks a multiplication question, using the quesiton parameter to say which
 * question is being asked.  It returns 1 if correct, 0 if incorrect.
 * @param: question (integer 1-5)
 * @return: integer (0 or 1)
 */
function askQuestion(question){
 
}
