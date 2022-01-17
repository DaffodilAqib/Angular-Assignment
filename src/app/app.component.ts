import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieBuster';
  select_value:number = 0;
  value: boolean = true;
  select(event:any,num:number){
    if(event.target.innerText=="Unvote"){
      event.target.innerText = "Vote";
      this.select_value =0;
    }
    else{
      event.target.innerText = "Unvote";
      this.select_value = num;
    }
    
  }
  isSelected(index:number){
    return this.select_value===index;
  }
  anySelected(index:number){
    if(this.select_value===0){
      return true;
    }
    return this.select_value===index;
  }
}
