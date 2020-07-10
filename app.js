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

Node.prototype.draw = function() {
    vis.contener.fillStyle = this.backgroundColor;

    switch (this.shape) {
        case 'box':
            vis.contener.fillRect(this.xPos, this.yPos, this.width, this.height);
            break;
    }
}

var node1 = new Node;
node1.draw();