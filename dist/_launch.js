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