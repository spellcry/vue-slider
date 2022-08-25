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
		intervalId: undefined,
	},
	methods: {
		nextSlide() {
			this.idSlideActive = this.isEnd() ? 0 : this.idSlideActive + 1;
			// if (this.idSlideActive + 1 < this.slides.length)
			// 	this.idSlideActive++;
			// else
			// 	this.idSlideActive = 0;
		},
		prevSlide() {
			this.idSlideActive = this.isStart() ? this.slides.length - 1 : this.idSlideActive - 1;
			// if (this.idSlideActive - 1 >= 0)
			// 	this.idSlideActive--;
			// else
			// 	this.idSlideActive = this.slides.length - 1;
		},
		isEnd() {
			const lastIndex = this.slides.length - 1;
			return this.idSlideActive === lastIndex;
		},
		isStart() {		
			return this.idSlideActive === 0;
		},
		setAutoplay() {
			if( this.intervalId === undefined ) {
				this.intervalId = setInterval(this.nextSlide, 3000);
			}
		},
		stopAutoplay() {
			if( this.intervalId !== undefined ) {
				clearInterval(this.intervalId);
				this.intervalId = undefined;
			}
		},
		thumbClick(index) {
			this.idSlideActive = index;
			this.stopAutoplay();
			this.setAutoplay();
		},
	},
	mounted() {
		this.setAutoplay();
	},
});