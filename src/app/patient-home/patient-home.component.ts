import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { QuestionnaireComponent } from '../questionnaire/questionnaire.component';
import { Questions } from '../globals/questions';
import { Colors } from '../globals/colors';
import { Questionnaires } from '../globals/questionnaires';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.scss']
})
export class PatientHomeComponent implements OnInit {
  colors: any = Colors;
  questionnaires: any = Questionnaires;
  qStates: Array<boolean>;

  questions: any = Questions;
  finished: boolean = false;


  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    console.log('colors: ', this.colors);
    console.log('questionnaires: ', this.questionnaires);
    this.qStates = new Array(this.questionnaires.length).fill(false);
  }

  openDialog(data, index, state){
    const dialogConfig = new MatDialogConfig();
    console.log('state: ', state);
    if(!state){
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      dialogConfig.data = {
        data: data,
        info: {
          index: index,
          status: 'whatever',
        }
      };

      const dialogRef = this.dialog.open(QuestionnaireComponent, dialogConfig);

      dialogRef.afterClosed().subscribe(
        data => {
          if(data == null)
            console.log('Null exit');
          else
            {
              console.log('Data exit: ', data);
              this.qStates[data.index] = true;
            }
        }
      );   
    }
  }

}
