import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.css']
})
export class AttributeBindingComponent implements OnInit {

  ngOnInit(): void {
  }

  users: User[];
  columnSpan = 1;
  constructor(){
    // Initializing User instance
    // Adding user instances in the users array
    this.users = [new User('Bashir Ahmed', 56),
                  new User('Mohammed Shafi', 32),
                  new User('Tahir Ahmed', 62),
                  new User('Tariq Ahsan', 60)] ;
    this.assignColumenLength();
  }
  // Method to get the colspan value
  assignColumenLength(){
    for(let user of this.users){
      if(user.name.length > 15){
        console.log("column span value exceeded length of 15. Setting columnSpan = 2 ");
        this.columnSpan = 2;
        break;
      }
    }
  }
}

export class User {
  name : string;
  age : number;
  constructor(name: string, age : number) {
    this.name = name;
    this.age = age;
  }
}
