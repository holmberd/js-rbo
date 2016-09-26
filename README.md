<<<<<<< HEAD
##RBO - An implementation of Rank-Biased Overlap in JavaScript
||||||| merged common ancestors
# rbo

An implementation of Rank-Biased Overlap in JavaScript
=======
##rbo - An implementation of Rank-Biased Overlap in JavaScript
>>>>>>> 6c48092e1f835b16de6677b1c6f67bdbcc39bd69

<<<<<<< HEAD
_RBO: Object Constructor creates a new RBO state calculation_:
```
@constructor
@param  {number} degree (0..1) of top-weightedness of the RBO metric
```
Example: `var rbo = new RBO(0.8);`
||||||| merged common ancestors
=======
_RBO: Object Constructor holding the RBO-state calculation_:
```
@param  {number} degree of top-weightedness of the RBO metric
```
Example: `var rbo = new RBO(0.8);`
>>>>>>> 6c48092e1f835b16de6677b1c6f67bdbcc39bd69

<<<<<<< HEAD
_RBO.calculate: Calculates similarity RBO_:
```
@param  {array, array} sorted ranked list arrays
@return similarity RBO scores achieved
```
Example: `rbo.calculate(['a', 'b', 'c', 'd', 'e'],['b', 'a', 'g', 'h', 'e', 'k', 'l', 'c']));`
||||||| merged common ancestors
# mapsort
=======
_RBO.calculate: Calculates similarity RBO_:
```
@param  {array, array} sorted ranked list arrays
@return {function} extrapolated calculation
 		--> @return similarity RBO scores achieved
```
Example: `rbo.calculate(['a', 'b', 'c', 'd', 'e'],['b', 'a', 'g', 'h', 'e', 'k', 'l', 'c']));`
>>>>>>> 6c48092e1f835b16de6677b1c6f67bdbcc39bd69

## mapsort - Sorts a JSON string list, in descending order, based on the number of times they occur.
```
@param: JSON.items[string]
@return: Map(key,value)
```

##License

Free to use and abuse under the MIT license.
http://www.opensource.org/licenses/mit-license.php
