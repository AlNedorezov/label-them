function getPoint(event) {
    const x = event.pageX - svgImg.getBoundingClientRect().left;
    const y = event.pageY - svgImg.getBoundingClientRect().top;
    return {x, y};
}