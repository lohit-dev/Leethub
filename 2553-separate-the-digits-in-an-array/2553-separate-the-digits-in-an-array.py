class Solution:
    def separateDigits(self, nums: List[int]) -> List[int]:
        result = []
        for i in nums:
            number = list(str(i))
            result.extend(int(d) for d in number)

        return result