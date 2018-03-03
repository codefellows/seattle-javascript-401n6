# Whiteboarding #1

## Problem:
Write a function called `contains()` that accepts a linked list and a value.
Return true if the value is in the linked list.

## Steps
[ ] Find a marker
[ ] Find some whiteboard space
[ ] Write down a **short** problem description
[ ] Draw a picture of the problem
[ ] Write some psuedo-code
[ ] Write your solution
[ ] Whiteboard Challenges
[ ] Take a picture
[ ] Create a repo to contain all your whiteboard solutions
[ ] Upload it to your repo
[ ] Show the picture on your README
[ ] Type up your solution
[ ] Submit the URL to the day's problem in your repo on canvas

## Reminders
Reminder, here's what a Linked List looks like. Your job in the whiteboard
problem isn't to create a linked list or write the class. Your only job is to
write the function that accepts the LinkedList as a parameter and searches for
the value inside it. This reminder is here just so you and the future
whiteboard interviewer agree on what the structure of the LinkedList actually
looks like.

```js
class ListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.root = null
  }
}
```

Here's a reminder of how to traverse through all the nodes in a LinkedList.
Set a reference to the root, the first thing in the list, then step through
the nodes one by one.

```js
let current = list.root
while (current) {
  current = current.next
}
```
