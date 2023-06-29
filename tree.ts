import { Node } from "./tree.interface"

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

const container: any = document.getElementById("tree-container")

const tree: Node = {
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
