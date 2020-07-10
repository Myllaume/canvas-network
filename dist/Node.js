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