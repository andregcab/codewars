// //Two Sum

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  let indexes = [];

  for (let i = 0; i < nums.length; i++) {
    let currentThing = nums[i];
    indexes.push(i);
    for (let x = 0; x < nums.length; x++) {
      if (currentThing + nums[x] === target && i !== x) {
        indexes.push(x);
        return indexes;
      }
    }
    indexes.pop();
  }
};

//Who Likes It

function likes(names) {
  switch (names.length) {
    case 0:
      return "no one likes this";
      break;
    case 1:
      return `${names[0]} likes this`;
      break;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      return `${names[0]}, ${names[1]} and ${names.length -
        2} others like this`;
  }
}
