import vars from './variables';

vars.$filialTab.on('click', (e) => {
	console.log();
	let $this = $(e.currentTarget);
	let index = $this.index();

	if(!$this.hasClass('active')){
		vars.$filialTab.removeClass('active');
		$this.addClass('active');

		vars.$filialContent.removeClass('active');
		vars.$filialContent.eq(index).addClass('active');
	}
});

vars.$contactTab.on('click', (e) => {
	let $this = $(e.currentTarget);
	let index = $this.index();

	if(!$this.hasClass('active')){
		vars.$contactTab.removeClass('active');
		$this.addClass('active');

		vars.$contactContent.removeClass('active');
		vars.$contactContent.eq(index).addClass('active');
	}
});

vars.$document.ready(() => {
	vars.$sliderWidget.owlCarousel({
		item: 1,
		nav: true,
		navText: [
			'<span class="fa fa-arrow-left"></span>',
			'<span class="fa fa-arrow-right"></span>'
		],
		dots: false,
	});
	
	vars.$testimonialsSlider.owlCarousel({
		item: 1,
		nav: true,
		navText: [
			'<span class="fa fa-arrow-left"></span>',
			'<span class="fa fa-arrow-right"></span>'
		],
		dots: false,
	});
})