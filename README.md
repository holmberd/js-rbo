## RBO - An implementation of Rank-Biased Overlap in JavaScript

#### RBO: Object Constructor holding the RBO-state calculation:

```javascript
@constructor
@param {number} p - degree (0..1) of top-weightedness of the RBO metric
```
Example: `var rbo = new RBO(0.8);`

#### RBO.calculate: Calculates similarity RBO:

```javascript
@function
@param {Array} s -  sorted ranked list
@param {Array} t - sorted ranked list
@return {number} similarity RBO scores achieved
```
Example: `rbo.calculate(['a', 'b', 'c', 'd', 'e'],['b', 'a', 'g', 'h', 'e', 'k', 'l', 'c']);`

#### RBO.calcWeight: Calculates the weight of first d rankings with parameter p

```javascript
@function calcWeight
@static
@param {number} p - degree (0..1) of top-weightedness of the RBO metric
@param {number} d - ranking
```
Example:
`RBO.calcWeight(0.9, 10);`
`helps inform the choice of the parameter p`

## License

Free to use and abuse under the MIT license.
http://www.opensource.org/licenses/mit-license.php
