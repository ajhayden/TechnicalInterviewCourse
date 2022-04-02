# Unit 9 - Trees

[Tree Problems Slides](https://docs.google.com/presentation/d/1z7NnDibIZ3642Jqt82pseoyZDgUem5-isjGoDrip1Qc/edit?usp=sharing)

## What is a tree?
- What is a tree?
    - A type of graph
    - Data structure made of nodes
    - Each tree has a root node
    - Each node has 0 or more child nodes
    - Node value can be any data type
- What is a binary tree?
    - Each node has max of 2 children
- What is a binary search tree (BST)?
    - All left children <= n <= all right children
    - No duplicate values (depends on definition)
- Where are trees used in the real world?
    - HTML DOM structure
    - JSON structure
    - Folder/file structure

## When to use a tree?
- Pros
    - Finds are really fast (remember binary search algorithm)
    - Semantically structure information
- Cons
    - Slower than hash tables

## Building a BST
- Node class
    - What attributes does each node need?
    - How is it different from a linked list?

## Tree Traversal
- Breadth First Search (BFS)
- Depth First Search (DFS)
    - In-order: most common, prints nodes in sorted order (if the tree is a BST)
    - Pre-order: prints root first
    - ost-order: prints root last
- Applies to all types of trees
- [visualgo.net](https://visualgo.net/) has great visualizations for tree functions

## Practice Problems
- Problem 1: Given the root node and a value, insert the value into a binary search tree.
- Problem 2: Given the root node and a value, find the value in a binary search tree.
- Problem 3: Given a binary tree, print each node using in-order traversal. (left, root, right)
- Problem 4: Remove a given node from a binary search tree.
- Problem 5: Given a binary tree, return the node with the greatest value.
- Problem 6: Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.

*An empty file to write code for these problems can be found under Unit_09_Trees -> Practice -> Problems. Additionally, solutions for each problem can be found under Unit_09_Trees -> Practice -> Solutions.*

# Homework Assignment
- Graphs Assignment
- Find assignment under Unit_10_Graphs -> Homework -> README.md
