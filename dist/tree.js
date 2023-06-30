"use strict"
function makeTreeView(tree, parent) {
  if (parent === void 0) {
    parent = null
  }
  var results = []
  if (Array.isArray(tree)) {
    for (var _i = 0, tree_1 = tree; _i < tree_1.length; _i++) {
      var node = tree_1[_i]
      results.push(makeTreeView(node, tree))
    }
  } else if (typeof tree === "object") {
    results.push(tree)
    if (tree.children) {
      for (var _a = 0, _b = tree.children; _a < _b.length; _a++) {
        var child = _b[_a]
        results.push(makeTreeView(child, tree))
      }
    }
  }
  return results
}
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
var tree = [
  {
    id: 1,
    label: "Root",
    expanded: true,
    children: [
      {
        id: 2,
        label: "Child 1",
        expanded: true,
        children: [
          {
            id: 3,
            label: "Grandchild 1",
            expanded: true,
            children: [],
          },
          {
            id: 4,
            label: "Grandchild 2",
            expanded: true,
            children: [],
          },
        ],
      },
      {
        id: 5,
        label: "Child 2",
        expanded: true,
        children: [
          {
            id: 6,
            label: "Grandchild 3",
            expanded: true,
            children: [
              {
                id: 8,
                label: "Great Grandchild 1",
                expanded: true,
                children: [],
              },
            ],
          },
          {
            id: 7,
            label: "Grandchild 4",
            expanded: true,
            children: [],
          },
        ],
      },
    ],
  },
]
// const tree = [
//   {
//     name: "Root",
//     expanded: true,
//     children: [
//       {
//         name: "Child 1",
//         expanded: true,
//         children: [
//           {
//             name: "Grandchild 1",
//             expanded: true,
//             children: [],
//           },
//           {
//             name: "Grandchild 2",
//             expanded: true,
//             children: [],
//           },
//         ],
//       },
//       {
//         name: "Child 2",
//         expanded: true,
//         children: [
//           {
//             name: "Grandchild 3",
//             expanded: true,
//             children: [],
//           },
//         ],
//       },
//     ],
//   },
// ]
var treeContainer = document.getElementById("tree-container")
var treeView = renderTree(tree[0], treeContainer)
console.log(treeView)
//# sourceMappingURL=tree.js.map
