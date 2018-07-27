import vars from './variables';

var length = $('#cube-slider>.cube-slider__item').length,
    current = 1,
    next = 1,
    outClass, inClass, onGoing = false;
    $('#cube-slider>.cube-slider__item:eq(0)').addClass('cube-slider__item_active');


function openIndex(i) {
    if (!onGoing && next != i) {
        onGoing = true;
        next = i
        outClass = current > i ? 'rotateCubeBottomOut' : 'rotateCubeTopOut'
        inClass = current > i ? 'rotateCubeBottomIn' : 'rotateCubeTopIn';
        show()
    }
}

function trans(direction) {
    if (!onGoing) {
        onGoing = true;
        if (direction == 'up') {
            next = current > 1 ? current - 1 : length;
            outClass = 'rotateCubeBottomOut';
            inClass = 'rotateCubeBottomIn';
        } else {
            next = current < length ? current + 1 : 1;
            outClass = 'rotateCubeTopOut';
            inClass = 'rotateCubeTopIn';
        }
        show();
    }
}

function show() {
    $('#cube-slider>.cube-slider__item:eq(' + (next - 1) + ')').addClass('cube-slider__item_active');
    $('#cube-slider>.cube-slider__item:eq(' + (current - 1) + ')').addClass(outClass);
    $('#cube-slider>.cube-slider__item:eq(' + (next - 1) + ')').addClass(inClass);	
    $('.bullets>.bullets__item:eq(' + (current - 1) + ')').removeClass('bullets__item_active');
    $('.bullets>.bullets__item:eq(' + (next - 1) + ')').addClass('bullets__item_active');


    //animationOut(current - 1);

    setTimeout(function() {
        //animationIn(next - 1);
        $('#cube-slider>.cube-slider__item:eq(' + (current - 1) + ')').removeClass('cube-slider__item_active');
    }, 500);

    setTimeout(function() {

        $('#cube-slider>.cube-slider__item:eq(' + (current - 1) + ')').removeClass(outClass);
        $('#cube-slider>.cube-slider__item:eq(' + (next - 1) + ')').removeClass(inClass);

        current = next;
        onGoing = false;
    }, 600);

}

if(vars.$cubeItem.length != 0) {
    //for scroll by mouse or MAC track pad
    var indicator = new WheelIndicator({
        callback: function(e){   
            if (e.direction == 'down') {
                trans('down')
            } else {
                trans('up')
            }
        }
    });
    indicator.getOption('preventMouse'); // true
    //update this instead of mousewheel.js
    //in issuses#2 a friend want to use this plugin on MAC track pad

    $(document).keydown(function(e) {
        if (e.keyCode == 38 || e && e.keyCode == 37) {
            trans('up')
        }
        if (e.keyCode == 39 || e && e.keyCode == 40) {
            trans('down')
        }

    });

    function isMobile() {
        try{ document.createEvent("TouchEvent"); return true; }
        catch(e){ return false; }
    }

    if(isMobile() === true) {
        $(document).swipe({
            swipe: function(event, direction, distance, duration, fingerCount) {
                if (direction == "up") {
                    trans('down')
                } else if (direction == "down") {
                    trans('up')
                }
            }
        });
    }

    // Alernative
    // $(document).on("touchstart", function(event) {
    //     $(document).swipe({
    //         swipe: function(event, direction, distance, duration, fingerCount) {
    //             if (direction == "up") {
    //                 trans('down')
    //             } else if (direction == "down") {
    //                 trans('up')
    //             }
    //         }
    //     });
    // });


    $('.bullets>li').on('click', function() {
        openIndex($(this).index() + 1);
    });
}

vars.$burgerBtn.on('click', (e) => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const $child = $this.find('span');
    const currentText = $child.text();
    const newText = $child.attr('data-text');
    const dataSelect = $this.attr('href');

    $child.text(newText);
    $child.attr('data-text', currentText);
    if(vars.$body.hasClass('inner-page')) {
        let headerHeight = vars.$header.find('.header-main').innerWidth();
        vars.$pageModalMenu.css({
            width: headerHeight
        });

        if(vars.$window.scrollTop() > 0) {
            vars.$pageModalMenu.addClass('scroll');
        }else{
            vars.$pageModalMenu.removeClass('scroll');
        }

        
        if($this.hasClass('open')) {
            $this.removeClass('open');
            //vars.$header.removeClass('pop-up');
            //vars.$popUpBg.fadeOut();
            $(dataSelect).css('display', 'none');
            vars.$burgerBtn.parent().removeClass('fixed');
        }else{
            $this.addClass('open');
            //vars.$header.addClass('pop-up');
            //vars.$popUpBg.fadeIn();
            $(dataSelect).css('display', 'block');
            vars.$burgerBtn.parent().addClass('fixed');
        }
    }else{
        console.log('home');
        if($this.hasClass('open')) {
            $this.removeClass('open');
            vars.$header.removeClass('pop-up');
            $(dataSelect).slideUp();
            vars.$popUpBg.fadeOut();
        }else{
            $this.addClass('open');
            vars.$header.addClass('pop-up');
            vars.$popUpBg.fadeIn();
            $(dataSelect).slideDown();
        }
    }
});