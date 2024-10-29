# Estate Trading App 
Bring the highest quick, flexible and comfortable for users!!!

# Description
This is a specialized application for posting real estate news, as well as allowing users to create accounts to post information about real estate that you want to sell or buy.

# How to install?
* Clone this file by using this command:
```
git clone git@github.com:MrLam09/estate-trading-app.git
```
* Install [docker](https://www.docker.com/)
* In the cloned file, open CMD and run this command:
```
docker compose up
```
* Open the localhost and enjoy this app.

# ENV variables
* For backend:
```
DB_URL = "mongodb+srv://bangphong1111:XCpe1XmfpIegB6nV@cluster0.udxu6.mongodb.net/estate-inf?retryWrites=true&w=majority&appName=Cluster0"
JWT_SECRET_KEY = "ab2352ea17999d7f267bd7e551ee1464ac3bc730805cee048adb182eae49b806c8ac07d9c6e77238220dce8798b62ae78ad2ba8ae04cd696d87fd4594879f853"
```

* For frontend:
```
VITE_API_KEY = "AIzaSyBI8KFF6vEzejV0863CY6DCkb--gik7u0I"
VITE_AUTH_DOMAIN = "estate-controll-users-app.firebaseapp.com"
VITE_PROJECT_ID = "estate-controll-users-app"
VITE_STORAGE_BUCKET = "estate-controll-users-app.appspot.com"
VITE_MESSAGING_SENDER_ID = "1013423381840"
VITE_APP_ID = "1:1013423381840:web:ce23db7acc67efbd822055"
```

*Note: you just save all ENV variables in `.env` file inside estate-trading-app.
# Reference:
* [Web crawl data](https://bds.com.vn)
