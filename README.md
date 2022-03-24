![people shaking hands with the title "Technical Interview Course"](intro_title.png)

This course is designed to help Information Systems students prepare for technical interviews by learning key concepts, practicing coding challenges, and optimizing solutions. Although specifically targeted to Information Systems students, this course can assist anyone looking to improve in their technical interviewing skills. This course is complete self-taught and provides all necessary links and practices to gain a strong foundation.

The course contains content for the following classes:
- Class 1: Course Introduction
- Class 2: Problem Solving Skills
- Class 3: Recursion Problems
- Class 4: Array Problems (Easy)
- Class 5: Array Problems (Medium)
- Class 6: Frontend Interviews
- Class 7: Merge Sort
- Class 8: Dictionary Problems (Easy)
- Class 9: Dictionary Problems (Medium)
- Class 10: Backend Interviews
- Class 11: Linked List Problems (Easy)
- Class 12: Linked List Problems (Medium)
- Class 13: QuickSort
- Class 14: Trees
- Class 15: System Design Interviews
- Class 16: Final and Reflection

## What to know before using this repo

<!-- Edit for clarity and length lol -->
### Who We Are
- Katie Bankhead, Aaron Hayden, Kayla Pexton
- 2nd-year MISM students at BYU
- Felt unprepared for technical interviews during our time in the IS program
- Created and taught a class on technical interview prep for our masters capstone project
- The class likely won't be offered again anytime soon, so we wanted to convert our class repo into a resource that any IS student can use

### Who You Are
This class was designed for BYU IS students at a junior core level or greater who are interviewing for software engineering roles. We assume you're comfortable with basic programming concepts and data structures such as arrays and dictionaries. We assume you are not familiar with efficient sorting algorithms or data structures such as linked lists, trees, and graphs. 

Most exercises are in Python or JavaScript, but practice coding problems in whatever language you know best.

This course is not a comprehensive resource guaranteed to get you a job, but a guide to show you how to start and provide a foundation in the most essential concepts. We recommend mastering the content in this repo and continuing to learn tech interview skills depending on the role you want.

## Git Repository Onboarding
Fork this repository to write code in homework assignment snippets and keep track of your progress.
1. Go to https://github.com/ajhayden/TechnicalInterviewCourse 
2. Fork this repo (click the Fork icon in the top right hand corner)
3. `git clone << your forked repo >>` your forked repo link is found under the green code button
4. `cd TechnicalInterviewCourse`
5. `git remote -v`
6. `git remote add upstream https://github.com/ajhayden/TechnicalInterviewCourse.git`

### PULL
1. `git pull upstream main`

### PUSH
1. `git add .`
2. `git commit -m “Comment”`
3. `git push origin main`

### Connecting to and setting up credentials for github
1. Go to “Settings”
2. Then “Developer settings”
3. Click “Personal Access Tokens”
4. Click “Generate new token”
5. Click all of the checkmarks for permission
6. Copy “token”
7. Save token in a safe space
8. Login to github using this token 

### Caching credentials
1. Install gh
    - https://github.com/cli/cli#installation
2. gh auth login
3. Select HTTPS
4. Enter Y
5. Add token
