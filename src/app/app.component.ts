import { Component, OnInit } from '@angular/core';
import { KeyPair } from './interface';
import { UsersService } from './users.service';
import { UsersInterface,Useradd } from './Usersinterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

public parentpass = "this is data parent pass in child";

  showform:boolean = false;
  udata = <Useradd>{ username:null,email:null,password:null };
  UsersData:any = [];
  //any datatype
 currentStyles = {     
   'color':"red"        
};

   //title = 'batch';
   //str = <string> "this is string";
   //arr:number[] = [1,2,3];
   //abc:void = undefined;
   //uni:string | number | any = 100;
   //this is the exmple of interface
   //multiple datatype we can use here
   //There is no meaning to assign void to a variable, as only null or undefined is assignable to void.
   //angular 8 
   constructor(private _api:UsersService){

          //this.display();
     	  	// this.Sum(2,3);
     	  	// this.greeting();
     	    //  this.Print();
     	    //  this.example();
     	    // let game = <KeyPair>{num:1,str:"hello"};
     	    // console.log(game);
          //let x: number = 10,  y = 20;

// if (x > y) 
// {
//     console.log('x is greater than y.');
// } 
// else
// {
//     console.log('x is less than or equal to y.'); 
// }

// let day : number = 4;

// switch (day) {
//     case 0:
//         console.log("It is a Sunday.");
//         break;
//     case 1:
//         console.log("It is a Monday.");
//         break;
//     case 2:
//         console.log("It is a Tuesday.");
//         break;
//     case 3:
//         console.log("It is a Wednesday.");
//         break;
//     case 4:
//         console.log("It is a Thursday.");
//         break;
//     case 5:
//         console.log("It is a Friday.");
//         break;
//     case 6:
//         console.log("It is a Saturday.");
//         break;
//     default:
//         console.log("No such day exists!");
//         break;
// }


// let arr = [10, 20, 30, 40];

// for (var val of arr) {
//   console.log(val); // prints values: 10, 20, 30, 40
// }

// let i: number = 2;

// while (i < 4) {
//     console.log( "Block statement execution no." + i )
//     i++;
// }

// let i: number = 2;
// do {
//     console.log("Block statement execution no." + i )
//     i++;
// } while ( i < 1)

}


//crud
 ngOnInit()
  {
    this._api.getUsers().subscribe((data) => {
      this.UsersData = data

      });

  }

create(f)
{
  //console.log(f);
  this._api.create(f.value).subscribe((data) => { this.ngOnInit();
     f.reset();
   });

}

getdata(data)
{

  this.udata = data;
  this.showform = true;

}
 
 delete(id)
 {
   console.log(id);
   if(confirm("Are you sure to delete ")) {

    this._api.delete(id).subscribe((data) => { console.log(data); this.ngOnInit(); });

    
  }

   }

   update(f)
   {

     this._api.update(f.value).subscribe((data) => { 
       console.log(data);
       this.showform = false;
       f.reset();
      this.ngOnInit(); });
   }


//end crud

//Example: Named Function
  display() 
   {

    console.log("Hello TypeScript!");
   }

  //Functions can also include parameter types and return type.

   Sum(x: number, y: number) : number {
   	console.log(x+y);
    return x+y;
   }
   //Anonymous function store whole function in variable and call like variable call
   greeting = function() {
    console.log("Hello anonymous function!");
    };
    //this is the just example of the typescript functionn.
    Print = () => {console.log("Hello fat arrow function");}
 	//default param in fat arrow function here is the example 
    example = (xyz:string = 'oke') => console.log('hello' + xyz);
   //here is the exmple of interface so i have created a interface

}

