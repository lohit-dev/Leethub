class Solution {
    public int[] arrayRankTransform(int[] arr) {
        TreeSet<Integer> ts = new TreeSet<>();
        for (int n : arr) {
            ts.add(n);
        }
        HashMap<Integer, Integer> num = new HashMap<>();
        int count = 1;
        for (int n : ts) {
            num.put(n, count++);
        }
        int[] ans = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            ans[i] = num.get(arr[i]);
        }
        return ans;
    }
}