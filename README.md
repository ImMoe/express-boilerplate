## 💡 Model-View-Controller starter code for Express including Authentication

Full version of the Model View Controller pattern using Express as Webserver and MongoDB as database driver.

[!Attachment](https://imgur.com/P0LVggA)

### Folder structure

1. Routes - Includes all the routes to specific pages with `POST`, `GET`, `PUT` and `DELETE` requests.
1. **Models** - All the models and schemas for the database.
1. **Views** - The views HTML files.
1. **Controllers** - When Route is reached a controller action handles the request.

- Routes - Includes all the routes to specific pages with `POST`, `GET`, `PUT` and `DELETE` requests.
- **Models** - All the models and schemas for the database.
- **Views** - The views HTML files.
- **Controllers** - When Route is reached a controller action handles the request.

### How to use it

1. Download the repo as .zip or clone it with `git clone https://github.com/ImMoe/express-starter.git`.
2. Then withing the folder you downloaded run
   `npm install`
3. Now open `.env` file and change _DB_NAME_ value from **YOUR_DB_NAME** to your preference.
4. Now everything is configured and you are ready to start building your site.


## Deployment
- Before deployment if you use Mongo Atlas put connection string into MONGO_ATLAS variable inside **.env** file.
- After that go inside **database** folder and open **config.js** and change `${process.env.DB_HOST}${process.env.DB_NAME}` to
`${process.env.MONGO_ATLAS}`
