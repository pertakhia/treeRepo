import { Node } from "./tree.interface"
import { HttpRequest } from "./http"

function makeTreeView(tree: any, parent: any = null) {
  const results: any[] = []

  if (Array.isArray(tree)) {
    for (const node of tree) {
      results.push(makeTreeView(node, tree))
    }
  } else if (typeof tree === "object") {
    results.push(tree)

    if (tree.children) {
      for (const child of tree.children) {
        results.push(makeTreeView(child, tree))
      }
    }
  }
  return results
}

function renderTree(node: Node, container: HTMLElement): void {
  const ul = document.createElement("ul")
  container.appendChild(ul)

  node.children.forEach(child => {
    const li = document.createElement("li")
    ul.appendChild(li)

    const label = document.createElement("span")
    label.textContent = child.label
    li.appendChild(label)

    if (child.children.length > 0) {
      const toggleButton = document.createElement("button")
      toggleButton.textContent = child.expanded ? "-" : "+"
      li.appendChild(toggleButton)

      const nestedContainer = document.createElement("div")
      li.appendChild(nestedContainer)

      toggleButton.addEventListener("click", () => {
        child.expanded = !child.expanded
        toggleButton.textContent = child.expanded ? "-" : "+"
        nestedContainer.style.display = child.expanded ? "block" : "none"
      })

      renderTree(child, nestedContainer)
      nestedContainer.style.display = child.expanded ? "block" : "none"
    }
  })
}

const tree = [
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

const treeContainer = document.getElementById("tree-container")

const treeView = renderTree(tree[0], treeContainer)

console.log(treeView)
