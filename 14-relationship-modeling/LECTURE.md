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

## All Course Brain Map

### CSS
CSS has "classes"
classes are used for styling
ids are used for one thing
ids use the pound sign "#"
classes are used for multiple things
classes use the dot prefix "."
"school 'classes' have periods"

### Classes
you can make classes
classes have constructors
classes have methods
  functions attached to objects from the class
you can instantiate a class to make one object which is an "instance" of that class

```
class TwoDPoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distance(p2) {
    let dx = this.x - p2.x;
    let dy = this.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

let p1 = new TwoDPoint(42, 99);
let p2 = new TwoDPoint(23, 35);
console.log('distance from p1 to p2:', p1.distance(p2));
```

### JavaScript Language Fundamentals
hoisting is a thing

```js
foo();

function foo() {
  console.log('foooo!');
}
```

```js
console.log('x starts', x);
var x = 88;
console.log('x is now', x);
```

```
x starts undefined
x is now 88
```

## Arrays
why is removing or inserting something in the middle of an array expensive?
you've got to move everything over one by one

## Linked Lists
"there's nodes on 'em!" --Cody
usually has a .value or .data property, and a .next property

.next - one node refers or "points" to the next node in a string of nodes.

what are they good at?
making manipulations in the middle of a list
fast O(1) insert/remove if you have a reference to a node
very fast at the front

what are they bad at?
accessing any index in the list is a O(N) operation
we must start at the front and iterate all the way to the index we want

LinkedList metaphors
- can think of them as links in a chain
- can think of them as carabiners that snap on to each other
- can think of balloons tied to each other floating up in the air
  and the bottom one is tied to the `root` of a tree

what happens when you untie a balloon and let go?
it gone. it floats in the sky.

## Big O Notation
big O can be used to describe time and/or also space complexity

Big O describes how long somethings takes with respect to the number of
elements in a collection

O(1) doesn't necessarily mean fast
O(1) means it takes the same amount of time no matter how many things you have
(but, yeah, O(1) generally is fast)

how something behaves under a load
ten, vs hundred, vs a million vs a billion vs a trillion...

O(1) - constant
O(N) - linear
O(log N) - logarithmic
O(N^2)   - quadratic

### O(1) stuff
- accessing arrays
- push/pop on stack
- simple assignments like `x = 8`

### O(N) stuff
- scales linearly
- one for loop (it must iterate over all N things)
- if you have 100 things it takes 100 "time"
- if you have 100,000 things it takes 100,000 "time"
- .length on array is O(1)
  - if you have 100 things it takes 1 constant "time"
  - if you have 100,000 things it takes 1 constant "time"

### O(N^2) stuff
- nested for loops
- "for each thing, you must look at every other thing again"

## Servers
they can have RESTful API
it's just a pattern we use to build CRUD
HTTP requests have something called a "method" 
"method" allows us to Request a URL in different ways

GET
POST
PUT
DELETE

a HTTP request is defined just by text

```
GET /somepath/andstuff?queryparam=foo
Some Header: with a value
Header 2: appears on another line
```

PUT/POST have "bodies" in their requests
the body of the request is simply text that appears after headers after a blank
line. Body can contain text, JSON, anything

```
POST /somepath/andstuff?queryparam=foo
Some Header: with a value
Header 2: appears on another line

{"foo": 42, "arr": [12, 64, 23, 57, 4]}
```

they accept Requests
they reply with Reponses

## Databases
databases can be structured or non-structured
PostGres is a SQL Database (structured query language)
MongoDB is a new-fangled NoSQL Database (not structured query language)

SQL uses words like:
  database, tables, rows, columns, ids, Primary Keys, Foreign Keys

NoSQL uses words like:
  database, collections, documents

Mongoose uses words like:
  Schemas, models, Sub-Documents, ids

What's the difference between a foreign key and a NoSQL id?
nothing, really
they are both just identifiers that refer to other stuff in the database
yes, they probably have certain specific optimizations for whatever DBs they're in
