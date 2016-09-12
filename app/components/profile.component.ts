import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent {

    user:any = new Array();
    repos:any = new Array();
    username:string;


    constructor(private _githubService:GithubService) {
        this.search();
    }

    searchUser() {
        this._githubService.updateUser(this.username);
        this.search();
    }
    search() {
        this._githubService.getUser().subscribe(user => {
            this.user = user;
        });
        this._githubService.getRepos().subscribe(repos => {
            this.repos = repos;
            console.log(repos);
        });
    }
 }
