import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router){
}

  ngOnInit() {
  }
  title = 'LookAround';
  code = "";
  btndisabled: Boolean;
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
  goToPage(){
  this.router.navigate(['./main'], { queryParams: { zipcode: this.code } });
  }
}
