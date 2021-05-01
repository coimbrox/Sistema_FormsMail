import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-onde-estamos',
  templateUrl: './onde-estamos.component.html',
  styleUrls: ['./onde-estamos.component.scss'],
  providers: [NgbCarouselConfig],
  encapsulation: ViewEncapsulation.None,
})
export class OndeEstamosComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.pauseOnHover = true;
    config.showNavigationArrows = true;
   }

  ngOnInit(): void {
  }

}
