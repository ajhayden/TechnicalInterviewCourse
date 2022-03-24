# Create a depth first search for the following graph recursively. Print out each value.

graph = {
    'a': ['b', 'c'],
    'b': ['d'],
    'c': ['e'],
    'd': ['f'],
    'e': [],
    'f': []
}

def depth_first_print(graph, source):
    print(source)
    for neighbor in graph[source]:
        depth_first_print(graph, neighbor)

depth_first_print(graph, 'a')
