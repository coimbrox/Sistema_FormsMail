import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrossel-inicio',
  templateUrl: './carrossel-inicio.component.html',
  styleUrls: ['./carrossel-inicio.component.scss']
})
export class CarrosselInicioComponent implements OnInit {

  imagens:any[]=[
    {
      name:'Banner',
    img:'assets/images/banner1novo.jpg',
    desc:'Teste'
  },
  {
    name:'Banner',
    img:'assets/images/teste1.jpg',
    desc:'Teste'
  },
  {
    name:'Banner',
    img:'assets/images/teste3.jpg',
    desc:'Teste'
  },
]
  constructor(private _config:NgbCarouselConfig) {
    _config.interval = 3000;
    _config.pauseOnHover = true;
    _config.showNavigationArrows = true;
   }

  ngOnInit(): void {
  }

}
