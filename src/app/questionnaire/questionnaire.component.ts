import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  completed: boolean = false;
  data: any = null;

  constructor(
    private dialogRef: MatDialogRef<QuestionnaireComponent>,
        @Inject(MAT_DIALOG_DATA) data
  ) { 
    this.data = data;
    console.log('Data received: ', data);
  }

  ngOnInit(): void {
  }

  exitDialog(){
    this.dialogRef.close('alo');
  }

}
