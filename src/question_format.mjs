// // import { modelResponse } from './claude_quickstart.mjs';

// // input: modelResponse 
// // output: a structured object with the question, answers and the correct answer
// function formatQuizFormer(modelResponseObj) {
    
//     console.log("model response object is starting to be parsed");
//     const contentLines = modelResponseObj.content[0].text.split('\n');

//     console.log(contentLines);
//     let questions = [];
//     let answerChoices = {};
//     let correctAnswers = [];


//     for (let i=0; i < contentLines.length; i++) { 
//         let contentLine = contentLines[i];
        
//         // see if line is a questions
//         if (contentLine.charAt(contentLine.length - 1) === "?") {
//           //  console.log("i think this is a question");
//             questions.push(contentLines[i]);
//         }

//         // see if line has a correct answer
//         if (contentLine.substring(0, 7) === "Correct" ) {
//          //   console.log("i think this line has the correct answer");
//          //   console.log(contentLines[i]);     
//         }
//     }

//   //  console.log("questions for this paper");
//  //   console.log(questions);
// }


// const testModelResponseOne = [
//     'Based on this abstract, here are three multiple-choice questions with their correct answers:',
//     '',
//     '1. What is the main focus of the study by Li et al. described in this abstract?',
//     'a) Developing COVID-19 mRNA vaccines',
//     'b) Treating inherited heart diseases',
//     'c) Improving gene-editing therapies for lung diseases',
//     'd) Studying physiological mechanisms that protect the lung',
//     '',
//     'Correct answer: c) Improving gene-editing therapies for lung diseases',
//     '',
//     '2. How many novel lipids did the researchers synthesize and screen in this study?',
//     'a) 72',
//     'b) 270',
//     'c) 720',
//     'd) 7,200',
//     '',
//     'Correct answer: c) 720',
//     '',
//     '3. What delivery method did the researchers use for the RNA-lipid nanoparticles (LNPs) in mice?',
//     'a) Intravenous injection',
//     'b) Intramuscular injection',
//     'c) Oral administration',
//     'd) Intratracheal delivery',
//     '',
//     'Correct answer: d) Intratracheal delivery'];


// function formatQuiz(modelResponseObj) {

//     const contentLines = modelResponseObj.content[0].text.split('\n');

//     console.log(contentLines);

//     let questions = [];
//     let answerChoices = [];
//     let correctAnswers = [];

//     let i = 0;
//     while (i < contentLines.length) {
//         let contentLine = contentLines[i];
        
//         // see if line is a question
//         if (contentLine.charAt(contentLine.length - 1) === "?") {
//             questions.push(contentLine);

//             let answerChoiceSet = [contentLines[i+1], contentLines[i+2], contentLines[i+3], contentLines[i+4]];
//             answerChoices.push(answerChoiceSet);
//             i += 4;
//         }

//         // see if line has a correct answer
//         if (contentLine.substring(0, 7) === "Correct" || contentLine.substring(0,6) === "Answer") {
//             correctAnswers.push(contentLine);
//             i += 1;
//         }
//         i += 1;
//     }

//     const structuredQuizObject = {
//         "question": questions,
//         "correct": correctAnswers,
//         "answerChoices": answerChoices 
//     }
    
//     return structuredQuizObject;
// }

// export const quizInfo = formatQuiz(modelResponse);
