# Class 13: Object Relational Mapping
[X] Review RESTful storage labs
[X] Review LinkedList lab
[ ] Review Reading
[ ] Review Schemas
[ ] Demo sub-documents 
[ ] Demo queries
[ ] Demo Validation
[ ] Demo Middleware

## Review RESTful sotrage labs


## Review Whiteboard challenge
Common mistakes:

* trying to access `.size` or `.length` -- sorry, you don't have this on
  a generic LinkedList! Also, you don't need it.
  * check for `size == 0` with `list.root === null`
  * check for `size == 1` with `list.root.next === null`
* comparing nodes instead of `node.data`
  * Bad: `if (current > current.next)`
  * Good: `if (current.data > current.next.data)`
* not stopping before the end of the list
  * use `while(current.next !== null)` to make sure you can always
    compare `current.data` to `current.next.data` without falling off
    the back of the list

## Review LinkedList lab


## Review reading
Summary: read about Mongoose subdocuments, queries, validation and middleware.

Thank you Alicia, Trevor and Amber for participating early, Brandon, 

### MongoDB Terms
* **document** - a JSON-like object that stores properties and has an \_id
* **collection** - a group of documents, generally all with similar structures
* **database** - a group of collections

database -> collections -> documents -> (sub-documents)

### Mongoose Terms
* **Schema** - the blueprint for a document. defines properties and their
  types.
* **Model** - uses a schema and attaches methods like save, find
* **Sub-Document** - a document embedded in another document
* **Queries** - methods attached to a Mongoose model used for retrieving docs
  * .find()
  * .findOne()
* **validation** - 
* **middleware** - 



#### Complex Query
```js
Person.
  find({
    occupation: /host/,
    'name.last': 'Ghost',
    age: { $gt: 17, $lt: 66 },
    likes: { $in: ['vaporizing', 'talking'] }
  }).
  limit(10).
  sort({ occupation: -1 }).
  select({ name: 1, occupation: 1 }).
  exec(callback);
```


#### Populating Sub-Documents

* [Mongoose Populate Docs](http://mongoosejs.com/docs/populate.html)

Defining two Schemas a `story` that references an `author` sub-document:

```js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Person' },
  title: String,
  fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});

var Story = mongoose.model('Story', storySchema);
var Person = mongoose.model('Person', personSchema);
```

Creating an author first so we can refer to it's document when we
create the story document second:

```js
var author = new Person({
  _id: new mongoose.Types.ObjectId(),
  name: 'Ian Fleming',
  age: 50
});

author.save(function (err) {
  if (err) return handleError(err);

  var story1 = new Story({
    title: 'Casino Royale',
    author: author._id    // assign the _id from the person
  });

  story1.save(function (err) {
    if (err) return handleError(err);
    // thats it!
  });
});
```

Using `populate` to get the full author property sub-document back
on a Story document. Without `populate` only a document id would exist
in the property.

```js
Story.
findOne({ title: 'Casino Royale' }).
populate('author').
exec(function (err, story) {
  if (err) return handleError(err);
  console.log('The author is %s', story.author.name);
  // prints "The author is Ian Fleming"
});
```

#### Validation
* [Mongoose Validation Docs](http://mongoosejs.com/docs/validation.html)

```js
 var breakfastSchema = new Schema({
  eggs: {
    type: Number,
    min: [6, 'Too few eggs'],
    max: 12
  },
  bacon: {
    type: Number,
    required: [true, 'Why no bacon?']
  },
  drink: {
    type: String,
    enum: ['Coffee', 'Tea'],
    required: function() {
      return this.bacon > 3;
    }
  }
});
var Breakfast = db.model('Breakfast', breakfastSchema);
```
