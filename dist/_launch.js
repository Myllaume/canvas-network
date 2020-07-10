const canvas = document.querySelector('#canvas');

var vis = {
    contener: canvas.getContext('2d'),
    width: 400,
    height: 400
}

var node1 = new Node;
node1.inscribe();

var node2 = new Node;
node2.inscribe();

var node3 = new Node;
node3.inscribe();

var node4 = new Node;
node4.model('box');
node4.inscribe();

linkNodes(node1, node2);
linkNodes(node1, node3);
linkNodes(node3, node4);