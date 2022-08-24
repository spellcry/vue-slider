// console.log('slider')

const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]

const app = new Vue({
	el: '#main-content',
	data: {
		name: 'Vue Carousel',
		slides,
		idSlideActive: 0,
	},
	methods: {
		nextSlide() {
			if (this.idSlideActive + 1 < this.slides.length)
				this.idSlideActive++;
			else
				this.idSlideActive = 0;
			},
		prevSlide() {
			if (this.idSlideActive - 1 >= 0)
				this.idSlideActive--;
			else
				this.idSlideActive = this.slides.length - 1;
		}
	}
});