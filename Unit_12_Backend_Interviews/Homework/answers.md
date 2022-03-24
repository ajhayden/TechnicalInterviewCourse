1. What is CI/CD? What are some good CI/CD practices?
    - CI stands for continuous integration. This concept ensures the regular building and testing of a program. CD stands for continuous delivery. This concept refers to the ongoing development of a program ahead of production. Good practices include the following principles:
        - Commit early, commit often
        - Keep the builds green
        - Build only once
        - Streamline your tests
        - Clean your environments
        - Make it the only way to deploy to production
        - Monitor and measure your pipeline
        - Make it a team effort

2. What is and what are the benefits of using a binary tree?
    - A binary tree is a hierarchical tree-based data structure in which each node has at most two children. The root node is the top most node of the tree. Each node can have a left or right node. Links between nodes are called branches. A node without children nodes are called leaf nodes. The main advantage of a binary tree is simplicity. They are used to reflect relationships between data and can store an arbitrary number of data values.
        - Access: O(log(n))
        - Search: O(log(n))
        - Insertion: O(log(n))
        - Deletion O(log(n))

3. What does SOLID mean?
    - SOLID is a collection of five common software design principles. The acronym stands for Single Responsibility Property, Open-Closed Principle, Liskov Substitution Principle, Interface Segregation Principle, and Dependency Inversion Principle.
            - Single Responsibility Property: Every class and module should only have one responsibilty.
            - Open-Closed Principle: Classes should be built in a way that one does not need to change the class, but just extend the class.
            - Liskov Substitution Principle: Every derived class should be substitutable for its parent class.
            - Interface Segregation Principle: It is better to have a lot of smaller interfaces than a few larger interfaces.
            - Dependency Inversion Principle: This principle offers a way to decouple software modules. Developers should depend on abstractions (use of intefaces), not on concretions (direct use of classes).

4. What is abstraction? Give an example.
    - Abstraction refers to the principle of handling complexity by hiding unnecessary details from the user. 
    Regarding object oriented programming, abstraction that hides the internal implementation details. For example, a developer would not see all the code behind the scenes for the python sort() function when they use it.

5. What is a singleton? Give an example of when to use this principle.
    - A singleton is a design pattern, which restricts the instantiation of a class to a single instance. This provides coordinated access to that one resource. Use cases for this pattern include factories, builders, and objects that hold program state. For example, a singleton can be used for a single database object shared by different parts a program. Another common example of using a singleton is a logger object that needs to be share among all parts of a program.
