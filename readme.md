# Git Commands

git init - Create de new git repo
git status - View the changes to your project code
git add - Add files to staging area
git commit -m "message" - Creates a new commit with files from staging area
git log - View recent commits
git config --global user.name "Your Name"
git config --global user.email you@example.com
git commit --amend --reset-author
git remote - view the remotes destinations
git remote -v
git push
git push heroku master

shorcut to add all modified files only :
git commit -a -m "message"
or
it commit -am "message"
instead of 1) git add and 2) git commit

# Other stuff

heroku open (open url directly in the browser)
heroku logs (if problems)
heroku config (prints all env vars)
heroku config:set KEY=value (to set a KEY named env var)
heroku config:unset KEY (to remove KEY named env var)

yarn add xxx --dev (placing package in devDependencies list)
yarn install (all)
yarn install --production (without devDependencies)


:-)
supreme-enigma
legendary-system