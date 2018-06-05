import { Component } from "@angular/core";


@Component({
  selector: "app",
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  private PI = 3.14;

  public ans = 0;

  public constructor() {
    let a:number = 10;
    let b:number = 4;

    this.ans = this.add(a,b);
  }

  private add(a:number, b:number):number {
    return a+b;
  }

  private sub(a:number, b:number): number{
    return a-b;
  }
}