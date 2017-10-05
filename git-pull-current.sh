branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
#echo $branch
git pull origin $branch
code .
ng serve
echo Press Enter...
read