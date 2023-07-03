// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.


public class Solution {
    public int ThirdMax(int[] nums) {
        HashSet<int> set = new HashSet<int>();

        foreach(var num in nums){
            set.Add(num);

            if(set.Count() > 3){
                set.Remove(set.Min());
            }
        }  

        if(set.Count() < 3){
            return set.Max();
        }
        else{
            return set.Min();
        }
    }
}