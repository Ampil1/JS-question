function flattenObject(obj) {
    const result = [];
    
    for (const key in obj) {
      const value = obj[key];
      
      if (typeof value === 'object' && value !== null) {
        result.push(...flattenObject(value));
      } else {
        result.push(value);
      }
    }
    
    return result;
  }

  const nestedObject = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  };
  
  const flattenedArray = flattenObject(nestedObject);
  console.log(flattenedArray); // [1, 2, 3, 4]