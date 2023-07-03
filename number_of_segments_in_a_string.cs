// Given a string s, return the number of segments in the string.

// A segment is defined to be a contiguous sequence of non-space characters.

 

public class Solution {
    public int CountSegments(string s) {
        if(s == "") return 0;
        var sArr = s.Split(new [] {" "}, StringSplitOptions.RemoveEmptyEntries);
        return sArr.Length;
    }
}