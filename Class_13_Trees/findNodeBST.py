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
            root.right = insert(root.right, value)
        # if root is greater than value, start looking to the left of root
        else:
            root.left = insert(root.left, value)
    return root

def find(root, value):
    if root is None or root.val == value:
        return root

    if root.val < value:
        return find(root.right, value)

    return find(root.left, value)

def inorder(root):
    if root:
        inorder(root.left)
        print(root.val)
        inorder(root.right)

r = Node(50)
r = insert(r, 30)
r = insert(r, 20)
r = insert(r, 40)
r = insert(r, 70)
r = insert(r, 60)
r = insert(r, 80)
print(r)

inorder(r)

print(find(r, 70))
print(find(r, 71))