import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
	slideIndex = 1;
	sliderElement;
	slides;

	plusDivs(n) {
		this.showDivs(this.slideIndex += n);
	}

	showDivs(n) {
		let i;
		let slides = this.sliderElement.nativeElement;

		if (n > slides.length) {this.slideIndex = 1}
	  if (n < 1) {this.slideIndex = this.slides.length} ;
	  for (i = 0; i < this.slides.length; i++) {
	    this.slides[i].style.display = "none";
  }
 	slides[this.slideIndex-1].style.display = "block";
	}
  constructor() { }

  @ViewChild('sliderElement', { static: true }) MyDOMElement: ElementRef;

  ngOnInit(): void {
  	this.sliderElement.nativeElement.innerHTML;
  }

  ngAfterViewInit() {
    console.log(this.sliderElement);
    this.showDivs(this.slideIndex);
  }

}
