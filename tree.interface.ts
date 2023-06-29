export interface Node {
  id: number;
  label: string;
  children: Node[];
  expanded: boolean;
}
