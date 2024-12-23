import { isaacCSPRNG } from './isaacCSPRNG-1.1/isaacCSPRNG-1.1.js';

// For demo purposes. Draws a splat on the canvas with id 'canvas'
function drawSplat(canvasId, seed) {
    const canvas = document.getElementById(canvasId);
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        generateSplat(ctx, seed)
    }
}

// Configuration constants

const sqrt2 = 1.9;
const sigmoidOffset = 0.66;
const sigmoidSlope = 12;
const jitter = 0.1;
const jitterRadius = 14;
const pixelDelay = 8;
const zeroThreshhold = 0.01;

const rgbMin = 30;
const rgbMax = 220;

// Colors the pixel given coordinates
function drawPixel(ctx, x, y, r, g, b) {
    ctx.fillStyle = `rgb(${r} ${g} ${b})`;
    ctx.fillRect(x, y, 1, 1);
}

// Paramaterized sigmoid function
function sigmoid(x, offset, k) {
    return 1 / (1 + Math.exp(-k * (x - offset)))
}

// Function to return scaling factor based on the radius, the previous value, and the random seed
function nextColor(radius, previous, prng) {
    let range = jitter * radius;
    if (range < 0) range = -range;
    const randomJitter = 1 + (prng.random() * range - range / 2);
    const taperFactor = (radius <= jitterRadius) ? 1 : 0.5;
    const value = sigmoid(randomJitter * previous * taperFactor, sigmoidOffset, sigmoidSlope);
    return (value < zeroThreshhold) ? 0 : value; 
}

// Finds the pythagorean distance of a pixel from the center
function getRadius(x, y) {
    return Math.sqrt((x - 15.5)**2 + (y - 15.5)**2)
}

// Returns a 32x32 matrix of weights for the color
function generateShape(prng) {
    const weights = Array.from({ length: 32 }, () => Array(32).fill(0));

    weights[15][15] = 1;
    weights[16][15] = 1;
    weights[15][16] = 1;
    weights[16][16] = 1;

    const bands = [
        {startX: 14, startY: 15, iterX: -1, iterY: 0},
        {startX: 14, startY: 16, iterX: -1, iterY: 0},
        {startX: 15, startY: 14, iterX: 0, iterY: -1},
        {startX: 16, startY: 14, iterX: 0, iterY: -1},
        {startX: 17, startY: 15, iterX: 1, iterY: 0},
        {startX: 17, startY: 16, iterX: 1, iterY: 0},
        {startX: 15, startY: 17, iterX: 0, iterY: 1},
        {startX: 16, startY: 17, iterX: 0, iterY: 1},
    ]

    for (let i = 0; i < bands.length; i++) {
        const band = bands[i];
        let x = band.startX;
        let y = band.startY;

        for (let j = 0; j < 15; j++) {
            weights[x][y] = nextColor(getRadius(x, y), weights[x - band.iterX][y - band.iterY], prng)
            x += band.iterX;
            y += band.iterY;
        }
    }

    const blocks = [
        {startX: 14, startY: 14, iterX: -1, iterY: -1},
        {startX: 17, startY: 14, iterX: 1, iterY: -1},
        {startX: 14, startY: 17, iterX: -1, iterY: 1},
        {startX: 17, startY: 17, iterX: 1, iterY: 1},
    ]

    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        let x = block.startX;

        for (let j = 0; j < 15; j++) {
            let y = block.startY;
            for (let k = 0; k < 15; k++) {
                let weight = nextColor(getRadius(x, y), weights[x - block.iterX][y], prng) / sqrt2;
                weight += nextColor(getRadius(x, y), weights[x][y - block.iterY], prng) / sqrt2;
                weights[x][y] = weight;
                y += block.iterY;
            }
            x += block.iterX;
        }

    }

    return weights;
}

// Generates a random color
function generateColor(prng) {
    let rgb = [];
    let min = 255;
    let max = 0;
    for (let i = 0; i < 3; i++) {
        const next = prng.random() * 255;
        min = (next < min) ? next : min;
        max = (next > max) ? next : max;
        rgb.push(next);
    }

    const normalize = (a) => (a - min) * ((rgbMax - rgbMin) / (max - min)) + rgbMin;
    return rgb.map(a => normalize(a));
}

// Draws a 32x32 splat
async function generateSplat(ctx, seed) {
    ctx.fillStyle = `rgb(0 0 0)`;
    ctx.fillRect(0, 0, 32, 32);

    const prng = isaacCSPRNG(seed)

    const rgb = generateColor(prng);
    const weights = generateShape(prng);

    depthMapDraw(ctx, weights, rgb);
}

// Draws the weight matrix spirally from the center
async function radialDraw(ctx, weights, rgb) {
    const size = 32;
    const center = Math.floor(size / 2);
    let count = 0;

    // Directions: right, down, left, up
    const directions = [
        [0, 1],  // Right
        [1, 0],  // Down
        [0, -1], // Left
        [-1, 0], // Up
    ];

    let x = center, y = center;
    let steps = 1;

    while (count < size * size) {
        for (let d = 0; d < 4; d++) { // Four directions in the spiral
            const [dx, dy] = directions[d];
            
            for (let i = 0; i < steps; i++) {
                if (x >= 0 && x < size && y >= 0 && y < size) {
                    drawPixel(ctx, x, y, ...rgb.map(a => a * weights[x][y]))
                    count++;
                    await new Promise(resolve => setTimeout(resolve, pixelDelay));
                }
                x += dx;
                y += dy;
            }
            
            // Increase steps every two directions (after right and left)
            if (d % 2 === 1) steps++;
        }
    }

}

// Draws the weights matrix from brightest points first
async function depthMapDraw(ctx, weights, rgb) {
    let ordering = Array.from({ length: 32 ** 2 }, (_, i) => i);
    ordering = ordering.sort((a, b) => {
        return (weights[Math.trunc(b / 32)][b % 32] - weights[Math.trunc(a / 32)][a % 32])
    })
    for (let i = 0; i < ordering.length; i++) {
        const x = Math.trunc(ordering[i] / 32)
        const y = ordering[i] % 32
        drawPixel(ctx, x, y, ...rgb.map(a => a * weights[x][y]));
        await new Promise(resolve => setTimeout(resolve, weights[x][y] * pixelDelay));
    }
}

async function normalDraw(ctx, weights, rgb) {
    for (let x = 0; x < 32; x++) {
        for (let y = 0; y < 32; y++) {
            drawPixel(ctx, x, y, ...rgb.map(a => a * weights[x][y]))
        }
    }
}

export default drawSplat;
