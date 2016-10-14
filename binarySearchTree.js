/*
For the purposes of this challenge, we define a binary search tree to be a binary tree with the following ordering properties:

- The  value of every node in a node's left subtree is less than the data value of that node.
- The  value of every node in a node's right subtree is greater than the data value of that node.

Given the root node of a binary tree, can you determine if it's also a binary search tree?

Complete the function in your editor below, which has  parameter: a pointer to the root of a binary tree. It must return a boolean denoting whether or not the binary tree is a binary search tree. You may have to write one or more helper functions to complete this challenge.

Note: A binary tree is not a binary search if there are duplicate values.

Sample Input

   ___3___
  |       |
__5__   __2
|   |   |
1   4   6

Sample Output

false

Explanation

The tree in the diagram does not satisfy the ordering property for a Binary Search Tree, so we return false. */

function checkBST(tree) {
  // base case 1: we find something to the left that is larger than the value
  return false;
  // base case 2: we find something to the right that is smaller than the value
  return false;
  // base case 3: we reach `null`

  // recursive case
    // left is smaller than the value

    // pass it into the subroutine

    // right is larger than the value

    // pass it into the subroutine

  // if we get through the whole subroutine and haven't returned, return true
};

const falseBST = {
  value: 3,
  left: {
    value: 5,
    left: {
      value: 1,
      left: null,
      right: null
    },
    right: {
      value: 4,
      left: null,
      right: null
    }
  },
  right: {
    value: 2,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: null
  }
};

checkBST(falseBST);
