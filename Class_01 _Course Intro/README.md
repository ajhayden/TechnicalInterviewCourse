# Class 1 - Course Intro

Why are we doing this course?
- Although Information Systems students have the skills for the daily needs of technical sofware engineering roles, they aren’t prepared for the technical interviews required land the job.
- Students don’t know the specific skills needed to pass these interviews.
- Students don’t feel adequately supported by the IS department in gaining these skills.
- Students don’t know where to start in their preparation.
- Students feel stress and anxiety due to the unknown nature of these interviews.

Course Outcomes
- Students will learn principles to help them be successful in many types of technical interviews.
- Students will clearly communicate their thought process and critically analyze their code.
- Students will become more confident in their ability to perform in technical interviews.

Git Repository Onboarding
- Use this class GitHub repository to access homework assignments and find class problems with solutions.
- Go to https://github.com/ajhayden/TechnicalInterviewCourse 
    - Fork this repo (click the Fork icon in the top right hand corner)
    - `git clone << your forked repo >>` Your forked repo link is found under the green code button
    - cd TechnicalInterviewCourse
    - git remote -v
    - git remote add upstream https://github.com/ajhayden/TechnicalInterviewCourse.git
- PULL
    - git pull upstream main
- PUSH
    - git add .
    - git commit -m “Comment”
    - git push origin main
- Connecting to and setting up credentials for github
    - Go to “Settings”
    - Then “Developer settings”
    - Click “Personal Access Tokens”
    - Click “Generate new token”
    - Click all of the checkmarks for permission
    - Copy “token”
    - Save token in a safe space
    - Login to github using this token 
- Caching credentials
    - Install gh
        - https://github.com/cli/cli#installation
    - gh auth login
        - Select HTTPS
        - Enter Y
        - Add token
