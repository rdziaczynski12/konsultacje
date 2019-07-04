import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-panel',
  templateUrl: './my-panel.component.html',
  styleUrls: ['./my-panel.component.css']
})
export class MyPanelComponent implements OnInit {

  constructor(private appComponent: AppComponent,
    private router: Router,) { }

  ngOnInit() {
    if(!(this.appComponent.getAuthority()=='pm'||this.appComponent.getAuthority()=='admin'))
      this.router.navigate(['login']);
  }

}
