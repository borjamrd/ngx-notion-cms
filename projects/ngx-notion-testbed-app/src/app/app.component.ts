import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { LogoComponent } from './components/logo/logo.component';
import { GithubComponent } from "./components/github/github.component";

@Component({
    selector: 'app-root',
    imports: [NavComponent, RouterOutlet, ToggleButtonComponent, LogoComponent, GithubComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent { }
