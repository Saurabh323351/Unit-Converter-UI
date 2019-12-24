import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {HttpService} from '../../http-service/http.service'

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  selected = ['Length','Volume','Temperature'];
  selected_index=0
  currentSelection='Length';
  unitsArray:any=[]
  Length=['Metre','Centimeter','Kilometer','Inch','Yard','Foot']
  inputSelection="Metre"
  outputSelection="Centimeter"

  Volume=['US liquid gallon','Mililitre','Litre']
  Temperature=['Celsius','Fahrenheit']

  magnitude = new FormControl('')

  constructor(private http:HttpService) { }

  ngOnInit() {
    this.arraySelection()
  }

   arraySelection():void{
    
    console.log(this.currentSelection);
    console.log( this.inputSelection,this.outputSelection)

    if(this.currentSelection === 'Length'){
    this.inputSelection="Metre"
    this.outputSelection="Centimeter"
    this.unitsArray=this.Length  
    
    
    
    }
    
  

    if(this.currentSelection === 'Volume'){
    this.unitsArray=this.Volume
    this.inputSelection="Litre"
    this.outputSelection="Mililitre"
    }


    if(this.currentSelection === 'Temperature'){
    this.unitsArray=this.Temperature
    this.inputSelection="Celsius"
    this.outputSelection="Fahrenheit"
    }

  };

  sendRequest(event:any):void{

    console.log(this.magnitude.value,typeof(this.magnitude.value))
    const request_data={

      "magnitude":Number(this.magnitude.value),
      "input_unit":"m",
      "output_unit":"cm"
  }
    this.http.getResult('length',request_data).subscribe(data=>{

      console.log(data,'--------->data')
    },error =>{

    })
    

  }


  

}
