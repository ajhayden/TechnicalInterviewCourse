class Node:
    def __init__(self, value):
        self.left = None
        self.right = None
        self.val = value

# recursive solution from GeeksForGeeks
def insert(root, value):
    # base case
    if root is None:
        return Node(value)
    else:
        # if value is already in tree, don't add a new node
        if root.val == value:
            return root
        # if root is less than value, start looking to the right of root
        elif root.val < value:
            return insert(root.right, value)
        # if root is greater than value, start looking to the left of root
        else:
            return insert(root.left, value)

r = Node(50)
r = insert(r, 30)
r = insert(r, 20)
r = insert(r, 40)
r = insert(r, 70)
r = insert(r, 60)
r = insert(r, 80)
print(r)