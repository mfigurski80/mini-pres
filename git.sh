#!/bin/sh
git add -A

git status

echo "Your commit message?:"
read MESSAGE

echo git commit -m \"${MESSAGE}\"

#end user interaction -- nothing yet commited, all safe to end
echo "Press enter to complete..."
read FIN

git commit -m "${MESSAGE}"
git push origin master
