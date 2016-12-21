window.onload = function () {
    let inputs = document.querySelectorAll(".controls input");
    console.log(inputs);
    /*
     * the foreach for this nodelist was just recently added, so
     * if it's not working (in chrome for ex) the browser is too old
     * */
    inputs.forEach(inp => inp.addEventListener("change", handleUpdate));
    inputs.forEach(inp => inp.addEventListener("mousemove", handleUpdate));
}

function handleUpdate() {
    console.log(this.value);
    // need to know the suffix for ex px [or nothing if it has none)]
    let suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    //variables do overwrite themselves, so the variable closest to the element applies
}