function izquierda(order, cantDiapositivas) {
    order = order + 1;
    if (order > cantDiapositivas) { order = 1; }
    return order
}

function derecha(order, cantDiapositivas) {
    order = order - 1;
    if (order == 0) { order = cantDiapositivas; }
    return order
}

function mueveCarrousel(direccion) {
    const diapositivas = document.getElementsByClassName('diapositiva');
    let cantDiapositivas = diapositivas.length;
    for (diapositiva of diapositivas) {
        let elementStyle = window.getComputedStyle(diapositiva);
        let order = elementStyle.getPropertyValue('order')
        order = parseInt(order, 10);
        order = eval(direccion + '(' + order + ',' + cantDiapositivas + ')');
        diapositiva.style.setProperty('order', order);
    };
}