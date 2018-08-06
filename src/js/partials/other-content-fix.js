import vars from "../variables";

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

module.exports = otherContentFix;