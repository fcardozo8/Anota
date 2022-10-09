import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Input()
  titulo2?: string;
  constructor() {
    //this.titulo = "asdsad";
  }

  ngOnInit(): void {
  }

}
