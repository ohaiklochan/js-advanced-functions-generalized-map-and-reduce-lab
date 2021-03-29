// Add your functions here

function map(array, fn) {
    return array.map(fn)
};

function reduce(array, fn, startingPoint) {
    if(!!startingPoint == false) {
        startingPoint = array.shift();
    }
    return array.reduce(fn, startingPoint);
};
