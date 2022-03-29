![people shaking hands with the title "Technical Interview Course"](intro_title.png)

This course is designed to help Information Systems students prepare for technical interviews by learning key concepts, practicing coding challenges, and optimizing solutions. Although specifically targeted to Information Systems students, this course can assist anyone looking to improve in their technical interviewing skills. This course is complete self-taught and provides all necessary links and practices to gain a strong foundation.

The course contains content for the following classes:
- Unit 1: Course Introduction
- Unit 2: Problem Solving Strategies
- Unit 3: Big O Notation
- Unit 4: Recursion
- Unit 5: Arrays
- Unit 6: Dictionaries
- Unit 7: Linked Lists
- Unit 8: Midterm
- Unit 9: Trees
- Unit 10: Graphs
- Unit 11: Sorting
- Unit 12: Backend Interviews
- Unit 13: Frontend Interviews
- Unit 14: Systems Design Interviews
- Unit 15: Final

## What to know before using this repo

### Who We Are
We are 2nd-year MISM students at BYU. When pursuing internships and full time jobs in software engineering, we felt unprepared for the technical interviews we faced and didn't know where to begin as IS students.

For our masters capstone project, we designed and taught a class on technical interview prep, specifically tailored to IS students. While the class was only offered for one semester, we've converted our class repo into a resource for any IS student to use (or anyone with a background outside of computer science).

### Who You Are
This class was designed for BYU IS students at a junior core level or greater who are interviewing for software engineering roles. We assume you're comfortable with basic programming concepts and data structures such as arrays and dictionaries. We assume you are not familiar with efficient sorting algorithms or data structures such as linked lists, trees, and graphs. 

Most exercises are in Python or JavaScript, but practice the coding problems in whatever language you know best.

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
