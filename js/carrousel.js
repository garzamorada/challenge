function derecha() {
    const diapositivas = document.getElementsByClassName('diapositiva');
    let cantDiapisitivas = diapositivas.length;
    for (let i = 0; i < diapositivas.length; i++) {
        diapositiva = diapositivas[i];
        let elementStyle = window.getComputedStyle(diapositiva);
        let order = elementStyle.getPropertyValue('order')
        order = parseInt(order, 10);
        order = order - 1
        if (order == 0) { order = cantDiapisitivas; }
        diapositiva.style.setProperty('order', order);
    }
}

function izquierda() {
    const diapositivas = document.getElementsByClassName('diapositiva');
    console.log(diapositivas);
    let cantDiapisitivas = diapositivas.length;
    for (let i = 0; i < diapositivas.length; i++) {
        diapositiva = diapositivas[i];
        let elementStyle = window.getComputedStyle(diapositiva);
        let order = elementStyle.getPropertyValue('order')
        order = parseInt(order, 10);
        order = order + 1
        if (order > cantDiapisitivas) { order = 1; }
        diapositiva.style.setProperty('order', order);
    }
}