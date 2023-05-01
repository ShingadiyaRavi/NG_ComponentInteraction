import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() student:any;

  childName:string='ChildName Is Called';
  counter:number=10;

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

}
