const fruit = ['orange', 'apple', 'mango', 'coconut', 'apple'];
console.log(`Fruit array content: ${fruit} \n`);

(function() {
 // indexOf and lastIndexOf 
 let firstIndex = fruit.indexOf('apple');
 let lastIndex = fruit.lastIndexOf('apple');
 console.log(`indexOf apple is ${firstIndex}`);
 console.log(`lastIndexOf apple is ${lastIndex} \n`);
}());

(function() {
  // every()
  function isString(value, index, array) {
    return typeof value === 'string';
  };
  function isLengthOne(value, index, array) {
    return value.length === 1;
  };

  console.log(`every()`)

  const resultString = fruit.every(isString);
  console.log(`All in fruit are type of string: ${resultString}`);

  const resultLength = fruit.every(isLengthOne);
  console.log(`Are there elements in fruit with length of one: ${resultLength} \n`);  

}());

(function() {
  // some()
  function startsWithC(value, index, array) {
    return value[0] === 'c';
  };

  console.log(`some()`)
  
  const result = fruit.some(startsWithC);
  console.log(`Are there any elements that starts with the letter c: ${result} \n`);

}());

(function() {
  // filter()
  function startsWithOM(value, index, array) {
    return value[0] === 'o' || value[0] === 'm'
  };

  console.log(`filter()`);

  const result = fruit.filter(startsWithOM);
  console.log(`Elements that starts with the letters o or m: ${result} \n`);
  
}());


(function() {
  // forEach() 
  console.log(`forEach()`);
  
  function doSomething(value, index, array) {
    console.log(value);
  };

  fruit.forEach(doSomething);

}());

(function() {
  // map()
  console.log('\n');
  console.log(`map()`);

  function doSomething(value, index, array) {
    return 'We like ' + value;
  };

  const result = fruit.map(doSomething);
  console.log(result)
  
}());