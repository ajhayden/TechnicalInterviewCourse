def merge_sort(arr):
    merge_sort2(arr, 0, len(arr) - 1)

def merge_sort2(arr, first, last):
    if first < last:
        middle = (first + last)//2
        merge_sort2(arr, first, middle)
        merge_sort2(arr, middle+1, last)
        merge(arr, first, middle, last)

def merge(arr, first, middle, last):
    left = arr[first:middle+1]
    right = arr[middle+1:last+1]
    left.append(999999999)
    right.append(999999999)
    i = j = 0

    for k in range (first, last+1):
        if left[i] <= right[j]:
            arr[k] = left[i]
            i += 1
        else:
            arr[k] = right[j]
            j += 1

input1 = [45, 98, 3, 24, 15, 77, 9, 50] # [3, 9, 15, 24, 45, 50, 77, 98]
input2 = [18, 16, 27, 4, 12] # [4, 12, 16, 18, 27]

print("input1")
print(input1)
merge_sort(input1)
print(input1)

print("input2")
print(input2)
merge_sort(input2)
print(input2)