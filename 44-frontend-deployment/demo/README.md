# ![CF](http://i.imgur.com/7v5ASc8.png) Pagination 

* Write a script that reads `movie_titles.csv`, parses it and populates
  a MongoDB database.
* Write a server endpoint that returns movies
  * `?q=` The endpoint should be queryable by title
  * `?min=` The endpoint should be queryable by min-year
  * `?max=` The endpoint should be queryable by max-year
  * `?count=` The endpoint should return results 100 at time
  * `?page=` The endpoint should support pagination
