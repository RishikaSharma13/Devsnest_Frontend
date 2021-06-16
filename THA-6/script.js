//Q1

function is_array(p1) {
    return Array.isArray(p1);
  }
  
  console.log(is_array("w3resource"));
  console.log(is_array([1, 2, 4, 0]));
  
  //Q2
  function array_Clone(p1) {
    return p1.slice(0);
  }
  
  console.log(array_Clone([1, 2, 4, 0]));
  console.log(array_Clone([1, 2, [4, 0]]));
  
  //Q3
  
  function first(p1, n = 1) {
    if (n < 0) {
      return [];
    }
    return p1.slice(0, n);
  }
  
  console.log(first([7, 9, 0, -2]));
  console.log(first([], 3));
  console.log(first([7, 9, 0, -2], 3));
  console.log(first([7, 9, 0, -2], 6));
  console.log(first([7, 9, 0, -2], -3));
  
  //Q4
  
  myColor = ["Red", "Green", "White", "Black"];
  console.log(myColor.join());
  console.log(myColor.join());
  console.log(myColor.join("+"));
  
  //Q5 (1ST METHOD)
  var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
  let m = new Map();
  arr1.forEach((item) => {
    if (m[item]) {
      m[item]++;
    } else {
      m[item] = 1;
    }
  });
  
  for (const [keys, values] of Object.entries(m)) {
    let x = Object.values(m);
    if (values == Math.max(...x)) {
      console.log(keys + " (" + values + " times) ");
    }
  }
  
  //Q5 (2ND METHOD)
  
  var maximumf = 1;
  var x = 0;
  var item;
  
  for (var i = 0; i < arr1.length; i++) {
    for (var j = i; j < arr1.length; j++) {
      if (arr1[i] == arr1[j]) x++;
      if (maximumf < x) {
        maximumf = x;
        item = arr1[i];
      }
    }
  
    x = 0;
  }
  
  console.log(item + " (" + maximumf + " times) ");