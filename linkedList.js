/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';

var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

var ListNode = function(value) {
  this.value = value;
  this.next = null;
};

LinkedList.prototype.addToTail = function (value) {
  // create the new node
  var newTail = new ListNode(value);

  // if there is no current head (first node)
  if (this.head === null) {
    // set the head to the new node
    this.head = newTail;
  } else {
    // set the new node as the .next value of the current tail
    this.tail.next = newTail;
  }

  // in either case, set the new node as the new tail
  this.tail = newTail;
};

LinkedList.prototype.removeHead = function() {
  var oldHead = this.head;
  // edge case: no head yet
  if (oldHead === null) {
    return null;
  }
  // edge case: there's only one node so far - reset both head and tail to null as they were when instantiated
  if (oldHead.next === null) {
    this.head = null;
    this.tail = null;
  } else {
    // reset the head to the next node
    this.head = oldHead.next;
  }
  return oldHead.value;
};

LinkedList.prototype.contains = function(target) {
  var findTarget = function(node) {
    // base case 1: we've found the value
    if (node.value === target) {
      return true;
    }
    // base case 2: we've reached the end of the list without finding the value
    if (node.next === null) {
      return false;
    }
    // recursive case: check this next node in the list
    return findTarget(node.next);
  };
  // initiate the recursive subroutine with the head of the list
  return findTarget(this.head);
};

var list = new LinkedList();
console.log("list.tail (null): ", list.tail);
list.addToTail(4);
list.addToTail(5);
console.log("list.head.value (4): ", list.head.value);
console.log("list.contains(5) (TRUE): ", list.contains(5));
console.log("list.contains(6) (FALSE): ", list.contains(6));
console.log("list.removeHead() (4): ", list.removeHead());
console.log("list.tail.value (5): ", list.tail.value);