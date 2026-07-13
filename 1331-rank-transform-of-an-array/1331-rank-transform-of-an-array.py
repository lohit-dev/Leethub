class Solution:
    def arrayRankTransform(self, arr: List[int]) -> List[int]:
        d = {} 
        for i,num in enumerate(sorted(set(arr))):
            d[num] = i+1
        return [d[num] for num in arr]
            
                