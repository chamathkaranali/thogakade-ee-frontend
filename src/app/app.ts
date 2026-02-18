import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Dashboard } from "./page/dashboard/dashboard";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
    ngOnInit(): void {
    initFlowbite();
  }
  protected readonly title = signal('thogakade');
}
