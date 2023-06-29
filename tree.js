"use strict"
function renderTree(node, container) {
  var ul = document.createElement("ul")
  container.appendChild(ul)
  node.children.forEach(function (child) {
    var li = document.createElement("li")
    ul.appendChild(li)
    var label = document.createElement("span")
    label.textContent = child.label
    li.appendChild(label)
    if (child.children.length > 0) {
      var toggleButton_1 = document.createElement("button")
      toggleButton_1.textContent = child.expanded ? "-" : "+"
      li.appendChild(toggleButton_1)
      var nestedContainer_1 = document.createElement("div")
      li.appendChild(nestedContainer_1)
      toggleButton_1.addEventListener("click", function () {
        child.expanded = !child.expanded
        toggleButton_1.textContent = child.expanded ? "-" : "+"
        nestedContainer_1.style.display = child.expanded ? "block" : "none"
      })
      renderTree(child, nestedContainer_1)
      nestedContainer_1.style.display = child.expanded ? "block" : "none"
    }
  })
}
var container = document.getElementById("tree-container")
var tree = {
  id: 1,
  label: "root",
  expanded: true,
  children: [
    {
      id: 2,
      label: "child 1",
      expanded: true,
      children: [
        {
          id: 3,
          label: "grandchild 1",
          expanded: true,
          children: [],
        },
        {
          id: 4,
          label: "grandchild 2",
          expanded: true,
          children: [],
        },
      ],
    },
    {
      id: 5,
      label: "child 2",
      expanded: true,
      children: [
        {
          id: 6,
          label: "grandchild 2",
          expanded: true,
          children: [
            {
              id: 8,
              label: "great grandchild 1",
              expanded: true,
              children: [],
            },
          ],
        },
        {
          id: 7,
          label: "grandchild 2",
          expanded: true,
          children: [],
        },
      ],
    },
  ],
}
renderTree(tree, container)
