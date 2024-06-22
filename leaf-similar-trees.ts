/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  if (!root1 || !root2) return false;
  const result1 = dfs(root1);
  const result2 = dfs(root2);

  if (result1 === result2) return true;
  return false;
}

const dfs = function (node: TreeNode) {
  const stack = [node];
  let result: string = "";

  while (stack.length > 0) {
    const node = stack.pop();
    if (node) {
      if (node.left === undefined && node.right === undefined)
        result = result + node.val.toString();
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
  }
};
