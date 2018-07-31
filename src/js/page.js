import vars from "./variables";

const sidebarText = () => {
    var text = vars.$sideText;
    var width = text.innerWidth(),
        height = text.innerHeight();
    var newWidth = (width * 145) / 100,
        newHeight = height / 2;
    text.css({
        width: newWidth,
        height: newHeight
    });
}

const iContainer = () => {
    vars.$iContainer.css({
        width: (vars.$window.innerWidth() - (199 + 170))
    });

    vars.$pageMask.css({
        width: (vars.$window.innerWidth() - (199 + 170))
    });

    vars.$maskBottom.css({
        height: vars.$pageTitleWrap.innerHeight() + 30
    });

    vars.$pageTitleWrap.css({
        width: (vars.$window.innerWidth() - (199 + 200))
    });

    let pageHeight = vars.$pageTitle.innerHeight();

    vars.$content.css({
        marginTop: 73 + pageHeight
    });

    vars.$sidebarFixed.css({
        top: 173 + pageHeight
    });
}

const otherContentFix = () => {
    let size = 0;
    vars.$otherPostContent.each((index, element) => {
        let $this = $(element); 
        if($this.innerHeight() > size) {
            size = $this.innerHeight();
        }
    });

    vars.$otherPostContent.css({
        height: size
    });
    
}

// const pageTitleWrap = () => {

// }

// const pageSidebarPosition = () => {

// }

vars.$window.on('load', () => {
    sidebarText();
    iContainer();
    otherContentFix();
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
    const langRu = {
        "format": "MM/DD/YYYY",
        "separator": " - ",
        "applyLabel": "Готово",
        "cancelLabel": "Отмена",
        "fromLabel": "От",
        "toLabel": "До",
        "customRangeLabel": "Custom",
        "weekLabel": "W",
        "daysOfWeek": [
            "Вс",
            "Пн",
            "Вт",
            "Ср",
            "Чт",
            "Пт",
            "Сб"
        ],
        "monthNames": [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
        ],
        "firstDay": 1
    };

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
    var wmm = week.getMonth()+1; //January is 0!
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
        locale: langRu,
        singleDatePicker: true,
        autoUpdateInput: false,
        autoApply: false,
        opens: "right",
        drops: "down"
    }, function(start) {

    });

    vars.$datepicker.on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('DD-MM-YYYY'));
        $(this).css('padding', '22px 3px 3px 8px');
        $(this).siblings('label').addClass('form-group__label--active');
    });

    vars.$datepicker.on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });

    vars.$datepicker.val('');
}

vars.$window.scroll(() => {
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

});