import { Component, OnInit,Input,HostListener,Renderer2,ViewChild,ElementRef ,Output} from '@angular/core';

@Component({
  selector: 'tableHeader',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css']
})
export class TableHeaderComponent implements OnInit {
  @Input() headerValue;
  @Input() headerId;
  @ViewChild('sortIcon',{read:ElementRef}) sortIconElement:ElementRef;
  @Output() 
  private counter:number=0;
  public active:boolean=false;
  constructor(private renderer:Renderer2) { }

  ngOnInit() {
   
  }
  
  @HostListener('click') sortFunction(){
    this.active = true;
    this.counter++;
  switch(this.counter){
    case 1: console.log('descending'); 
            this.renderer.addClass(this.sortIconElement.nativeElement,'active')
            break;
    case 2: console.log("ascending")
            this.renderer.addClass(this.sortIconElement.nativeElement,'down');
            break;
    case 3: console.log("Default");
            
            this.defaultSettings();
  }   
  
  
  }

  defaultSettings(){
    this.counter=0;
    this.renderer.removeClass(this.sortIconElement.nativeElement,'active');
    this.renderer.removeClass(this.sortIconElement.nativeElement,'down');
  }





  // toggleIcon(ele:any,value:boolean){
    
  //    this.renderer.addClass(ele,'down')
  
  // }
   
  //    enableHeader(val){
  //      this.toggleIcon(val.firstElementChild);
   
  //  }



}
