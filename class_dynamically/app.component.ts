import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  edge: string = '';
  size: string = '';

  netStyle: string = '';

  applyStyle() {
    // console.log(`edge ${this.edge} & size ${this.size}`);
    // return `.${this.edge} .${this.size}`;
    this.netStyle = `${this.edge} ${this.size}`;
    // console.log(this.netStyle);
  }
}
