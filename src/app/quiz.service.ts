import { Injectable } from '@angular/core';

interface Quiz{
    question: string;
    answer: { option: string, correct: boolean } [];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[] = [
    {
      question: 'Who created the C programming language ? ',
      answer: [
        { option: 'Ken Thompson', correct: false },
        { option: 'Bjarne Strostrup', correct: false },
        { option: 'Dennis Ritchie', correct: true },
        { option: 'charles Babbage', correct: false },
      ]
    },
    {
      question: 'When NASSCOM established ? ',
      answer: [
        { option: '1956', correct: false },
        { option: '1988', correct: true },
        { option: '1964', correct: false },
        { option: '1997', correct: false },
      ]
    },
    {
      question: 'Which one is first high level language ?',
      answer: [
        { option: 'FORTRAN', correct: true },
        { option: 'C', correct: false },
        { option: 'C++', correct: false },
        { option: 'JAVA', correct: false }
      ]
    },
    {
      question: 'Which one is volatile memory in computer system ?',
      answer: [
        { option: 'Hard Disk', correct: false },
        { option: 'ROM', correct: false },
        { option: 'RAM', correct: true },
        { option: 'Optical Drive', correct: false }
      ]
    },
    {
      question: 'Total number of function keys in computer keyboard ? ',
      answer: [
        { option: '10', correct: false },
        { option: '12', correct: true },
        { option: '8', correct: false },
        { option: '14', correct: false }
      ]
    },
  ]
  getQuizzes(){
    return this.quizzes;
  }
}
