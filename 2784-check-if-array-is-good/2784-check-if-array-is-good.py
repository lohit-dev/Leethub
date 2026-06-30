class Solution:
    def isGood(self, nums: List[int]) -> bool:
        nums.sort()
        max_num = nums[-1]

        if len(nums) != max_num + 1:
            return False

        for i in range(max_num):
            if nums[i] != i + 1:
                return False
        
        return True