rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:liql5870/Tiger-ui-website.git &&
git push -f -u origin master &&
cd -
echo https://liql5870.github.io/Tiger-ui-website/index.html
