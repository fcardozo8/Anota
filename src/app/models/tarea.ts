export class Tarea {
    //id: number= 0;
    //titulo?: string;
    static utlimo_id: number = 0;

    constructor(public id: number, public fecha: Date, public titulo: string, public obraSocial: string){
      Tarea.utlimo_id++;
      id = Tarea.utlimo_id;
      obraSocial="";
      //new Date(year, monthIndex, day, hours, minutes, seconds)

    }
}
