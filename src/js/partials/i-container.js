import vars from "../variables";

const iContainer = () => {
    vars.$iContainer.css({
        width: (vars.$window.innerWidth() - (199 + 170))
    });

    vars.$pageMask.css({
        width: (vars.$window.innerWidth() - (199 + 150))
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

module.exports = iContainer;