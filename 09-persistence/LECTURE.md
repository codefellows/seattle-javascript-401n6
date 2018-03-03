 Class 09: Promises and Persistence
====================================
[X] Review persistence
  [X] in-memory
    - very fast
    - volaitile (it goes away when the computer/server restarts)
  [X] file system
    - the hard drive is slower than RAM
    - but, data persists when the computer/server restarts
  [X] databases (not quite yet!)
[ ] Promises
  [ ] sync
    - code happens sequentially
    - the next line doesn't execute until the line before it is done
  [ ] async
    - code has to wait around for the hard drive to come back with a result
    - async code makes it so the program can continue to run until the result
      is ready
  [ ] pyramid of death


MEMORY = {
 ASDF: {name: "", author: "", pages: 1212}
 BJSE: {name: "", author: "", pages: 1212}
 MNYW: {name: "", author: "", pages: 1212}
}

We can't use in-memory storage any more because it will be destroyed
every time the server restarts.

Instead, we'll write each book object to it's own file.
The file will be called `book.id`.json

/path/to/our/server/savedfiles
 ASDF.json
 BJSE.json
 MNYW.json

One large file vs many small files:

huge.json
  {ASDF: {name, author, words}
  {BJSE: {name, author, words}
  {MNYW: {name, author, words}


ASDF.json
  {name, author, words}
BJSE.json
  {name, author, words}
MNYW.json
  {name, author, words}


Common Async Functions:
- AJAX
- reading files
- writing files
- reading from a database
- writing to a database

- any network operation (uploading/downloading across the Internet)
- any hard drive operation (reading or saving to/from a file)

- user events (mouse clicks, mouse moves, key presses)
  You don't know when someone will do something!
- setTimeout, setInterval

- any time you see a callback function should be a big clue
- the whole point of a callback function is to say,
  - "I don't know when you'll be done, but when you're done execute this"
  - "call me when you're off work"



    Storage
       |
  |---------|
 memory    file

Specification vs Implementation
- if you have a good specification of WHAT things are supposed to do
- then you don't have to care HOW they do it

Storage Specification
=====================
save(book)
get(book.id)
getAll()
remove(book.id)
removeAll()















