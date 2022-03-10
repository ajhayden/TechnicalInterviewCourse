class Node:
    def __init__(self, value):
        self.left = None
        self.right = None
        self.val = value

# recursive solution from GeeksForGeeks
def insert1(root, value):
    # base case
    if root is None:
        return Node(value)
    else:
        # if value is already in tree, don't add a new node
        if root.val == value:
            return root
        # if root is less than value, start looking to the right of root
        elif root.val < value:
            root.right = insert1(root.right, value)
        # if root is greater than value, start looking to the left of root
        else:
            root.left = insert1(root.left, value)
    return root

# in order traversal
# left children, root, right children
def inorder(root):
    # as long as root is not null
    # root will be null when you try to access the child of a leaf node (the child will not exist)
    if root:
        # call the function recursively on the left child first
        # the call stack will go down to the left-most node, then continue back up
        inorder(root.left)
        # print the root/parent node before continuing to the right children
        print(root.val)
        # call the function recursively on the right child
        inorder(root.right)

r = Node(50)
r = insert1(r, 30)
r = insert1(r, 20)
r = insert1(r, 40)
r = insert1(r, 70)
r = insert1(r, 60)
r = insert1(r, 80)
print(r)

inorder(r)
# 20
# 30
# 40
# 50
# 60
# 70
# 80