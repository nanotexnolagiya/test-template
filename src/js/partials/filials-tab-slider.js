import vars from "../variables";

const filialsTabSlider = () => {
    vars.$filialTab.eq(2).after(vars.$filialTab.first());
}

module.exports = filialsTabSlider;