# Class 14: Modelling Relationships
* [X] Lightning Talk: Ix on Web Scrapers
* [ ] Review Mongoose Schemas, Models
* [ ] Review Mongoose Sub-Documents, Validation, adding methods
* [ ] Parse a file to create Artists
* [ ] Parse a file to create Songs
* [ ] Use Mongoose to create a relationship between songs and artists
* [ ] Create an express server to accept info and build relationships in the
  database.

## Configure Mongoose to use Global Promises with Finally Clause
If you see Mongoose complain about not having a `.finally` function
then remember to configure `mongoose.Promise = global.Promise` before
you call `mongoose.connect()`

```
TypeError: Promise.all(...).then(...).then(...).catch(...).finally is not a function
```
