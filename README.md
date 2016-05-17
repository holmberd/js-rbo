# rbo

An implementation of Rank-Biased Overlap in JavaScript

```
 * Object Constructor holding the RBO-state calculation
 * @param  {number} degree of top-weightedness of the RBO metric
 ex: var rbo = new RBO(0.8);

 * Calculates similarity RBO 
 * @param  {array, array} sorted ranked list arrays
 * @return {function} extrapolated calculation
 * 		--> @return similarity RBO scores achieved
 ex: rbo.calculate(['a', 'b', 'c', 'd', 'e'],['b', 'a', 'g', 'h', 'e', 'k', 'l', 'c']));
 
# mapsort

Sorts a JSON string list, in descending order, based on the number of times they occur.
```
@param: JSON.items[string]
@return: Map(key,value)
```

#License

Free to use and abuse under the MIT license.
http://www.opensource.org/licenses/mit-license.php
