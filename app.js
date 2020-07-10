const canvas = document.querySelector('#canvas');

var vis = {
    contener: canvas.getContext('2d')
}

function Node() {
    this.xPos = 0;
    this.yPos = 0;
    this.width = 10;
    this.height = 10;
    this.shape = 'box';
    this.backgroundColor = 'red'
}

Node.prototype.measure = function(width, height = width) {
    this.width = width;
    this.height = height;
}

Node.prototype.position = function(x, y) {
    this.xPos = x;
    this.yPos = y;
}

Node.prototype.model = function(shape) {
    const validShapes = ['box', 'circle'];

    if (validShapes.includes(shape)) {
        this.shape = shape
    } else {
        console.error('unknown shape')
    }
}

Node.prototype.draw = function() {
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

var node1 = new Node;
node1.measure(10);
node1.position(50, 30);
node1.model('circle');
node1.draw();

var node2 = new Node;
node1.measure(100);
node1.position(150, 30);
node1.model('box');
node1.draw();