import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  opened: boolean = false;
  menuNav=[
    {name:"Inicio", route:"/inicio",icon:"home"},
    {name:"Pacientes", route:"/pacientes",icon:"people"},
    {name:"Estadísticas", route:"/estadisticas", icon:"bar_chart"},
    {name:"Inicio Paciente", route:"/inicioPaciente", icon:"person"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
