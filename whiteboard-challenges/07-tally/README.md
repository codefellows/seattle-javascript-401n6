# Tally
Write a function called `tally` that accepts a string
and returns the most frequently used word in the string.

Assume the string your given is all lowercase, contains
no punctuation and each word is seperated by exactly one
space.

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
