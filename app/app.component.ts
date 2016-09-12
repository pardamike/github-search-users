import { Component } from '@angular/core';
import { GithubService } from './services/github.service';
import { HttpModule } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [HttpModule, GithubService]
})
export class AppComponent { }
