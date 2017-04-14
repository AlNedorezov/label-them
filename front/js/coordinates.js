var svgImg;

function initCoordinates(svg) {
    svgImg = svg;
}

function getX(event) {
    event = event || window.event;
    return event.pageX - svgImg.node.getBoundingClientRect().left;
}

function getY(event) {
    event = event || window.event;
    return event.pageY - svgImg.node.getBoundingClientRect().top;
}

function getPoint(event) {
    var point = {
        x: getX(event),
        y: getY(event),
        isFirst: false
    };
    return point;
}