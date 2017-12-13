import { Injectable } from '@angular/core';
import {itemData} from '../models/data';
import {Observable,BehaviorSubject} from 'rxjs'
@Injectable()
export class DataService {
  private data:any;
  constructor() { 
  console.log("DataService initiated");
  this.data = new BehaviorSubject(itemData)
  }

  getdata():Observable<any>{
   return this.data;
  }

  
 deleteData(id){
  itemData.forEach((ele,index)=>{
   if(ele['id']=== id){
   	itemData.splice(index,1);
    }
  });
  
 this.data.next(itemData);
 

 }

 updateData(id,valueChanges){
  itemData.forEach((ele)=>{
  	if(ele['id']===id){
  		let keys =  Object.keys(valueChanges);
  		keys.forEach((key)=>{
  			ele[key] = valueChanges[key];
  		})
  	}
  })
 this.data.next(itemData);

 }

}
