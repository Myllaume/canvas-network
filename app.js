function Draw() {
    this.xPos = 0;
    this.yPos = 0;
    this.width = 10;
    this.height = 10;
    this.shape = 'box';
    this.backgroundColor = 'red'
}

Draw.prototype.measure = function(width, height = width) {
    this.width = width;
    this.height = height;
}

Draw.prototype.position = function(x, y) {
    this.xPos = x;
    this.yPos = y;
}

Draw.prototype.model = function(shape) {
    const validShapes = ['box', 'circle', 'line'];

    if (validShapes.includes(shape)) {
        this.shape = shape
    } else {
        console.error('unknown draw shape')
    }
}

Draw.prototype.inscribe = function() {
    vis.contener.fillStyle = this.backgroundColor;
    vis.contener.beginPath();

    switch (this.shape) {
        case 'box':
            vis.contener.fillRect(this.xPos, this.yPos, this.width, this.height);
            break;
        case 'circle':
            const radius = Math.PI * 2;
            vis.contener.arc(this.xPos, this.yPos, this.width, 0, radius, false);
            break;
    }

    vis.contener.fill();
}
function Node() {
    this.xPos = 0;
    this.yPos = 0;
    this.scale = 1;
    this.shape = 'circle';
}

Node.prototype.position = function(x, y) {
    this.xPos = x;
    this.yPos = y;
}

Node.prototype.weigh = function(number) {
    this.scale = number;
}

Node.prototype.model = function(shape) {
    const validShapes = ['box', 'circle'];

    if (validShapes.includes(shape)) {
        this.shape = shape
    } else {
        console.error('unknown node shape')
    }
}

Node.prototype.draw = function() {
    var draw = new Draw();
    draw.measure(20 * this.scale);
    draw.position(this.xPos, this.yPos);
    draw.model(this.shape);
    draw.inscribe();
}
const canvas = document.querySelector('#canvas');

var vis = {
    contener: canvas.getContext('2d')
}

var node1 = new Node;
node1.position(50, 30);
node1.draw();

var node2 = new Node;
node2.position(60, 90);
node2.draw();

var node3 = new Node;
node3.position(120, 30);
node3.draw();