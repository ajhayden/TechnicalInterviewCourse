# Unit 7 - Linked Lists

[Linked List Problems (Easy) Slides](https://docs.google.com/presentation/d/1xx__d5uFAsPB1bcVqM1aXEvQ4VpM8nuIQQ4AUhBjZug/edit?usp=sharing)

[Linked List Problems (Medium) Slides](https://docs.google.com/presentation/d/1wT0umrLk6RZj2NseQm1XK3ZvPCzOpNnaAd8yscJniGE/edit?usp=sharing)

## Data Structures Big O Breakdown

| | Access | Search | Insertion | Deletion |
| --- | --- | --- | --- | --- |
| Array | O(1) | O(N) | O(N) | O(N) |
| Dictionary/Hash Table | O(1) | O(N) | O(1) | O(1) |
| Linked List | O(N) | O(N) | O(1) | O(1) |
| Binary Tree | O(log(N)) | O(log(N)) | O(log(N)) | O((log(N)) |

## Linked Lists
- What are linked lists?
    - A sequence of data elements, which are connected together via pointers
- What is a node?
    - An element of a linked list
- What are the two node fields?
    - Data: contains the value to be stored in the node
    - Next: contains reference to next node on the list

## Linked Lists Visual
![singly linked list image](linkedList.png)  
The first node is called the `head`, and it’s used as the starting point for any iteration through the list. The last node must have its `next` reference pointing to `None` to determine the end of the list

## When to use Linked Lists vs. Array
1. When you need constant-time insertions/deletions from the list (such as in real-time computing where time predictability is absolutely critical)
2. When you don't know how many items will be in the list. With arrays, you may need to re-declare and copy memory if the array grows too big
3. When you don't need random access to any elements
4. When you want to be able to insert items in the middle of the list (such as a priority queue)

## Creating a Linked List
1. Start with a single node
2. Join nodes to get linked list
3. Add required methods to LinkedList class

### Linked List Problems
- Problem 1: Write classes to build a basic singly linked list
- Problem 2: Write a program to reverse a linked list
- Problem 3: Write a program to delete a given node from a linked list
- Problem 4: Write a program to remove duplicates from a sorted list
- Problem 5: Write a program to remove duplicates from an unsorted list
- Problem 6: Write a program to find the intersection of two linked lists
- Problem 7: Write a program to merge two sorted lists
- Problem 8: Write a program to delete N nodes after M nodes of a linked list

*An empty file to write code for these problems can be found under Unit_07_Linked_Lists -> Practice -> Problems. Additionally, solutions for each problem can be found under Unit_07_Linked_Lists -> Practice -> Solutions.*

# Midterm
- When you are ready to start the midterm go to Unit_08_Midterm -> README.md
