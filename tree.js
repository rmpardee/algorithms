/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value) {
  var tree = Object.create(treeMaker.methods);
  tree.value = value;
  tree.children = [];
  return tree;
};

treeMaker.methods = {};

treeMaker.methods.addChild = function(value) {
  var newChild = treeMaker(value);
  this.children.push(newChild);
  return newChild;
};

treeMaker.methods.contains = function(target) {
  // console.log("this: ", this);
  // console.log("this.value: ", this.value);
  
  // base case 1: we've found the target
  if (this.value === target) {
    return true;
  }
  // base case 2: we've reached the bottom of the tree and not found the target
  // NOTE: since the for loop won't run if there's no children, the final 'return false' covers this base case
  // so this if statement is unnecessary
  if (this.children.length === 0) {
    return false;
  }
  // recursive case: we have not searched the whole tree yet
  for (var i = 0; i < this.children.length; i++) {
    var childContains = this.children[i].contains(target);
    if (childContains === true) {
      return true;
    } else {
      continue;
    }
  }
  // if we searched the whole tree and did not find the target
  return false;
};

var tree = treeMaker(3);
var one = tree.addChild(1);
one.addChild(4);
one.addChild(5);
var two = tree.addChild(2);
two.addChild(6);
console.log("tree.contains(7) - FALSE: ", tree.contains(7));
console.log("tree.contains(4) - TRUE: ", tree.contains(4));
console.log("tree.contains(2) - TRUE: ", tree.contains(2));