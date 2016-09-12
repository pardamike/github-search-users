import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private userName: string;
    private client_id = '943c1f836594291173db';
    private client_secret = '6d0d54a2ea1858b14e6fd73353a916a8acaf1e7b';
    
    constructor(private _http:Http) {

        this.userName = "pardamike";

    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.userName + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }
    getRepos() {
        return this._http.get('http://api.github.com/users/' + this.userName + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }

    updateUser(username:string) {
        this.userName = username;
    }
}