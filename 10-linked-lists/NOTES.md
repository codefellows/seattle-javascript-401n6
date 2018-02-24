## Manipulating Lists with Temporary Variables
Sometimes you need to save a node to a temporary variable to make sure you
don't lose reference to it.

```
list -> 12 -> 88 -> 73 -> 98
list -> 88 -> 12 -> 73 -> 98

temp = list.next            // store a reference to 88
list.next = list.next.next  // jumps the 12 over 88 to 73
                            // 88 would be lost if not for temp
temp.next = list
list = temp
```

## Manipulate .next Points, Don't Copy Data
You should strive to manipulate the order of a list my changing the values
stored in pointers. Don't try to copy the data.

Although we're just storing integer data now it's possible a Linked List could
contain a large 10GB file! It's much more efficient to rearrange a list by
manipulating the references than by copying 10GB of data.

Compare this understanding with moving a large file around your computer. Your
operating system probably moves files smartly and just rearranges it's
own references of where files are stored. If you chose to copy a file, however,
the computer is forced to actually copy all of the data to a new location and
the operation will take longer.

```
// BAD: this changes the data
// it's better to manipulate the .next references
temp = list.next.data;
list.next.data = list.data;
list.data = temp;
```

## Possible Linked List Challenges
- determine if a linked list is sorted
- determine if a linked list contains dupes
- determine if a linked list has a cycle/loop
- reverse a linked list
- insert a new value into a linked list
- remove a value from a linked list
- build a sorted list out of a linked list
  - build a custom insert method
    that searches for the proper spot when adding


## LinkedList vs Array
* Which is faster?
* Depends what you're doing!
* They have different time complexities for different operations.


### Arrays
* O(1) read  a[i]
* O(1) write a[i] = 42
* O(N) removing from middle and compressing
* O(N) inserting in middle and scooting to make room

### Linked Lists
* O(1) add to front
* O(N) reading at index
* O(1) remove from front

