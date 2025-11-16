import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PatrimoineService } from '../../services/patrimoine';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {

  patrimoines: any[] = [];

  constructor(private service: PatrimoineService) {}

  ngOnInit(): void {
    this.loadPatrimoines();
  }

  loadPatrimoines() {
    this.service.getAll().subscribe((data: any) => {
      this.patrimoines = data;
    });
  }
}
