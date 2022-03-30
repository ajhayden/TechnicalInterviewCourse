/* Given a set of vertices V in a weighted graph where its edge weights w(u, v) can be negative, 
   find the shortest path weights d(s, v) from every source s for all vertices v present in the graph. 
   If the graph contains a negative-weight cycle, report it.
   And find the time complexity of the Floyd–Warshall algorithm. */

# given adjacency representation of the matrix
    adjMatrix = [
        [0, I, -2, I],
        [4, 0, 3, I],
        [I, I, 0, 2],
        [I, -1, I, 0]
    ]
