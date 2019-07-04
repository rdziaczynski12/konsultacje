import { Title } from '../model/title';


export class SignUpInfo {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    role: string[];
    password: string;
    position: string;
    activated: boolean;
    title: string[];
 
    constructor(firstName: string, lastName: string, username: string, password: 
        string, email: string, position: string, title: string[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.position = position;
        this.activated = false;
        this.role = ['user'];
        this.title = title;
    }
}