/**
Given an array of integers, return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Input = [[1, 2], [2, 3], [3, 4], [1, 3]]
Output = 1
[1, 3] can be removed and the rest of the intervals are non-overlapping.

Input = [[1, 2], [1, 2], [1, 2]]
Output = 2
Two [1, 2] intervals must be removed to make the rest of the intervals non-overlapping.

Input = [[1, 2], [2, 3]]
Output = 0
None of the input intervals are overlapping, so you don't need to remove any.

Source: https://leetcode.com/problems/non-overlapping-intervals/
Solution walkthrough: https://medium.com/swlh/non-overlapping-intervals-f0bce2dfc617
*/

const intervals1 = [[1, 2], [2, 3], [3, 4], [1, 3]]
const intervals2 = [[1, 2], [1, 2], [1, 2]]
const intervals3 = [[1, 2], [2, 3]]