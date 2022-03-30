# Given a n x m binary matrix image, flip the image horizontally, 
Input =  [[1, 1, 0], [1, 0, 1], [0, 0, 0]]
# Output = [[1, 0, 0,], [0, 1, 0], [1, 1, 1]]


#loop through each list nested in the main list
for j in range(0,len(Input)):

#loop through each element in the nested lists
  for i in range(0,len(Input[j])):

#check for a 1 and set to 0
    if Input[j][i] == 1:
      Input[j][i] = 0

#check for 0 and set to 1
    else:
      Input[j][i] = 1

#reverse each list within the mian list

for y in range(0,len(Input)):
  Input[y] = Input[y][::-1] 


print(Input)
