import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
@Component({
  selector: 'itemDetail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input() dataFields;
  @Input() data:object;
  @Input() rowId:string;
  @Input() dataKey:any;
  @Output() onViewChanges = new EventEmitter<object>();
  public itemForm:FormGroup;
  
  constructor(private fb:FormBuilder) {
  
   }

  ngOnInit() {
  this.initializeForm();

  }

  initializeForm(){
    let formFields = {};
    this.dataFields.forEach((field)=>{
      formFields[field] = ''
    });
    this.itemForm =this.fb.group(formFields);
    let initialformValues = {};
      this.dataFields.forEach((field)=>{
      initialformValues[field] = this.data[field];
    })
   this.itemForm.setValue(initialformValues);
   


    }
    
    update(){
      let formControls = this.itemForm.controls;
	  let formValueChanges = {};
	  for(let control in formControls){
	   	if(!this.itemForm.controls[control].pristine){
	     	formValueChanges[control] =this.itemForm.controls[control].value 
	     
	   	}
	  } 
	
      let distinctFormValueChanges={};
      for(let obj in formValueChanges){
      	if (formValueChanges[obj]!= this.data[obj]){
      		distinctFormValueChanges[obj] = formValueChanges[obj]
      	}
      }  


    	this.onViewChanges.emit({
    		changeType:'update',
        id:this.data[this.dataKey],
    		rowId:this.rowId,
    		payload:distinctFormValueChanges
    	});

    }
    cancel(){
    	
    	this.onViewChanges.emit({
    		changeType:'cancel',
    		rowId:this.rowId,
    		payload:''
    	});
    
    this.initializeForm();
    }

}
