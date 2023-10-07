"use strict";
function distance1(first, second) {
    return Math.sqrt(Math.pow(first.x - second.x, 2) + Math.pow(first.y - second.y, 2));
}
// distance1({ x: 1, y: 2 }, { x: 3, y: 4 });
