const canvas = document.querySelector('#canvas');

var vis = {
    contener: canvas.getContext('2d'),
    width: 400,
    height: 400
}

var graph = new Graph();

for (let i = 0; i < 10; i++) {
    node = new Node;
    node.id = i;
    node.inscribe();
    graph.nodeBase.push(node);
}

linkNodes(graph.nodeBase[0],graph.nodeBase[3])
linkNodes(graph.nodeBase[7],graph.nodeBase[2])
linkNodes(graph.nodeBase[9],graph.nodeBase[3])