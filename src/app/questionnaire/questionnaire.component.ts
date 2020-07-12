import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  completed: boolean = false;
  questionnaire: any = null;
  progress: number = 0;
  answers: Array<number>;
  currentQuestion: any;
  questionIndex = 0;
  questionnaireSum: number = 0;

  constructor(
    private dialogRef: MatDialogRef<QuestionnaireComponent>,
        @Inject(MAT_DIALOG_DATA) data
  ) { 
    this.questionnaire = data;
    console.log('Data received: ', this.questionnaire);
  }

  ngOnInit(): void {
    this.answers = new Array(this.questionnaire.questions.length).fill(0);
    this.currentQuestion = this.questionnaire.questions[0];
    console.log('Answers: ', this.answers);
  }

  exitDialog(){
    this.dialogRef.close('Exited');
  }

  radioChange(event){
    this.answers[this.questionIndex] = parseInt(event.value);
    this.answers = this.answers.map(i=>Number(i))
    console.log('Answers: ', this.answers);
    this.progressCheck();
    this.questionnaireSum = this.answers.reduce((a, b) => a + b)
    console.log('Q SUM: ', this.questionnaireSum);
  }

  previousQuestion(){
    if(this.questionIndex!=0){
      this.questionIndex--;
      this.currentQuestion = this.questionnaire.questions[this.questionIndex];
    }
  }

  nextQuestion(){
    if(this.questionIndex!=this.questionnaire.questions.length - 1){
      this.questionIndex++;
      this.currentQuestion = this.questionnaire.questions[this.questionIndex];
    }
  }

  progressCheck(){
    let answered = this.answers.filter( a => a != 0)
    this.progress = answered.length;
  }

}
