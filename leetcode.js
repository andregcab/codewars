// //Two Sum

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  let indexes = []
  
  for(let i=0; i < nums.length; i++){
      let currentThing = nums[i]
      indexes.push(i)
      for(let x=0; x < nums.length; x++){
          if(currentThing + nums[x] === target && i !== x){
              indexes.push(x)
              return indexes
          }
      }
      indexes.pop()
  }
};