/* "Given a string, find the longest substring without repeating characters.

For example, for string “abccdefgh”, the longest substring is “cdefgh”. */

// Q: repeat anywhere in the substring or just two of the same letter next to each other?
// Q: two of the same length, first one you find?

// v1: only doesn't allow repeated letters IN A ROW
var findLongestSubstring = function(string) {
  // result substring
  let longest = '';
  // current substring
  let current = '';
  // loop through the string
  for (let i = 0; i < string.length; i++) {
    // always add the current letter to the current substring first
    current += string[i];
    // if the current letter is the same as the next character
    if (string[i] === string[i + 1] || string[i + 1] === undefined) {
      // check length of current substring
      if (current.length > longest.length) {
        // if that length is greater that what's saved in result, replace result with this new one
        longest = current;
      }
      // and reset the current
      current = '';
    }
  }
  // return the result substring
  return longest;
};

var test1 = "abcacdefagh";
var test2 = "banana";
var test3 = "appple";
var test4 = "abcdefghkcsdf";
console.log("longest found: ", findLongestSubstring(test2));


// v2a: doesn't allow the same character anywhere in the substring
// uses a second `for` loop to rebuild the sub object
function longestSubstring(string) {
  var longest = '';
  var current = '';
  var sub = {};

  for (var i = 0; i < string.length; i++) {
    var prevRepeatLetterIndex = sub[string[i]];
    if (prevRepeatLetterIndex || prevRepeatLetterIndex === 0) {
      if (current.length > longest.length) {
        longest = current;
      }
      current = string.slice(prevRepeatLetterIndex, i);
      sub = {};
      for (var j = prevRepeatLetterIndex + 1; j <= i; j++) {
        sub[string[j]] = j;
      }
    } else {
      current += string[i];
      sub[string[i]] = i;
    }
  }
  if (current.length > longest.length) {
    longest = current;
  }
  console.log(longest);
};

// v2b: doesn't allow the same character anywhere in the substring
// Colin's version - resets the index in order to rebuild both the current string and the sub object
// function longestSubstring(string) {
//   var longest = '';
//   var current = '';
//   var sub = {};

//   for (var i = 0; i < string.length; i++) {
//     if (sub[string[i]]) {
//       if (current.length > longest.length) {
//         longest = current;
//       }
//       i = sub[string[i]];
//       sub = {};
//       current = '';
//     } else {
//       current += string[i];
//       sub[string[i]] = i;
//     }
//   }
//   if (current.length > longest.length) {
//     longest = current;
//   }
//   console.log(longest);
// };

longestSubstring(test1);
longestSubstring(test2);
longestSubstring(test3);
longestSubstring(test4);