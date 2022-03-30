# Given a dictionary, sort the keys by the sum of their values in descending order. 
# Return an array with the sorted pairs.

original_dict = { 'A' : [1, 2, 3], 'B' : [1, 7, 3], 'C' : [100, 3, 7], 'D' : [6, 50, 4]}

output = []

# function sum each list of numbers
def sumRec(listofNum):

#check to make sure there is more than one element
  if len(listofNum) > 1:

#add first and last element of the list
    total = listofNum[-1] + listofNum[0]

#remove elements already added to the total
    listofNum.pop(0)
    listofNum.pop(-1)

#return the two numbers and call the original funciton to get the rest of the list
    return total + sumRec(listofNum) 

#end condiiton if only one element add it to the total
  elif len(listofNum) == 1:
    return listofNum[0]

#end condition if no more elements add 0
  else:
    return 0

#call function to get sum of each list
for i in original_dict:
  original_dict[i] = sumRec(original_dict[i])

#sort dicitonary items based on value
sort_orders = sorted(original_dict.items(), key=lambda x: x[1], reverse=True)


print(sort_orders)

# other solutions and help found at https://www.geeksforgeeks.org/python-sort-dictionary-by-values-summation/
