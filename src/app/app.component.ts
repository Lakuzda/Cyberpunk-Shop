import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Cyberpunk-Shop';

  loader = true;

  ngOnInit(): void {
    setTimeout(()=> {
      this.loader = false
    },
    2000)
  }
}
