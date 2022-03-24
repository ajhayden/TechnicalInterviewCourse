# Write a function, hasPath, that takes in an object representing the adjacency list 
# of a directed acyclic graph and two nodes (src, dst). The function should return a boolean 
# indicating whether or not there exists a directed path between the source and destination nodes.
# https://structy.net/problems/has-path

graph = {
    'f': ['g', 'i'],
    'g': ['h'],
    'h': [],
    'i': ['g', 'k'],
    'j': ['i'],
    'k': []
}

# Solved using a depth first search
def has_path_depth_first(graph, src, dst):
    if src == dst:
        return True
    
    for neighbor in graph[src]:
        if has_path_depth_first(graph, neighbor, dst) == True:
            return True

    return False

print(has_path_depth_first(graph, 'f', 'k'))

# Solved using a breadth first search
def has_path_breadth_first(graph, src, dst):
    queue = [src]

    while len(queue) > 0:
        current = queue.pop(0)
        if current == dst:
            return True
        for neighbor in graph[current]:
            queue.append(neighbor)

    return False

print(has_path_breadth_first(graph, 'f', 'k'))
