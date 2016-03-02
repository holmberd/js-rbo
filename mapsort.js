/**
 * Sorts JSON string list in descending order of number of times they occur
 * 
 * Dag Holmberg
 * https://github.com/holmberd
 */

var Sort = function() {
	this.listMap = new Map()
};

/**
 * sortes the genres and the number of times they occur 
 * @param  {json}
 * @return {map(string, number)}
 */
 Sort.prototype.mapSort = function(json){

	for (var i = 0, l = json.length; i < l; i++){
		for (var n = 0, v = json[i].items[n].length; n < v; n++){
			console.log(json[i].items[n].name);
			this.update(json[i].items[n].name);
		}
	}
	/* prior ES6 solution, instead of spread or Array.from
	*
	*  this.listMap.forEach(function(value, key) {
    	*     _arr.push([key, value]);
    	*	}, this.listMap);
	*
	*/
	var _arr = [...this.listMap]; //spread Map to 2D key-value array
	_arr = this.sortDesc(_arr); //sort key-value array
	this.listMap = new Map(_arr); //construct array to Map
	
	return this.listMap;
};

Sort.prototype.update = function(g){
	
	if (this.listMap.has(g)){
		var num = this.listMap.get(g);
		num++;
		this.listMap.set(g, num);
	}
	else {
		this.listMap.set(g, 1);
	}
};

/**
 * Sorts array numbers in descending order
 * @param  {2D key-value Array}
 * @return {2D key-value Array}
 */
Sort.prototype.sortDesc = function(a){

	var c = [];

	for (var i = 0, l = a.length; i < l; ++i)
	{
    	for (var j = i + 1, n = a.length; j < n; ++j)
    	{
        	if (a[i][1] < a[j][1])
        	{
            	c = a[i];
            	a[i] = a[j];
            	a[j] = c;
        	}
    	}
	}
	return a;
};

