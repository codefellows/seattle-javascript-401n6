 Class 08 : REST
=================
[X] Lightning Talk: Ixius (postponed)
[X] Review Surveys
[ ] Review Lab (stop at 7:30)
[ ] Lecture Demo for REST Lab

TODO: add explicit `npm install cowsay` instruction to lab 07

TODO: prepare

```
let template = "I bought ||item|| at the store";
let variables = {item: 'carrots'};
function customBars(template, variables) {

}
```

# REST Resource Example
resource: book
- (id)  << each book should have a uniquely-generated id
- title
- author
- words

CRUD-like   HTTP method    url (pluralized resource name)
create      POST           /books
read all    GET            /books
read one    GET            /books?id
update      PUT            /books?id
delete      DELETE         /books?id

# superagent Response objects res.text vs res.body
HTTP responses with a content type of `text/plain` will be
attached to res.text whereas other content-types are probably
attached to res.body.
