import { Node } from "./tree.interface";
import { HttpRequest } from "./http";

function makeTreeView(tree: any, parent: any = null) {
  const results: any[] = [];

  if (Array.isArray(tree)) {
    for (const node of tree) {
      results.push(makeTreeView(node, tree));
    }
  } else if (typeof tree === "object") {
    results.push(tree);

    if (tree.children) {
      for (const child of tree.children) {
        results.push(makeTreeView(child, tree));
      }
    }
  }
  return results;
}
const tree = [
  {
    name: "Root",
    children: [
      {
        name: "Child 1",
        children: [
          {
            name: "Grandchild 1",
            children:[]
          },
          {
            name: "Grandchild 2",
            children: []
          },
        ],
      },
      {
        name: "Child 2",
        children: [
          {
            name: "Grandchild 3",
            children: []
          },
        ],
      },
    ],
  },
];

const myRequest = new HttpRequest("https://localhost:5500/data", "GET", {}, {});
