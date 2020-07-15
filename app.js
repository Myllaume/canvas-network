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

Draw.prototype.positionOrigin = function(x, y) {
    this.xOriginPos = x;
    this.yOriginPos = y;
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
            // x, y are middle of the box
            this.xPos -= this.width / 2;
            this.yPos -= this.height / 2;
            vis.contener.fillRect(this.xPos, this.yPos, this.width, this.height);
            break;
        case 'circle':
            const radius = Math.PI * 2;
            const size = this.width / 2;
            vis.contener.arc(this.xPos, this.yPos, size, 0, radius, false);
            vis.contener.fill();
            break;
        case 'line':
            vis.contener.moveTo(this.xOriginPos, this.yOriginPos);
            vis.contener.lineTo(this.xPos, this.yPos);
            vis.contener.stroke();
            break;
    }
}
function Graph() {
    this.nodeBase = [];
}
function Node() {
    this.id = null;
    this.scale = 1;
    this.shape = 'circle';
    this.draw = new Draw();
    this.xPos = Math.floor(Math.random() * Math.floor(vis.width));
    this.yPos = Math.floor(Math.random() * Math.floor(vis.height));
    this.draw.position(this.xPos, this.yPos);
}

Node.prototype.position = function(x, y) {
    this.xPos = x;
    this.yPos = y;
    this.draw.position(this.x, this.y);
}

Node.prototype.weigh = function(number) {
    this.scale = number;
}

Node.prototype.model = function(shape) {
    const validShapes = ['box', 'circle'];

    if (validShapes.includes(shape)) {
        this.shape = shape;
    } else {
        console.error('unknown node shape')
    }
}

Node.prototype.inscribe = function() {
    this.draw.model(this.shape);
    this.draw.measure(30 * this.scale);
    this.draw.inscribe();
}

function linkNodes(nodeOrigin, nodeTarget) {
    var origin = {
        x: nodeOrigin.xPos,
        y: nodeOrigin.yPos
    };
    var target = {
        x: nodeTarget.xPos,
        y: nodeTarget.yPos
    };

    var line = new Draw();
    line.positionOrigin(origin.x, origin.y);
    line.position(target.x, target.y);
    line.model('line');
    line.inscribe();
}
const canvas = document.querySelector('#canvas');

var vis = {
    contener: canvas.getContext('2d'),
    width: 400,
    height: 400
}

var graph = new Graph();

for (let i = 0; i < 10; i++) {
    node = new Node;
    node.id = i;
    node.inscribe();
    graph.nodeBase.push(node);
}

linkNodes(graph.nodeBase[0],graph.nodeBase[3])
linkNodes(graph.nodeBase[7],graph.nodeBase[2])
linkNodes(graph.nodeBase[9],graph.nodeBase[3])