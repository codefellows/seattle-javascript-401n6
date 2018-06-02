# K Nearest Neighbors
Write a function that accepts a list of objects, an integer `K`, and another
object.  Each object in the list has three properties. The "another" object
does not have a label. It's your job to determine it's label.

```js
{
  x,
  y,
  label
}
```

Calculate the `K` closest points from the list closest to the another object.
Return the most common label from those points. The “another” object does not have a label. It’s your job to determine it’s label.

Distance formula:
Math.sqrt( (x1 - x2)^2 + (y1 - y2)^2 )

You may use [].sort()
