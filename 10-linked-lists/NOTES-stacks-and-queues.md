 13 Stacks and Queues
======================
If we constrain ourselves to only being allowed to perform
certain operations then we can build data structures that
solve specific problems with extreme efficiency.

By not allowing ourselves to access or modify things in
the middle of an array or a LinkedList we gain constant-time
function access words and stuff.

Stack
  O(1) push()
  O(1) pop()

Queue
  O(1) enqueue
  O(1) dequeue

Linked List Challenge:
write a function called isSorted that accepts a linked list as
a parameter and returns true if the linked list is sorted in
ascending order

an empty or single item list should be considered sorted.
because it's not not sorted.

stretch goal: return true if it's either ascending or descending

function isSorted(arr) {
  if (arr.length <= 1) {
    return true;
  }


  for (let i = 1; i < arr.length; i++) {
    // if the one on the left is bigger than the one
    // on the right: then it's not sorted ascending
    if (a[i - 1] >= a[i]) {
      return false;
    }
  }
  return true;
}


let current = list.root
while (current) {
  current = current.next
}
