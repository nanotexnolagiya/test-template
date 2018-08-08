import vars from "./variables";
import dateLangRu from './partials/date-lang-ru';
import otherContentFix from './partials/other-content-fix';
import iContainer from './partials/i-container';
import filialsTabSlider from './partials/filials-tab-slider';
import sidebarText from './partials/sidebar-text';
import cardsDots from './partials/card-dots';

vars.$window.on('load', () => {
    if(vars.$window.innerWidth() > 1024){
		sidebarText();
		iContainer();
		otherContentFix();
	}
});

vars.$headerContacts.on('click', (e) => {
    let $this = $(e.currentTarget);
    $this.siblings().slideToggle(300);
    vars.$header.find('.header-main').toggleClass('open');

});

vars.$fancybox.fancybox({
	arrows: true,
	buttons: ['close'],
	transitionEffect: 'slide',
});

vars.$roomsFilterLink.on('click', (e) => {
    e.preventDefault();
    let $this = $(e.currentTarget);
    let parent = $this.parent();
    if(!parent.hasClass('active')){
        let data = $this.attr('data-filter');
        vars.$roomsFilterItem.removeClass('active');
        parent.addClass('active');

        if(data != 'all'){
            vars.$cardsItem.hide('slow');
            $('.cards .cardsItem' + data).show('slow');
        }else{
            vars.$cardsItem.show('slow');
        }
    }

});

vars.$moreSwitch.on('change', (e) => {
    let $this = $(e.currentTarget);
    if($this.is(':checked')){
        vars.$moreWrap.slideToggle('slow');
    }else{
        vars.$moreWrap.slideToggle('slow');
    }
});

$('.click-switch').on('click', function (e) {
    e.preventDefault();
    vars.$moreSwitch.trigger('click');
});

if(vars.$datepicker.length !== 0){

    var today = new Date();
    var tdd = today.getDate();
    var tmm = today.getMonth()+1; //January is 0!
    var tyyyy = today.getFullYear();

    if(tdd < 10) {
        tdd = '0'+tdd
    }

    if(tmm < 10) {
        tmm = '0'+tmm
    }

    Date.prototype.addDays = function(days) {
        var dat = new Date(this.valueOf());
        dat.setDate(dat.getDate() + days);
        return dat;
    };
    var week = today.addDays(7);

    var wdd = week.getDate();
    var wmm = week.getMonth() + 1; //January is 0!
    var wyyyy = week.getFullYear();

    if(wdd < 10) {
        wdd = '0'+wdd
    }

    if(wmm < 10) {
        wmm = '0'+wmm
    }

    week = wmm + '/' + wdd + '/' + wyyyy;

    today = tmm + '/' + tdd + '/' + tyyyy;

    vars.$datepicker.daterangepicker({
        locale: dateLangRu,
        singleDatePicker: true,
        autoUpdateInput: false,
        autoApply: false,
        opens: "right",
        drops: "down"
    }, function(start) {

    });

    vars.$datepicker.on('apply.daterangepicker', function(ev, picker) {
        let current = $(this);
        let label = current.siblings();
        let date = picker.startDate.format('DD-MM-YYYY');
        label.text(date);
        current.val(date);
    });

    vars.$datepicker.on('cancel.daterangepicker', function(ev, picker) {
        let current = $(this);
        current.val('');
    });

    vars.$datepicker.val('');
}

if(vars.$window.innerWidth() < 1024) {
    filialsTabSlider();

    vars.$mainMenu.on('click', (e) => {
        let $this = $(e.currentTarget);
        let parent = $this.parent();
        let siblings = parent.siblings();
        
        e.preventDefault();
        if(parent.hasClass('open')){
            parent.removeClass('open');
        }else{
            siblings.removeClass('open');
            parent.addClass('open');
        }
    });

    vars.$fixBurger.on('click', (e) => {
        e.preventDefault();
        let $this = $(e.currentTarget);

        if($this.hasClass('open')){
            $this.removeClass('open');
            vars.$mobileFixDropdown.slideUp();
        }else{
            $this.addClass('open');
            vars.$mobileFixDropdown.slideDown();
        }

    });

    vars.$contactsBtn.on('click', (e) => {
        let $this = $(e.currentTarget);
        let parentSiblings = $this.parent().siblings('.contactsItem__map');
        parentSiblings.slideToggle();
    });
}

vars.$document.ready(() => {
    cardsDots();
});

if(vars.$content.length > 0) {
    vars.$formInput.on('change', (e) => {
        let $this = $(e.currentTarget);
        let label = $this.siblings();
    
        if($this.val().trim().length > 0){
            label.text($this.val());
        }else{
            label.text(label.attr('data-default'));
        }
    });
    
    vars.$formInput.each((index, element) => {
        $(element).siblings().attr('data-default', $(element).siblings().text());
    });

    vars.$room.on('change', (e) => {
        let $this = $(e.currentTarget);
        let label = $this.siblings();
    
        if($this.val().trim().length > 0){
            label.text($this.val() + ' ' + label.attr('data-default'));
        }else{
            label.text(label.attr('data-default'));
        }
    });

    vars.$person.on('change', (e) => {
        let $this = $(e.currentTarget);
        let label = $this.siblings();
    
        if($this.val().trim().length > 0){
            label.text(label.attr('data-default') + $this.val());
        }else{
            label.text(label.attr('data-default'));
        }
    });

    vars.$children.on('change', (e) => {
        let $this = $(e.currentTarget);
        let label = $this.siblings();
    
        if($this.val().trim().length > 0){
            label.text(label.attr('data-default') + $this.val());
        }else{
            label.text(label.attr('data-default'));
        }
    });

    const onlyNumber = (e) => {
        var key = e.charCode || e.keyCode || 0;

        if (key === 8 || key === 9 || key === 13 || key === 46 || key === 110 || key === 190 || (key >= 35 && key <= 40)) {

        } else if ((key >= 48 && key <= 57) || (key >= 96 && key <= 105)) {

        } else {
            e.preventDefault();
        }

    };

    vars.$room.keydown(onlyNumber);
    vars.$person.keydown(onlyNumber);
    vars.$children.keydown(onlyNumber);
}

vars.$window.scroll(() => {
    if(vars.$window.innerWidth() > 1024) {
		let pageHeight = vars.$pageTitle.innerHeight();

		if(vars.$window.scrollTop() > 0) {
			if(!vars.$header.hasClass('scroll')) {
				vars.$header.addClass('scroll');
				vars.$pageTitleWrap.addClass('scroll');
				vars.$maskBottom.addClass('scroll');
				vars.$pageModalMenu.addClass('scroll');
				vars.$sidebarFixed.css({
					top: 138 + pageHeight
				});
			}
		}else {
			vars.$header.removeClass('scroll');
			vars.$pageTitleWrap.removeClass('scroll');
			vars.$maskBottom.removeClass('scroll');
			vars.$pageModalMenu.removeClass('scroll');
			vars.$sidebarFixed.css({
				top: 173 + pageHeight
			});
		}
	}

});