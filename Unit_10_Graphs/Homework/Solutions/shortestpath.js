# Recursive function to print the path of given vertex `u` from source vertex `v`
def printPath(path, v, u, route):
    if path[v][u] == v:
        return
    printPath(path, v, path[v][u], route)
    route.append(path[v][u])
 
 
# Function to print the shortest cost with path
# information between all pairs of vertices
def printSolution(path, n):
    for v in range(n):
        for u in range(n):
            if u != v and path[v][u] != -1:
                route = [v]
                printPath(path, v, u, route)
                route.append(u)
                print(f'The shortest path from {v} —> {u} is', route)
 
 
# Function to run the Floyd–Warshall algorithm
def floydWarshall(adjMatrix):
 
    # base case
    if not adjMatrix:
        return
 
    # total number of vertices in the `adjMatrix`
    n = len(adjMatrix)
 
    # cost and path matrix stores shortest path
    # (shortest cost/shortest route) information
 
    # initially, cost would be the same as the weight of an edge
    cost = adjMatrix.copy()
    path = [[None for x in range(n)] for y in range(n)]
 
    # initialize cost and path
    for v in range(n):
        for u in range(n):
            if v == u:
                path[v][u] = 0
            elif cost[v][u] != float('inf'):
                path[v][u] = v
            else:
                path[v][u] = -1
 
    # run Floyd–Warshall
    for k in range(n):
        for v in range(n):
            for u in range(n):
                # If vertex `k` is on the shortest path from `v` to `u`,
                # then update the value of cost[v][u] and path[v][u]
                if cost[v][k] != float('inf') and cost[k][u] != float('inf') \
                        and (cost[v][k] + cost[k][u] < cost[v][u]):
                    cost[v][u] = cost[v][k] + cost[k][u]
                    path[v][u] = path[k][u]
 
            # if diagonal elements become negative, the
            # graph contains a negative-weight cycle
            if cost[v][v] < 0:
                print('Negative-weight cycle found')
                return
 
    # Print the shortest path between all pairs of vertices
    printSolution(path, n)
 
 
if __name__ == '__main__':
 
    # define infinity
    I = float('inf')
 
    # given adjacency representation of the matrix
    adjMatrix = [
        [0, I, -2, I],
        [4, 0, 3, I],
        [I, I, 0, 2],
        [I, -1, I, 0]
    ]
 
    # Run Floyd–Warshall algorithm
    floydWarshall(adjMatrix)

# output
# The shortest path from 0 —> 1 is [0, 2, 3, 1]
# The shortest path from 0 —> 2 is [0, 2]
# The shortest path from 0 —> 3 is [0, 2, 3]
# The shortest path from 1 —> 0 is [1, 0]
# The shortest path from 1 —> 2 is [1, 0, 2]
# The shortest path from 1 —> 3 is [1, 0, 2, 3]
# The shortest path from 2 —> 0 is [2, 3, 1, 0]
# The shortest path from 2 —> 1 is [2, 3, 1]
# The shortest path from 2 —> 3 is [2, 3]
# The shortest path from 3 —> 0 is [3, 1, 0]
# The shortest path from 3 —> 1 is [3, 1]
# The shortest path from 3 —> 2 is [3, 1, 0, 2]

# The time complexity of the Floyd–Warshall algorithm is O(V3), where V is the total number of vertices in the graph.
