THINGS TO DO IN THIS SECTION:
- Add a statement about how to progress through this course using the readmes, like general idea of content then assignment, and where each assignment is located.

# Class 1 - Course Intro

## Why are we doing this course?
- Although Information Systems students have the skills for the daily needs of technical sofware engineering roles, they aren’t prepared for the technical interviews required land the job.
- Students don’t know the specific skills needed to pass these interviews.
- Students don’t feel adequately supported by the IS department in gaining these skills.
- Students don’t know where to start in their preparation.
- Students feel stress and anxiety due to the unknown nature of these interviews.

## Course Outcomes
- Students will learn principles to help them be successful in many types of technical interviews.
- Students will clearly communicate their thought process and critically analyze their code.
- Students will become more confident in their ability to perform in technical interviews.

## Progressing through the Course
- The course is designed for you to complete an assignment before participating in the next class. As you progress through this course the README files will instruct you on course content and provide you with homework assignments. Homework assignments for each class will be found under "<Topic> Homework". For example, homework to complete before starting Class_03_Recursion_Problems will be found under Class_03_Recursion_Problems -> Recursion_Homework -> README.md

## Git Repository Onboarding
Use this class GitHub repository to access homework assignments and find class problems with solutions.
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
