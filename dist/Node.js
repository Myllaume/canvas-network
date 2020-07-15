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