import { Node } from './tree.interface';

function renderTree(node: Node, container: HTMLElement): void {
    const ul = document.createElement('ul');
    container.appendChild(ul);
  
    node.children.forEach((child) => {
      const li = document.createElement('li');
      ul.appendChild(li);
  
      const label = document.createElement('span');
      label.textContent = child.label;
      li.appendChild(label);
  
      if (child.children.length > 0) {
        const toggleButton = document.createElement('button');
        toggleButton.textContent = child.expanded ? '-' : '+';
        li.appendChild(toggleButton);
  
        const nestedContainer = document.createElement('div');
        li.appendChild(nestedContainer);
  
        toggleButton.addEventListener('click', () => {
          child.expanded = !child.expanded;
          toggleButton.textContent = child.expanded ? '-' : '+';
          nestedContainer.style.display = child.expanded ? 'block' : 'none';
        });
  
        renderTree(child, nestedContainer);
        nestedContainer.style.display = child.expanded ? 'block' : 'none';
      }
    });
  }
  
  const container = document.getElementById('tree-container');
  renderTree(rootNode, container);
  