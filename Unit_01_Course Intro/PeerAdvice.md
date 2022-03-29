# Peer Advice
Interview tips from other IS students.

Would you like to add advice or an interview experience? [Open a pull request!](https://github.com/ajhayden/TechnicalInterviewCourse/pulls)

## What I Wish I'd Known
- You're not limited to working at the companies that actively recruit at BYU. You can compete for a role anywhere.
- Data structures
    - Pros and cons of choosing each data structure
    - When to use a given data structure
    - Practice questions applying each data structure
- How to optimize code to get a better Big O complexity
- 2D array manipulation
- How to apply recursion to a real use case
- How to use git

## General Advice
- If you're targeting a particular company, understand their process and what they look for
    - Look on Glassdoor for interview questions and reviews
- Do at least 1 LeetCode question each day to keep your brain warm
- Frontend is a good route for IS students. You can be more competitive there and expand into full stack work.
    - JavaScript is less common for computer science majors, so IS prepares you well for frontend roles.
- If you're stuck, you can ask the interviewer what they would do. Explain your thought process and let them give you a hint.
- Don't be afraid to break down problems further, even if you don't get as far in an interview
- Know how to divide and conquer the problem when you're in a time crunch and trying to get the answers as fast as possible.

## Companies and Roles

IS students share their interview experiences at different companies. For more information on the interview process at specific companies, search [Glassdoor](https://www.glassdoor.com/).

### Adobe
- Role: Frontend Engineer
- 3 rounds
- Round 1
    - Met with manager, gave them a starting point of experience
    - Answered conceptual questions about React, Linux, API design, etc.
    - ex. "What is a function? What is a component?"
- Round 2
    - Met with an engineer on the team
    - Was given the bones of a project in a code sandbox, and they walked through finishing some functionality together
    - Had to finish and format some pages and do some API calls to get the project functioning
- Round 3
    - Met with project manager
    - Standard behavioral questions
    - ex. "What is your coding style? How do you prefer working in a team? What are some of your previous projects? What are the success and failures you experienced with those projects?"

### AWS
- Role: Frontend Engineer
- 2 rounds
- Round 1
    - General coding question
    - Answered with brute force, then was asked to optimize it
    - "What data structures would you use to optimize this?"
    - You need to know data structures
    - Amazon has their own IDE platform they use for coding interviews
- Round 2
    - Conceptual questions
    - ex.
        - "What would be the structure of the route you would need to access this API?"
        - How to structure code and API stuff
        - How frontend connects to backend
    - Junior core classes and web development (IS 542) were good preparation

### Houzz
- Role: Full Stack Engineer
- 2 rounds
- Round 1
    - Tech screen
    - Asked about your experience with technologies (frontend tech, AWS, Azure, Google Cloud Platform, etc.)
- Round 2
    - Real coding interview
    - Implement a react component
        - Button with incrementing count when clicked
        - Add a new button with a separate count after each click
    - Asked about programming concepts
        - ex. passing by reference vs. value, asynchronous web programming, what makes a good API
    - Interviewer pushed the student and challenged his knowledge to make sure he was confident in his answers, but this is normal.

### IBM (Student 1)
- Role: Frontend Engineer Intern
- Timeline: 4 or 5 rounds over the course of six months
- Most positive interview experience
- Round 1
    - Logic puzzles, no code
    - Enjoyable, not stressful
- Round 2
    - Behavioral questions
    - ex. "Would you rather submit something on time and unfinished, or late and perfect?"
- Round 3
    - Technical interview
    - HackerRank, frontend specific knowledge
    - Formatting CSS and JS knowledge
- Round 5
    - Met with technical manager
    - Conceptual questions, general knowledge about React
    - ex. "If you were to design a vending machine, how would you do it?"
        - UX content
        - How to program something if a vending machine were completely out of one thing (would you not show the item at all, or show it out of stock?)
        - Explaining your thought process and how to design things

### IBM (Student 2)
- Role: New Grad Frontend Developer
- Technical screen (no live interviewer)
    - 1.5 hour time limit
    - Pull a git repository created for you
    - Create a basic website that uses advanced CSS styling
- Multiple choice technical questions
    - CSS: flexbox and grid, positioning, etc.
    - ex. "If you were to style the component to look like _____, what CSS would you write?"

### Lucid
- Role: Frontend Engineer
- Technical interview
    - Met with an engineer
    - Question 1: Create a basic react app
        - Provided with a basic terminal and project directory
        - Explained the ins and outs of the create-react-app package
    - Question 2: Matrices
        - Question similar to [Find the number of islands](https://medium.com/@obiwankenoobi/interview-question-7-find-the-number-of-islands-1216eff9ede9)

### Meta
- Role: Frontend Engineer
- 3-4 rounds over about 2 months
- Phone Screen
    - Very technical, no behavorial questions
    - 15-20 minutes, rapid fire questions
    - 15 quiz questions that were mostly frontend content
    - ex.
        - "What is the Big O of binary search tree traversal?"
        - "What is the difference between call and apply in JavaScript?"
- Coding Interview
    - Whiteboarding, no compiling/running code
    - Frontend focused, vanilla JS, recursion
    - Solve the problem and explain time/space complexities
    - Manipulating the DOM strictly using the DOM API and JavaScript (ex. `document.createElement()`)
    - Prompt: Recursively iterate through an object and return a DOM element from that object
- Onsite Interviews
    - Three 45-minute interviews: 2 coding, 1 behavioral
    - 2 questions per coding interview
        - Strong emphasis on deeply understanding JavaScript
            - ex. reference language, primitive vs. non-primitive types, passing by reference vs. value, higher order functions, callbacks, currying/querying, etc.
        - Expect JavaScript and DOM questions
        - Less like LeetCode and more about language details
    - Behavioral
        - Standard STAR questions
        - "Why do you really want to work at Meta?"
- What to study
    - DOM structure/manipulation
        - "Given two DOM trees of the same shape, see if DOM tree A has the same given node as DOM tree B"
        - "Given a node, check to see if this DOM tree contains that node."
    - DOM API
    - Binary tree LeetCode problems (the DOM is a tree, so understand how to navigate tree structures)
    - Traversing and accessing the DOM
    - Google the top 25 most common JS interview questions
    - [JavaScript MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Other
    - After you apply, you have access to a Meta Careers portal
    - The portal has several learning modules, interview prep info, etc.
    - Meta is very transparent in helping you know what to expect
