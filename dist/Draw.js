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