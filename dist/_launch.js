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