import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Dashboard } from "./page/dashboard/dashboard";
import { Login } from "./page/login/login";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dashboard, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
    ngOnInit(): void {
    initFlowbite();
  }
  protected readonly title = signal('thogakade');
}
