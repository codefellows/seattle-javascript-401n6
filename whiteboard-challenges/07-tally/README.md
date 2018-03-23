# Tally
Write a function called `tally` that accepts a string
and returns the most frequently used word in the string.

Assume the string your given is all lowercase, contains
no punctuation and each word is seperated by exactly one
space.

If you were given good input for the last verse of The Twelve Days
of Christmas your function should return `"a"` because `"a"` is
the word that appears the most in this verse:

```
On the twelfth day of Christmas
my true love sent to me:
12 Drummers Drumming
11 Pipers Piping
10 Lords a Leaping
9 Ladies Dancing
8 Maids a Milking
7 Swans a Swimming
6 Geese a Laying
5 Golden Rings
4 Calling Birds
3 French Hens
2 Turtle Doves
and a Partridge in a Pear Tree
```

# Stretch Goal
Add a second parameter to your function called `stopWords`.
"Stop Words" are words programs ignore when they're dealing
with text and Natural Language Processing (NLP). Stop Words
make the program Stop paying attention to commond words that
appear a lot, like "the", "of", "a", "and" and so on.

Modify your tally function so it stops talling any word
in the list of stop words.

```
let phrase = 'the the the crow flew higher and higher';
let mostFrequentWord = tally(phrase, ['the']);
```

`mostFrequentWord` in this example should be `"higher"` because
it appeared twice and the three `"the"` words were ignored.
