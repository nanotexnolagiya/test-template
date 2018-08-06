import vars from "../variables";

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

module.exports = sidebarText;