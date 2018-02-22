![cf](http://i.imgur.com/7v5ASc8.png) 07: HTTP Server
===

## Learning Objectives
* Students will learn to read and write HTTP Request and Response packets
* Students will be able to create HTTP servers for handling HTTP requests

## Resources
* Skim [nodejs http module](https://nodejs.org/api/http.html)
* Skim [wiki list of header fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields#Request_fields)
* Skim [wiki list of status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

## [HTTP](https://tools.ietf.org/html/rfc7231)
The Hyper Text Transfer Protocol (HTTP) is a stateless request-response application layer protocol. HTTP is used to build distributed, collaborative, hypermedia information systems. HTTP is the foundation for the world wide web. Applications built using HTTP subscribe to the client-server computing model. In the client-server computing model a host designed to provide a service is called a server and clients are hosts that make requests to the service. The HTTP specification defines how requests and responses should be formatted, but not what a service should represent. HTTP is often associated with serving `.html` files but is also used to transfer images, videos, json, xml, binary executables, and much more.

#### HTTP Requests
A HTTP/1.1 request is formatted in text and transferred using TCP. The first line of the request contains the `METHOD`, `URL`, and `HTTP VERSION`. The following lines are the request `HEADERS`. Each header is separated by a newline character. A header is a key value pair separated using a colon. Headers containing more than one value separate each value using a semicolon. The header section of the request is terminated with an empty line. An optional body follows the header section.


|HTTP Method	| Request Has Body	| Response Has Body |	Safe	| Idempotent	| Cacheable | Function |
| --- | --- | --- | --- | --- | --- | --- |
| GET	    | No	      | Yes	| Yes | Yes	| Yes | Retrieve a resource |
| HEAD	  | No	      | No	| Yes | Yes	| Yes | Like GET but headers only |
| POST	  | Yes	      | Yes	| No	| No	| Yes | Create a resource |
| PUT	    | Yes	      | Yes	| No	| Yes	| No | Update a resource |
| DELETE	| No	      | Yes	| No	| Yes	| No | Delete a resource |
| CONNECT	| Yes	      | Yes	| No	| No	| No | Create TCP/IP tunnel |
| OPTIONS	| Optional	| Yes	| Yes | Yes	| No | Returns supported methods for a URL |
| TRACE 	| No	      | Yes	| Yes | Yes	| No | Echos retrieved request |
| PATCH  	| Yes	      | Yes	| No	| No	| No | Partial modification of resource |

`Safe` methods should only be used for information retrieval and should not change the server state.  
`Idempotent` methods means if two identical requests are made they should get an identical response.  
`Cacheable` means the client should be able to cache the response.  

###### Example HTTP Request  
```
POST /api/note HTTP/1.1
Host: api.example.com
Origin: www.example.com
Authorization: Bearer bHVsIHRoaXMgaXMgYSBmYWtlIHNlY3JldCB0b2tlbg==
Accept: application/json
Content-Type: application/json; charset=UTF-8
Content-Length: 58

{"title":"kata","content":"get 100 points on hacker rank"}
```

#### HTTP Response
A HTTP/1.1 response is also formatted in text and transferred using TCP. The first line of the response contains the `HTTP VERSION`, `STATUS CODE`, and `STATUS MESSAGE`. The following lines are the request headers and are formatted exactly the same way as the request headers. The header section of the request is terminated with an empty line. An optional body follows the header section.

###### Example HTTP Response
```
HTTP/1.1 200 OK
Date: Tue, 22 Aug 2017 06:34:16 GMT
Content-Type: application/json; charset=UTF-8
Content-Encoding: UTF-8
Content-Length: 82
Last-Modified: Mon, 21 Aug 2017 12:10:38 GMT
Server: Apache/1.3.3.7 (Unix) (Red-Hat/Linux)
ETag: "3f80f-1b6-3e1cb03b"
Connection: close

{"id":"1234123412341324","title":"kata","content":"get 100 points on hacker rank"}
```

### RESTful Routing Cheatsheets
Here's an excellent resource to remind yourself what RESTful routing should look
like for any resource in your application. A `resource` is a "thing" in your
application.

Consider setting up RESTful routes for a user to create, read, update and delete
their profile on a website.

#### Single-thing
<table><thead>
<tr>
<th>Action</th>
<th>HTTP Method</th>
<th>Url</th>
<th>HTML form?</th>
<th>CRUD</th>
</tr>
</thead><tbody>
<tr>
<td>SHOW</td>
<td>GET</td>
<td>/profile</td>
<td></td>
<td>READ</td>
</tr>
<tr>
<td>NEW</td>
<td>GET</td>
<td>/profile/new</td>
<td>Yes</td>
<td></td>
</tr>
<tr>
<td>CREATE</td>
<td>POST</td>
<td>/profile</td>
<td></td>
<td>CREATE</td>
</tr>
<tr>
<td>EDIT</td>
<td>GET</td>
<td>/profile/edit</td>
<td>Yes</td>
<td></td>
</tr>
<tr>
<td>UPDATE</td>
<td>PUT</td>
<td>/profile</td>
<td></td>
<td>UPDATE</td>
</tr>
<tr>
<td>DESTROY</td>
<td>DELETE</td>
<td>/profile</td>
<td></td>
<td>DELETE</td>
</tr>
</tbody></table>

#### Collections of Things
In the last example there's never an id provided to the server to tell it which
profile should be manipulated. In the previous case it's assumed there's only
one profile per user and the user's profile can be obtained via a cookie, session
or another authentication mechanic. Each user only has one profile.

Amazon has millions (billions?) of products. Products aren't associated 1:1
with users, they exist independently, yet they're all similar. RESTful routes
can add an `id` parameter to identify a unique element from an entire
collection. Study the table below to see how the `{id}` is parameterized into
the different route paths.

Notice the addition of the new INDEX route which returns a list of all objects
in the collection.

<table><thead>
<tr>
<th>Action</th>
<th>HTTP Method</th>
<th>Url Template</th>
<th>HTML form?</th>
<th>CRUD</th>
</tr>
</thead><tbody>
<tr>
<td>INDEX</td>
<td>GET</td>
<td>/products</td>
<td></td>
<td>Read</td>
</tr>
<tr>
<td>SHOW</td>
<td>GET</td>
<td>/products/{id}</td>
<td></td>
<td>Read</td>
</tr>
<tr>
<td>NEW</td>
<td>GET</td>
<td>/products/new</td>
<td>Yes</td>
<td></td>
</tr>
<tr>
<td>CREATE</td>
<td>POST</td>
<td>/products</td>
<td></td>
<td>Create</td>
</tr>
<tr>
<td>EDIT</td>
<td>GET</td>
<td>/products/{id}/edit</td>
<td>Yes</td>
<td></td>
</tr>
<tr>
<td>UPDATE</td>
<td>PUT</td>
<td>/products/{id}</td>
<td></td>
<td>Update</td>
</tr>
<tr>
<td>DESTROY</td>
<td>DELETE</td>
<td>/products/{id}</td>
<td></td>
<td>Destroy</td>
</tr>
</tbody></table>
