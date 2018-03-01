 Class 07
==========
[X] Lightning Talk
[X] Preview labs 6, and 7
[X] Review survey feedback
[X] Review reading discussion
[ ] Code Review Bitmap
[ ] demo building manual HTTP server

function parameterFunctionJunction(param1, param2) {

}

parameterFunctionJunction("foo", "bar");

http://google.com/images?query=hotdog&size=400px
http://google.com/images
  ?query=hotdog
  &quality=highresolution
  &size=400px

function googleImageSearch(queryParams) {
  queryParams.size
  queryParams.query
  queryParams.quality

}

Canvas
======
Priority Number 1: up to date (week or two ahead of time)
discrepency between assignments and modules

Reading Discussion Observations
===============================
- HTTP requests are strictly defined by rules
- HTTP responses are loose. pretty much anything goes.

- HTTP - a protocol that defines how "hypertext" should be transferred
- REST - REpresentational State Transfer
    * a combination of HTTP methods (like GET/PUT/POST/DELETE)
      and query parameters that describe how data should be
      manipulated
    * the architecture of how "resources" should be designed
- CRUD - create,read,update,delete << simply a mnemic memory useful trick

- Header Fields:
  Cookie, ETag, Location, HTTP referer, DNT, X-Forwarded-For

HTTP Status Codes:
1xx: Informational response
2xx: Success
3xx: Redirection
4xx: Client errors
  forbidden
  not found
5xx: Server errors
  user supplied information that crashed the server
  sent username, sent password
  server was poorly programmed
  server didn't handle "user not found"
  server crashed.


- REpresentational State Transfer (REST): An architectural style for distributed hypermedia systems. 6 guiding principals:

Separation of concerns between Client/Server
Stateless:  session state is solely on the client (no stored content from server)
Cacheable:  
Uniform Interface: 1) identification of resources, 2) manipulation of resources through representations, 3) self-descriptive messages, and 4) hypermedia as the engine of application state.
Layered System:  hierarchical layers in which each component cannot “see” (scope) beyond the immediate layer with which they are interacting.
Code on demand (optional):


Bitwise Operators

0 & 0 == 0
0 & 1 == 0
1 & 0 == 0
1 & 1 == 1

  0101
& 0000
======
  0000

  0101
& 0001
======
  0001

0 | 0 == 0
0 | 1 == 1
1 | 0 == 1
1 | 1 == 1

  0101
| 0101
======
  0101

  1001
| 0011
======
  1011

  000000000100101010101010101010111111100001111000001
& 000100101010101010101010111111100001111000001000000
=====================================================
  000000000000101010101010101010100001100000001000000

 (true && true) == true
(true && false) == false















