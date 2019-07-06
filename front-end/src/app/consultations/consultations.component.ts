import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { Posts } from '../model/posts';
import { ConsultationsService } from '../service/consultations.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.css']
})
export class ConsultationsComponent implements OnInit {

  private posts: Posts[];
  constructor(private appComponent: AppComponent,
    private consultationService: ConsultationsService,
    private router: Router,) { }

  ngOnInit() {
    if(!this.appComponent.log)
    this.router.navigate(['login']);
    this.consultationService.getAllPosts().subscribe(data => {
      this.posts=data;
      console.log(this.posts);
    });
  }

  getAllPosts(){
    this.consultationService.getAllPosts().subscribe(data => {
      this.posts=data;
    });
  }

}
