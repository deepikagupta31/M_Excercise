import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public isShuffleClicked: boolean = false;
  public randomNumber: number[];
  public cards: number[] = [1,2,3,4,5,6,7,8,9]; // Number on cards

  public shuffle() {
    this.isShuffleClicked = true;
    this.changeCards();
  }

  public sort() {
    this.changeCards();
  }

  public changeCards() {
    if(this.isShuffleClicked) {
      this.randomNumber = this.generateRandomNum(this.cards);
    }
    for(let x = 1; x < 10; x++) {
      document.getElementsByClassName('grid-item')[x-1].innerHTML = this.isShuffleClicked ? this.randomNumber[x-1].toString() : x.toString();
    }
    this.isShuffleClicked = false; // reset
  }

  public generateRandomNum(array) {
    var i = array.length, j = 0, temp;

    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        // swap randomly chosen card with current card
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }
}
