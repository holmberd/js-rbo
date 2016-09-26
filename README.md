##rbo - An implementation of Rank-Biased Overlap in JavaScript

_RBO: Object Constructor holding the RBO-state calculation_:
```
@constructor
@param  {number} degree (0..1) of top-weightedness of the RBO metric
```
Example: `var rbo = new RBO(0.8);`

_RBO.calculate: Calculates similarity RBO_:
```
@param  {array, array} sorted ranked list arrays
@return {number} similarity RBO scores achieved
```
Example: `rbo.calculate(['a', 'b', 'c', 'd', 'e'],['b', 'a', 'g', 'h', 'e', 'k', 'l', 'c']));`

##License

Free to use and abuse under the MIT license.
http://www.opensource.org/licenses/mit-license.php
