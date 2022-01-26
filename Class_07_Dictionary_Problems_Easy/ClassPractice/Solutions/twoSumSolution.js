/**
Given an array nums and an integer target, return the indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1] (because nums[0] + nums[1]  == 9)

Input: nums = [3,2,4], target = 6
Output: [1, 2] 

Input: nums = [3,3], target = 6
Output: [0,1]

Source: https://leetcode.com/problems/two-sum/
*/

const nums1 = [2, 7, 11, 15]
const target1 = 9

const nums2 = [3,2,4]
const target2 = 6

const nums3 = [3, 2]
const target3 = 6

function twoSum(nums, target) {
    const map = {}

    for (let i = 0; i < nums.length; i++) {
        const secondAddend = target - nums[i]

        if (secondAddend in map) {
            return [map[secondAddend], i]
        } else {
            map[nums[i]] = i
        }
    }

    return undefined
}

console.log(twoSum(nums1, target1))
console.log(twoSum(nums2, target2))
console.log(twoSum(nums3, target3))