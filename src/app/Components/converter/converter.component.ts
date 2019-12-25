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
  currentSelection='Length';
  unitsArray:any=[]
  request_data:any={}
  resultMagnitude={
    result:null
  }


  Length=['Metre','Centimeter','Kilometer','Inch','Yard','Foot']
  inputSelection="Metre"
  outputSelection="Centimeter"

  Volume=['US liquid gallon','Mililitre','Litre']
  Temperature=['Celsius','Fahrenheit']

  magnitude = new FormControl('')

  //mapping for Length

  lengthMapping={
    Metre:"m",
    Centimeter:"cm",
    Kilometer:"km",
    Inch:"inch",
    Yard:"yard",
    Foot:"foot"
    
  }
  
  volumeMapping={
    "US liquid gallon":"gallon",
    Mililitre:"ml",
    Litre:"l"
    
  }

  temperatureMapping={
    
    Celsius:"C",
    Fahrenheit:"F"
    
  }


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

    console.log(this.magnitude.value.length,typeof(this.magnitude.value))
    // console.log(event,'--------->event')

    if(this.magnitude.value.length == 0){
      this.resultMagnitude.result=''
    }
    
    if(this.currentSelection == 'Length'){

      this.request_data={

        "magnitude":Number(this.magnitude.value),
        "input_unit":this.lengthMapping[this.inputSelection],
        "output_unit":this.lengthMapping[this.outputSelection]
    }
    console.log(this.request_data,'-->re')
    }
    if(this.magnitude.value.length !== 0){

      this.http.getResult('/length',this.request_data).subscribe(data=>{

        console.log(data,'--------->data')
        
        this.resultMagnitude.result=data["data"][0]["result"]
      },error =>{
  
      })
    }

    

  }


  

}
