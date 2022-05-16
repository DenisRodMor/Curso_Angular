import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  //styles:["p{background-color: gray;}"], //si la app es simple se puede ingresar los estilos aqui de una vez
  //template:"<p>Aqui iria un empleado!</p>", //pero si lleva mucho css y html es mejor tenerla en los archivos separados
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre="Dennis";

  apellido="Rodriguez Mora";

  edad=21;

  empresa="Google";

  

  /*getEdad(){
    return this.edad;
  }*/

  habilitacionCuadro=false;

  usuRegistrado=false;

  textoDeRegistro="No hay nadie registrado";



  getRegistroUsuario(){
    this.usuRegistrado=false;
  }

  setUsuarioRegistrado(event:Event){
    //this.textoDeRegistro="El usuario se ha registrado con exito!";
    //alert ("El usuario se acaba de registrar");
    if((<HTMLInputElement>event.target).value=="si"){
      this.textoDeRegistro="El usuario se acaba de registrar";
    }else{
      this.textoDeRegistro="No hay nadie registrado";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
