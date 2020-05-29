import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  opened: boolean = false;
  menuNav=[
    {name:"Inicio",route:"/inicio",icon:"home"},
    {name:"Pacientes",route:"/pacientes",icon:"person"},
    {name:"Estadísticas", route:"/estadisticas", icon:"bar_chart"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
