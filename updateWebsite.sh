echo "Espero que sepas lo que estás haciendo...."

rm -rf node_modules;
git pull;
npm install --force;
npm run build;
pm2 restart index
sudo systemctl restart nginx.service
