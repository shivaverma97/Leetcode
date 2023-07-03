// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.


public class Solution {
    public string AddStrings(string num1, string num2) {
        BigInteger sum = BigInteger.Parse(num1) + BigInteger.Parse(num2);
        return sum.ToString();
    }
}