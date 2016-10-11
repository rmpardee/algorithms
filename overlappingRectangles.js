/* You are given the dimensions and location on the x-y coordinate of two rectangles. You need to return: out of the total area of both rectangles, what percentage do the rectangles overlap.

Ex:
The first rectangle starts (bottom left corner) at [1,2] on the x-y coordinate. It has width 3 and height 2.

The second rectangle starts (bottom left corner) at [3,3], has width 2 and height 4.

The overall area of both rectangles is 14 (2*3 + 2*4). They overlap just for 1 square, so the percentage overlap is 7.1% (1/14), which is the number you would return. */

var rectangle1 = {
  bottomLeft: [1, 2],
  width: 3,
  height: 2
};

var rectangle2 = {
  bottomLeft: [3, 3],
  width: 2,
  height: 4
};

function percentOverlap(rect1, rect2) {
  const area = rect1.width * rect1.height + rect2.width * rect2.height;

  const rightEdge1 = rectangle1.bottomLeft[0] + rectangle1.width;
  const xOverlap = Math.abs(rightEdge1 - rectangle2.bottomLeft[0]);

  const topEdge1 = rectangle1.bottomLeft[1] + rectangle1.height;
  const yOverlap = 
};

console.log("percentOverlap(rectangle1, rectangle2): ", percentOverlap(rectangle1, rectangle2));


