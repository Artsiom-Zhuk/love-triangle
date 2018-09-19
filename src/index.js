/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var i,i1,i2,n,k,n1,k1,n2,k2,count = 0;
  for(i=0; i<preferences.length; i++){
  		n = i+1;
  		k = preferences[i];
  		n1 = k;
  		i1 = n1 - 1;
  		k1 = preferences[i1]
  		n2 = k1;
  		i2 = n2 - 1;
  		k2 = preferences[i2];

  		if (k2 === n && n!==k){
  			count++;
  		}
  	}

  	return count/3;
};
