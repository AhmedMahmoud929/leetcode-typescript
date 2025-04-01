function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff)!, i];
    map.set(nums[i], i);
  }
  return [];
}

// ============== ( TEST CASES ) ==============

/*
Example 1:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    
Example 2:
    Input: nums = [3,2,4], target = 6
    Output: [1,2]

Example 3:
    Input: nums = [3,3], target = 6
    Output: [0,1]
*/

// ============== ( THINKING ) ==============
/*
    nums = [2,6,4,3,7,1,5]
    target = 9
        -> <Map>(2, 0)
        -> 9 - 7 = 2
        -> 9 = 2 + 7
*/
