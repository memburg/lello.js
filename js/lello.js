let img; // image to be processed
let flag = 0; // algorithm flag (set to 0)
const WIDTH = 421; // image width
const HEIGHT = 316; // image height
const algtitle = document.getElementById('algtitle'); // algorithm title
const algdesc = document.getElementById('algdesc'); // algorithm description

function preload() {
    img = loadImage('../img/lello.jpg');
}

function setup() {
    createCanvas(WIDTH, HEIGHT);
    image(img, 0, 0);

    document.getElementById('original').addEventListener('click', () => {
        flag = 1;
        algtitle.textContent = 'Original';
        algdesc.textContent = 'This is the original image, a photo taken at Livraria Lello.';
    });

    document.getElementById('addition').addEventListener('click', () => {
        flag = 2;
        algtitle.textContent = 'Addition';
        algdesc.textContent = 'It consists of adding a scalar from the values of an image.';
    });

    document.getElementById('substraction').addEventListener('click', () => {
        flag = 3;
        algtitle.textContent = 'Substraction';
        algdesc.innerText = 'It consists of subtracting a scalar from the values of an image.';
    });

    document.getElementById('multiplication').addEventListener('click', () => {
        flag = 4;
        algtitle.textContent = 'Multiplication';
        algdesc.textContent = 'It consists of multiplying a scalar with the values of an image.';
    });

    document.getElementById('threshold').addEventListener('click', () => {
        flag = 5;
        algtitle.textContent = 'Threshold';
        algdesc.textContent = 'Thresholding is the simplest method of segmenting image.';
    });

    document.getElementById('invert').addEventListener('click', () => {
        flag = 6;
        algtitle.textContent = 'Invert';
        algdesc.textContent = 'This algorithm inverts each pixel value in the image.';
    });
}

function draw() {
    switch (flag) {
        case 1:
            image(img, 0, 0);
            break;

        case 2:
            image(img, 0, 0);
            addition(WIDTH, HEIGHT, 100);
            break;

        case 3:
            image(img, 0, 0);
            substraction(WIDTH, HEIGHT, 100);
            break;

        case 4:
            image(img, 0, 0);
            multiplication(WIDTH, HEIGHT, 2);
            break;

        case 5:
            image(img, 0, 0);
            threshold(WIDTH, HEIGHT, 115);
            break;

        case 6:
            image(img, 0, 0);
            invert(WIDTH, HEIGHT);
            break;
    }
}

/**
 * 
 * @param {number} width indicate the canvas width
 * @param {number} height indicates the canvas height
 * @param {number} maximum indicates the maximum value for thresholding
 */
function threshold(width, height, maximum) {
    loadPixels();

    const INDEX = width * height * 4;

    for (let i = 0; i < INDEX; i += 4) {
        let avg = Math.round((pixels[i + 0] + pixels[i + 1] + pixels[i + 2])) / 3;

        if (avg < maximum) {
            pixels[i + 0] = 0;
            pixels[i + 1] = 0;
            pixels[i + 2] = 0;
        } else {
            pixels[i + 0] = 255;
            pixels[i + 1] = 255;
            pixels[i + 2] = 255;
        }
    }

    updatePixels();
}

/**
 * 
 * @param {number} width indicate the canvas width
 * @param {number} height indicates the canvas height
 * @param {number} k the constant addition value
 */
function addition(width, height, k) {
    loadPixels();

    const INDEX = width * height * 4;

    for (let i = 0; i < INDEX; i += 4) {
        let r = pixels[i + 0] + Math.abs(k);
        let g = pixels[i + 1] + Math.abs(k);
        let b = pixels[i + 2] + Math.abs(k);

        if (r > 255) {
            pixels[i + 0] = 255;
        } else {
            pixels[i + 0] = r;
        }

        if (g > 255) {
            pixels[i + 1] = 255;
        } else {
            pixels[i + 1] = g;
        }

        if (b > 255) {
            pixels[i + 2] = 255;
        } else {
            pixels[i + 2] = b;
        }
    }

    updatePixels();
}

/**
 * 
 * @param {number} width indicate the canvas width
 * @param {number} height indicates the canvas height
 * @param {number} k the constant substraction value
 */
function substraction(width, height, k) {
    loadPixels();

    const INDEX = width * height * 4;

    for (let i = 0; i < INDEX; i += 4) {
        let r = pixels[i + 0] - Math.abs(k);
        let g = pixels[i + 1] - Math.abs(k);
        let b = pixels[i + 2] - Math.abs(k);

        if (r > 255) {
            pixels[i + 0] = 255;
        } else {
            pixels[i + 0] = r;
        }

        if (g > 255) {
            pixels[i + 1] = 255;
        } else {
            pixels[i + 1] = g;
        }

        if (b > 255) {
            pixels[i + 2] = 255;
        } else {
            pixels[i + 2] = b;
        }
    }

    updatePixels();
}

/**
 * 
 * @param {number} width indicate the canvas width
 * @param {number} height indicates the canvas height
 * @param {number} k the constant multiplication value
 */
function multiplication(width, height, k) {
    loadPixels();

    const INDEX = width * height * 4;

    for (let i = 0; i < INDEX; i += 4) {
        let r = pixels[i + 0] * Math.abs(k);
        let g = pixels[i + 1] * Math.abs(k);
        let b = pixels[i + 2] * Math.abs(k);

        if (r > 255) {
            pixels[i + 0] = 255;
        } else {
            pixels[i + 0] = r;
        }

        if (g > 255) {
            pixels[i + 1] = 255;
        } else {
            pixels[i + 1] = g;
        }

        if (b > 255) {
            pixels[i + 2] = 255;
        } else {
            pixels[i + 2] = b;
        }
    }

    updatePixels();
}

/**
 * 
 * @param {number} width indicate the canvas width
 * @param {number} height indicates the canvas height
 */
function invert(width, height) {
    loadPixels();

    const INDEX = width * height * 4;

    for (let i = 0; i < INDEX; i += 4) {
        pixels[i + 0] = 255 - pixels[i + 0];
        pixels[i + 1] = 255 - pixels[i + 1];
        pixels[i + 2] = 255 - pixels[i + 2];
    }

    updatePixels();
}