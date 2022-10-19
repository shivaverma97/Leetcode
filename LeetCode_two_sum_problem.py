num_val = input()
nums = []
target = ''
digit = ''

for i in num_val:
    if i == 't':
        break

    if i.isnumeric():
        digit = digit+i
        
    if digit != '' and not i.isnumeric():
        nums.append(int(digit))
        digit = '' 

for i in range(1, len(num_val)-1):

    if num_val[len(num_val)-i].isnumeric():
        target = num_val[len(num_val)-i] + target
    else:
        target = int(target.strip())
        break

# output = []
# sum = 0
# for i in range(len(nums)):
#     for j in range(len(nums)):
#         if i != j:
#             sum = nums[i] + nums[j]

#         if sum == target:
#             output.append(i)
#             output.append(j)
#             print(output)
#             break
#     else:
#         continue
#     break



def pro(num, target):
    d = {}
    for i, j in enumerate(nums):
        r = target - j
        if r in d: return [d[r], i]
        d[j] = i

print(pro (nums, target))

