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