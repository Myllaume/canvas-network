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
            vis.contener.arc(this.xPos, this.yPos, this.width, 0, radius, false);
            vis.contener.fill();
            break;
        case 'line':
            vis.contener.moveTo(this.xOriginPos, this.yOriginPos);
            vis.contener.lineTo(this.xPos, this.yPos);
            vis.contener.stroke();
            break;
    }
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
    contener: canvas.getContext('2d')
}

var node1 = new Node;
node1.position(50, 30);
node1.model('box');
node1.draw();

var node2 = new Node;
node2.position(60, 90);
node2.draw();

var node3 = new Node;
node3.position(120, 30);
node3.draw();

var node4 = new Node;
node4.position(80, 300);
node4.draw();

linkNodes(node1, node2);
linkNodes(node1, node3);
linkNodes(node3, node4);