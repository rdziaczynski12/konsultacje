import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';
import { ConsultationsService } from '../service/consultations.service';
import { NewPost } from '../model/newPost';

@Component({
  selector: 'app-my-panel',
  templateUrl: './my-panel.component.html',
  styleUrls: ['./my-panel.component.css']
})
export class MyPanelComponent implements OnInit {

  subjects: any[];
  specializations: any[];
  types: any[];
  form: any = {};
  newPost: NewPost = new NewPost();
  

  constructor(private appComponent: AppComponent,
    private tokenStorage: TokenStorageService,
    private consultationService: ConsultationsService,
    private router: Router,) { }

  ngOnInit() {
    if(!(this.appComponent.getAuthority()=='pm'||this.appComponent.getAuthority()=='admin'))
      this.router.navigate(['login']);
      this.consultationService.getAllMySubject(this.tokenStorage.getUsername()).subscribe( data => {
          this.subjects = data;
      });
      this.consultationService.getAllSpecialization().subscribe( data => {
        this.specializations = data;
      });
      this.consultationService.getAllType().subscribe( data => {
        this.types = data;
      });
  }

  addPost(){
    this.newPost.autor = this.tokenStorage.getUsername();
    this.newPost.date = new Date();
    this.newPost.title = this.form.title;
    this.newPost.description = this.form.description;
    this.newPost.subject = this.form.subjects;
    this.newPost.type = this.form.types;
    this.consultationService.addNewPost(this.newPost).subscribe( date =>{
      this.router.navigate(['consultations']);
    });
  }

}
