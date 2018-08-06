import vars from './variables';

vars.$filialsTab.on('click', '.filials-tabItem', (e) => {
	let $this = $(e.currentTarget);
	let index = $this.index();

	if(!$this.hasClass('active')){
		vars.$filialTab.removeClass('active');
		$this.addClass('active');
		const id = $this.attr('data-id');
		const temp = vars.$filialsTab.children().eq(index);

		vars.$filialContent.removeClass('active');
		vars.$filialsContent.children(id).addClass('active');

		vars.$filialsTab.children().eq(index).remove();
		vars.$filialsTab.children().eq(1).after(temp);
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
		items: 1,
		nav: true,
		navText: [
			'<span class="fa fa-arrow-left"></span>',
			'<span class="fa fa-arrow-right"></span>'
		],
		dots: false,
	});
	
	vars.$testimonialsSlider.owlCarousel({
		items: 1,
		nav: true,
		navText: [
			'<span class="fa fa-arrow-left"></span>',
			'<span class="fa fa-arrow-right"></span>'
		],
		dots: false,
	});

	vars.$roomGallery.owlCarousel({
		nav : true,
		navText: ['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
		items: 1,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			980:{
				items:1
			}
		}
	});

	vars.$threeGallery.owlCarousel({
		nav : true,
		navText: ['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
		items: 3,
		margin: 10,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			1024:{
				items:3
			}
		}
	});

	vars.$hotels.addClass('owl-carousel');

	vars.$hotels.owlCarousel({
		nav : true,
		navText: ['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
		items: 3,
		margin: 10,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			1024:{
				items:3
			}
		}
	});

	vars.$fourGallery.owlCarousel({
		nav : true,
		navText: ['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
		items: 4,
		margin: 10
	});

	vars.$tours.owlCarousel({
		nav : true,
		navText: ['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
		items: 5,
		margin: 20,
		responsive:{
			0: {
				items:1,
				margin: 30
			},
			1024: {
				items:3,
				margin: 20
			},
			1200: {
				items:3,
				margin: 20
			}
		}
	});

	if(vars.$window.innerWidth() < 768) {
		vars.$otherPost.addClass('owl-carousel');
		vars.$otherPost.owlCarousel({
			nav : true,
			navText: ['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
			items: 1,
			margin: 0
		});
	}
})
