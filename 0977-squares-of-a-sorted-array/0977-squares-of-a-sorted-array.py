class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        left = 0
        right = len(nums) - 1
        pos = len(nums) - 1
        new_nums = [0] * len(nums)

        while left <= right:
            if abs(nums[left]) > abs(nums[right]):
                new_nums[pos] = nums[left] ** 2
                left += 1
            else:
                new_nums[pos] = nums[right] ** 2
                right -= 1
            pos -= 1

        return new_nums