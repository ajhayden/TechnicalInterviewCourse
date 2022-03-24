# Create a depth first search for the following graph iteratively. Print out each value.

graph = {
    'a': ['b', 'c'],
    'b': ['d'],
    'c': ['e'],
    'd': ['f'],
    'e': [],
    'f': []
}

def depth_first_print(graph, source):
    stack = [source]

    while len(stack) > 0:
        current = stack.pop()
        print(current)
        for neighbor in graph[current]:
            stack.append(neighbor)

depth_first_print(graph, 'a')
