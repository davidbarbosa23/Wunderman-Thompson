import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  constructor() { }

  ngOnInit(): void {
  }

}
