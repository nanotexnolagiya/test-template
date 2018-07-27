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