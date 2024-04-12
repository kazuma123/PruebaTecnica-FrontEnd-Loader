import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  @Input() isLoading: boolean = false;
  @Input() interval: number = 0;
  @Input() dataImagenes: object[][] = [];

  isLoad: boolean = true;

  currentImages: any[][] = [];
  timerInterval: any;

  constructor() { }

  ngOnInit() {
    this.init();
  }
  hideLoading() {
    this.isLoad = false;
  }
  init() {
    this.cambiarImagenes();
    this.timerInterval = setInterval(() => {
      this.cambiarImagenes();
    }, this.interval);
  }

  cambiarImagenes() {
    this.currentImages = [];
    const imagenes = this.obtenerImagenes(this.dataImagenes);
    const randomIndexs = this.generarRandomsUnicos(imagenes.length);

    let index = 0;
    for (let i = 0; i < this.dataImagenes.length; i++) {
      const row = [];
      for (let j = 0; j < this.dataImagenes[i].length; j++) {
        const value = randomIndexs[index++];
        row.push(imagenes[value]);
      }
      this.currentImages.push(row);
    }
  }

  obtenerImagenes(arr: object[][]): object[] {
    return arr.reduce((acc, val) => acc.concat(val), []);
  }

  generarRandomsUnicos(size: number): number[] {
    const indexs: number[] = [];
    for (let i = 0; i < size; i++) {
      let newIndex: number;
      do {
        newIndex = Math.floor(Math.random() * size);
      } while (indexs.includes(newIndex));
        indexs.push(newIndex);
    }
    return indexs;
  }
}
