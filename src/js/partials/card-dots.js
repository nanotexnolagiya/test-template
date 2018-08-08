import vars from '../variables';

const cardsDots = () => {
    if(vars.$cardsDots.length > 0) {
        console.log(vars.$cardsDots.innerWidth());
        vars.$cardsDots.css({
            width: (vars.$window.innerWidth() - (199 + 170 + 233 + 80))
        });
    }

    $('.room-dots').css({
        width: (vars.$window.innerWidth() - (199 + 170 + 233 + 97))
    });

    $('.gallery-dots').css({
        width: (vars.$window.innerWidth() - (199 + 170 + 233 + 97))
    });
}

module.exports = cardsDots;