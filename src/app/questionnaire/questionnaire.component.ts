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
  questionnaireInfo: any = null;

  progress: number = 0;
  answers: Array<number>;
  currentQuestion: any;
  questionIndex = 0;
  questionnaireSum: number = 0;

  constructor(
    private dialogRef: MatDialogRef<QuestionnaireComponent>,
        @Inject(MAT_DIALOG_DATA) data
  ) { 
    this.questionnaire = data.data;
    this.questionnaireInfo = data.info;
    console.log('Data received: ', this.questionnaire);
    console.log('Q Info: ', this.questionnaireInfo);
  }

  ngOnInit(): void {
    this.answers = new Array(this.questionnaire.questions.length).fill(0);
    this.currentQuestion = this.questionnaire.questions[0];
  }

  exitDialog(finished){
    if(finished)
      this.dialogRef.close(this.questionnaireInfo);
    else
      this.dialogRef.close(null);
  }

  radioChange(event){
    this.answers[this.questionIndex] = parseInt(event.value);
    console.log('Answers: ', this.answers);
    let sum = 0;
    this.answers.forEach(a => sum = sum + a);
    this.questionnaireSum = sum;
    console.log('Current sum: ', this.questionnaireSum);
    this.progressCheck();
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
    this.progress = this.answers.filter( a => a != 0).length;
    console.log('Current progress: ', this.progress);
  }

}
