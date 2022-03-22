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
