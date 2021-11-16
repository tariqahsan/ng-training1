import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  flag : boolean = false;
  // toggle the flag
  onButtonClick(){
    this.flag = !this.flag;
    console.log("button clicked!!!!");
    console.log("value of flag -> " + this.flag);
  }

}
