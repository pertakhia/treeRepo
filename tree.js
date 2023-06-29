"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function renderTree(node, container) {
    var ul = document.createElement('ul');
    container.appendChild(ul);
    node.children.forEach(function (child) {
        var li = document.createElement('li');
        ul.appendChild(li);
        var label = document.createElement('span');
        label.textContent = child.label;
        li.appendChild(label);
        if (child.children.length > 0) {
            var toggleButton_1 = document.createElement('button');
            toggleButton_1.textContent = child.expanded ? '-' : '+';
            li.appendChild(toggleButton_1);
            var nestedContainer_1 = document.createElement('div');
            li.appendChild(nestedContainer_1);
            toggleButton_1.addEventListener('click', function () {
                child.expanded = !child.expanded;
                toggleButton_1.textContent = child.expanded ? '-' : '+';
                nestedContainer_1.style.display = child.expanded ? 'block' : 'none';
            });
            renderTree(child, nestedContainer_1);
            nestedContainer_1.style.display = child.expanded ? 'block' : 'none';
        }
    });
}
var container = document.getElementById('tree-container');
renderTree(rootNode, container);
