# Install MongoDB
* install MongoDB on Cloud9
* add Mongoose to connect to MongoDB

# Commands
* mongod
* mongo
* help
* show dbs -> show all databases
    * show collections
* use -> use a database. if doesn't exists, make new one and use that
* insert
    * db.collectionName.insert()
* find
    * db.collectionName.find({object: value})
* update
    * db.collectionName.update({object: value}, {$set: {object: value, newObject: value}})
    * use `$set` if you dont want to lose existing info
* remove
    * db.collectionName.remove({object: value})