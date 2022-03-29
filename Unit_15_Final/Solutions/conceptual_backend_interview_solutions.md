# Backend Interview Answers
1. What is inheritance? Give an example.
    - Inheritance refers to one class inheriting the attributes and methods from another class. The original class is called the parent class and the class that inherits the parent classes properties is called the child class. For example, the car class could inherit from the vehical class or the cow class could inherit from the mammal class.
2. What is a callback function?
    - A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
3. What is the difference between a breadth-first search and a depth-first search?
    - Breadth First Search is a vertex based technique for finding a shortest path in graph. It uses a Queue data structure which follows first in first out. One vertex is selected at a time when it is visited and marked then its adjacent vertexs are visited and stored in the queue. It is slower than Depth First Search. In short, Breadth First Search goes level by level in a tree.
    - Depth First Search is a edge based technique. It uses the Stack data structure, performs two stages, first visited vertices are pushed into stack and second if there is no vertices then visited vertices are popped. In short, Depth First Search goes down the left side completely than back up to follow the same proceduce one path to its left until completed.
4. What is your approach to debugging?
    - First, I hopefully have logging set up, which can help me identify where my error is occuring. I will look at the error call stack to see what error is occuring and walk backwards through the call stack to find the general location of the error. Then I usually look at the code and determine what the code should be doing. After determining what the code should do I run through each line of code recording what is happening to find the error in the logic.
5. What is an abstract class?
    - In Java, an abstract class is a restricted class that cannot be used to create objects (to access it, it must be inherited from another class). For example, an animal abstract class cannot be used to create an animal object, but a dog class could implement an animal class and that dog class could be used to make dog objects.
