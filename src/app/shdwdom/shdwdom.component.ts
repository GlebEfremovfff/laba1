import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shdwdom',
  templateUrl: './shdwdom.component.html',
  styleUrls: ['./shdwdom.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShdwdomComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
