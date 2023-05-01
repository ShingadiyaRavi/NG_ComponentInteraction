import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  @ViewChild(ChildComponent) childComponent:any = ChildComponent;

  ngOnInit() {
    console.log(this.childComponent.childName)
  }

  //  This is used for the ViewChild() it will update only first one element...
  ngAfterViewInit() {
    this.childComponent.childName = 'ravi';
  }

  // This is used for the parent access the child function and properties...
  incrementByParent() {
    this.childComponent.increment();
  }

  decrementByParent() {
    // this.childComponent.decrement();
    this.childComponent.counter--;
  }

}
