import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LookAround';
  code = "";
  btndisabled: Boolean;
  check()
  {
    console.log(this.code);
  }
  validate()
  {
    if(this.code!="" &&  /^\d{5,6}$/.test(this.code))
    {
      this.btndisabled = false;
    }
    else{
      this.btndisabled = true;
    }    
    return this.btndisabled;
  }
}
