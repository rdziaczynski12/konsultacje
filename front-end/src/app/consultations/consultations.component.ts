import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.css']
})
export class ConsultationsComponent implements OnInit {

  constructor(private appComponent: AppComponent,
    private router: Router,) { }

  ngOnInit() {
    if(!this.appComponent.log)
    this.router.navigate(['login']);
  }

}
