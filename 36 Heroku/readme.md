# Prereqs:
- need to create a Heroku account.
- git to have git installed.
- project has to be its own repository.
- add `"start": "node index.js"` to scripts in package.json

# Deloying a simple app
- commit all codes that you want to run on Heroku.
- `heroku create` to create a Heroku machine.
- `git remote -v` to check the git repository.
- `git push heroku master` to push code to Heroku.
- `heroku logs` to check log

# Deploying apps with a database:
- same process with running a simple app.
- `heroku run <terminal_command>` to run Heroku's terminal_command.
  - eg: `heroku run ls`
- use mlab to host MongoDBs OR install MongoDB on Heroku (haven't learn it because heard that it's pain in the ass)
  - need to create an mlab account.
  - use AWS, single node, sandbox for free use.
  - Deployment plan: create a database, setup username and password for the database.
- `export <variable_name>=<database_url>` to create an environment variable for database url in your localhost.
  - eg: `export databasedURL=mongodb://localhost:27017/databaseName`
- go to Heroku -> your app -> settings -> config variables -> add your variable.
  - eg: key = `databasedURL` value = `<mlab_database_url>`