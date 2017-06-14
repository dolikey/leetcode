/**
 * @description
 * Given two binary trees and imagine that when you put one of them to cover the other, 
 * some nodes of the two trees are overlapped while the others are not.
 * You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, 
 * then sum node values up as the new value of the merged node. Otherwise, 
 * the NOT null node will be used as the node of new tree.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1 根结点
 * @param {TreeNode} t2 根结点
 * @return {TreeNode}
 */

var mergeTrees = function(t1, t2) {
    var res = null;
    var val1 = t1 && t1.val;
    var val2 = t2 && t2.val;
    if(!t1 && !t2) return res;

    res = new TreeNode(val1 + val2);
    res.left = mergeTrees(t1 && t1.left, t2 && t2.left);
    res.right = mergeTrees(t1 && t1.right, t2 && t2.right);

    return res;
};