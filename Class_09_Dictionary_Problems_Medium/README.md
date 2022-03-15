# Class 9 - Dictionary Problems (Medium)

## Data Structures Big O Breakdown

| | Access | Search | Insertion | Deletion |
| --- | --- | --- | --- | --- |
| Array | O(1) | O(N) | O(N) | O(N) |
| Dictionary/Hash Table | O(1) | O(N) | O(1) | O(1) |
| Linked List | O(N) | O(N) | O(1) | O(1) |
| Binary Tree | O(log(N)) | O(log(N)) | O(log(N)) | O((log(N)) |

## When to use dictionaries?
- When order doesn’t matter
- Key and value
- When values might change
- When we have a unique reference with value
- No duplicates
- Quick access is needed
- When memory is available

## How to avoid for-loops?
- List Comprehension / Generator Expression
- Functions
- itertools

### Practice Time
- Write a program to convert a list of tuples into dictionary

Example input: `[('A', 1), ('B', 2), ('C', 3)]`

### Practice Solution
Two Ways to Approach
- setdefault() 
    - turns the first parameter into the key and the second into the value of the dictionary
- dict()
    - Converts tuple to corresponding dictionary

```python
### First Approach
# Python code to convert into dictionary

def Convert(tup, di):
	for a, b in tup:
		di.setdefault(a, []).append(b)
	return di
	
# Driver Code	
tups = [("A", 1), ("B", 2), ("C", 3)]
dictionary = {}
print (Convert(tups, dictionary))
```

```python
### Second Approach
# Python code to convert into dictionary

def Convert(tup, di):
	di = dict(tup)
	return di
	
# Driver Code
tups =  [("A", 1), ("B", 2), ("C", 3)]
dictionary = {}
print (Convert(tups, dictionary))
```

## Additional Questions to ask
- What is the underlying big O for dict()?
    - O(N)
- What is the difference between list and tuples in Python?
    - Lists are: mutable and slower. Uses []
    - Tuples are: immutable and faster. Uses ()


### Dictionary Problems (Medium)
Problem 1
- Write a program to reverse dictionary keys order

Problem 2
- Write a program to sort nested keys by value

Problem 3
- Write a program to remove duplicate values across dictionary values
		
*An empty file to write code for these problems can be found under Class_09_Dictionary_Problems_Medium -> Practice -> Problems. Additionally, solutions for each problem can be found under Class_09_Dictionary_Problems_Medium -> Practice -> Solutions.*

# Homework Assignment
- Backend Interview Assignment
- Find assignment under Class_10_Backend_Interviews -> Homework -> README.md