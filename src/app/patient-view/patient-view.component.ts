import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Chart } from 'chart.js'


@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.scss']
})
export class PatientViewComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public patientChosen: any) { }
  lastEventIndex: number = 1;
  ngOnInit(): void {
    console.log('Data here: ',this.patientChosen);

  }
  
  ngAfterViewInit(){
    this.populateDatasets(event);
  }

  populateDatasets(event){
    console.log('Event ',event);
    if(event.index == 2){
      let weekly_dates = [ '04/05/2020', '11/04/2020', '18/04/2020', '25/05/2020']
      let ibdq = Array.from({length: 4}, () => Math.floor(Math.random() * 80));
      let hb_short = Array.from({length: 4}, () => Math.floor(Math.random() * 80));

      let canvas = <HTMLCanvasElement> document.getElementById('myChart');
      let ctx = canvas.getContext('2d');

      let chart = new Chart(ctx,{
        type: 'bar',
        data:{
          labels: weekly_dates,
          datasets:[
            {
              label: 'IBDQ9',
              type: 'line',
              data: ibdq,
              backgroundColor: 'rgba(30, 25, 75, 0.6)',
              borderColor: 'rgba(30, 25, 75, 0.6)',
              fill: false,
            },
            {
              label: 'HB-Corto',
              type: 'line',
              data: hb_short,
              backgroundColor: 'rgba(60, 180, 75, 0.9)',
              borderColor: 'rgba(60, 180, 75, 0.9)',
              fill: false,
            }
          ]
        },
        options: {
        responsive: false,
        scales:{
          xAxes:[
            {
              gridLines: {
                display:false,
              }
            }
          ],
          yAxes:[
            {
              gridLines: {
                display:true,
              }
            }
          ],
        }
        }
      })
    }
  }
}
