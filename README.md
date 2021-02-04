# RBO - Rank-Biased Overlap
Measures the overlap between the two lists at each position, while introducing a bias based on the rank so that a difference further in the lists is less important than at the top.

## Example
```js
const p = 0.8; // degree (0..1) of top-weightedness of the RBO metric
const rbo = new RBO(p);

const listA = ['a', 'b', 'c', 'd', 'e']; // sorted ranked list
const listB = ['b', 'a', 'g', 'h', 'e', 'k', 'l', 'c'];

const result = rbo.calculate(listA, listB); // returns the similarity score achieved
```

## Helpers

### RBO.calcWeight(p, d)
Calculates the weight of first `d` rankings with parameter `p` to help inform the choice of the parameter `p`.
```js
const p = 0.9; // degree (0..1) of top-weightedness of the RBO metric
const d = 10; // ranking
const pWeight = RBO.calcWeight(p, d);
```
