import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  squareStyles: any;

  constructor() {

    this.squareStyles = {
      position: 'relative',
      width: '100px',
      height: '100px',
      backgroundColor: 'black',
      top: '250px',
      left: '250px'
    };

  }

  /**
   * Method called when the user click on one of the 4 buttons
   * @param to
   */
  move(to: string) {

    switch (to) {
      case 'left':
        this.squareStyles.left = parseInt(this.squareStyles.left) - 10 + 'px';
        break;
      case 'top':
        this.squareStyles.top = parseInt(this.squareStyles.top) - 10 + 'px';
        break;
      case 'bottom':
        this.squareStyles.top = parseInt(this.squareStyles.top) + 10 + 'px';
        break;
      case 'right':
        this.squareStyles.left = parseInt(this.squareStyles.left) + 10 + 'px';
        break;
      default:
        console.error('Erreur !');
    }

  }

}
