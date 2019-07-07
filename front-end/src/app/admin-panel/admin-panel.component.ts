import { Component, OnInit, Inject } from '@angular/core';
import {UserService} from '../service/user.service';
import { User } from '../model/user';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { ConsultationsService } from '../service/consultations.service';
import { Observable } from 'rxjs';

export interface DialogData {
  user: User;
}

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  constructor(private userService: UserService, 
    private appComponent: AppComponent,
    private router: Router,
    public dialog: MatDialog ) { }

  displayedColumns: string[] = ['id', 'firstName', 'lastName', "username", "edit", "delete"];
  
  user: User = new User();
  users: User[];
  ngOnInit() {
    if(this.appComponent.getAuthority()!="admin")
    this.router.navigate(['home']);
    this.getAllUser();
  }

  getAllUser(){
    this.userService.getAllUser().subscribe(data => {
      this.users = data;
    })
  }

  openEditUser(user: User){
    const dialogRef = this.dialog.open(EditUserDialog, {
      width: '450px',
      data: { user}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.getAllUser();
      }
    });
  }

  openAdd(user: User){
    const dialogRef = this.dialog.open(AddDialog, {
      width: '450px',
      data: { user}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.getAllUser();
      }
    });
  }

  deleteUser(id: Number){
    this.userService.deleteUser(id).subscribe(data => {
      this.getAllUser();
    });
  }
}


@Component({
  selector: 'admin-panel-edit',
  templateUrl: './admin-panel-edit.component.html',
  styleUrls: ['./admin-panel-edit.component.css']
})
export class EditUserDialog implements OnInit {

  user: User = new User();

  editForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required
    ]),
    lastName: new FormControl('', [
      Validators.required
    ]),
    username: new FormControl('', [
      Validators.required
    ])
  });

  constructor(public dialogRef: MatDialogRef<EditUserDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private userService: UserService,
  ) {
    this.user = this.data.user;
  }

  ngOnInit(){
    this.editForm.get('firstName').setValue(this.user.firstName);
    this.editForm.get('lastName').setValue(this.user.lastName);
    this.editForm.get('username').setValue(this.user.username);
  }

  cancel(){
    this.dialogRef.close();
  }

  editUser(){
    if(this.editForm.valid) {
      this.user.firstName = this.editForm.get('firstName').value;
      this.user.lastName = this.editForm.get('lastName').value;
      this.user.username = this.editForm.get('username').value;
      this.userService.editUser(this.user).subscribe(data => {
        this.dialogRef.close(this.user);
      })
    } 
  }

}


@Component({
  selector: 'admin-panel-add',
  templateUrl: './admin-panel-add.component.html',
  styleUrls: ['./admin-panel-add.component.css']
})
export class AddDialog implements OnInit {

  user: User = new User();

  subjects: any;
  form: any = {};

  constructor(public dialogRef: MatDialogRef<AddDialog>,
    private consultationService: ConsultationsService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private userService: UserService,
  ) {
    this.user = this.data.user;
  }

  ngOnInit(){
    this.consultationService.getAllMySubject(this.user.username.toString()).subscribe(data => {
      this.form.subjects = data;
    });
    this.consultationService.getAllSubject().subscribe(data => {
      this.subjects = data;
    });

  }

  cancel(){
    this.dialogRef.close();
  }

  addSubject(){
    this.consultationService.addSubject(this.form.subjects).subscribe(data => {
      this.dialogRef.close();
    });
  }

}
