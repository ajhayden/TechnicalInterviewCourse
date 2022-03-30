# Write a function that calculates the sum of an array of numbers using recursion. 
# You must use recursion to gain full credit for this question.

input = [3,6,2,9,9,4]
total = 0
def sum(listofNum):

  #check to see if list length is geater than 
  if len(listofNum) > 1:

    # add the first and last elements together
    total =  listofNum[len(listofNum) - 1] +  listofNum[0]

    # remove the added elements
    listofNum.pop(len(listofNum) -1)

    listofNum.pop(0)

    # return added elements and call the function to act on the rest of the list
    return total + sum(listofNum)

    # if list has odd number of elements add the last one
  elif len(listofNum) == 1:

    return listofNum[0]

    # end conidtion add 0
  else:
    return 0

print(sum(input))
