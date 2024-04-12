import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMAGES } from '../utils/data';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isLoading: boolean = false;
  interval: number = 0;

  images: object[][] = IMAGES;

  constructor(private router: Router) { }

  ngOnInit() {
    this.interval = 2000;
  }

  goToPage(pageName:string){
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate([`${pageName}`]);
      this.isLoading = false;
    }, 10000);
  }
}
