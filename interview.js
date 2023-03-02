
//getByValue
const getValue = (obj, path) => path
    .replace(/\[([^[\]]*)]/g, '.$1.')
    .split('.')
    .filter(prop => prop !== '')
    .reduce((prev, next) => (
        prev instanceof Object ? prev[next] : undefined
    ), obj);

getValue({ a: { b: { c: 'd' } } }, 'a.b.c'); // = d
getValue({ a: { b: { c: [1, 2] } } }, 'a.b.c[1]'); // = 2


//clamp
const clamp = (min, max, value) => {
    if (min > max) throw new Error('min cannot be greater than max');
    return value < min
      ? min
      : value > max
        ? max
        : value;
  }
  
  clamp(0, 10, -5); // = 0
  clamp(0, 10, 20); // = 10


  //SLEEP
  const sleep = async (duration) => (
    new Promise(resolve =>
      setTimeout(resolve, duration)
    )
  );
  
  await sleep(1000); // waits 1 sec

  //GROUP_BY
  const groupBy = (fn, list) => (
    list.reduce((prev, next) => ({
      ...prev,
      [fn(next)]: [...(prev[fn(next)] || []), next]
    }), {})
  );
  
  groupBy(vehicle => vehicle.make, [
    { make: 'tesla', model: '3' },
    { make: 'tesla', model: 'y' },
    { make: 'ford', model: 'mach-e' },
  ]);
  
  // { 
  //   tesla: [ { make: 'tesla', ... }, { make: 'tesla', ... } ],
  //   ford: [ { make: 'ford', ... } ],
  // }

  //

  //collect_By
  import groupBy from './groupBy';

const collectBy = (fn, list) => 
  Object.values(groupBy(fn, list));

collectBy(vehicle => vehicle.make, [
  { make: 'tesla', model: '3' },
  { make: 'tesla', model: 'y' },
  { make: 'ford', model: 'mach-e' },
]);

// [ 
//   [ { make: 'tesla', ... }, { make: 'tesla', ... } ],
//   [ { make: 'ford', ... } ],
// ]

//HEAD
const head = list => list[0];

head([1, 2, 3]); // = 1
head([]); // = undefined

//TAIL
const tail = list => list.slice(1);

tail([1, 2, 3]); // = [2, 3]
tail([]); // = []

//FLATTEN


const flatten = list => list.reduce((prev, next) => ([
    ...prev,
    ...(Array.isArray(next) ? flatten(next) : [next])
  ]), []);
  
  flatten([[1, 2, [3, 4], 5, [6, [7, 8]]]]); // = [1, 2, 3, 4, 5, 6, 7, 8]

  //INTERSECTION_BY
const intersectionBy = (fn, listA, listB) => {
    const b = new Set(listB.map(fn));
    return listA.filter(val => b.has(fn(val)));
  };
  
  intersectionBy(v => v, [1, 2, 3], [2, 3, 4]); // = [2, 3]
  intersectionBy(v => v.a, [{ a: 1 }, { a: 2 }], [{ a: 2}, { a: 3 }, { a: 4 }]); // = [{ a: 2 }];

//INDEX_BY
const indexBy = (fn, list) =>
  list.reduce((prev, next) => ({
    ...prev,
    [fn(next)]: next
  }), {});
              
indexBy(val => val.a, [{ a: 1 }, { a: 2 }, { a: 3 }]); 
// = { 1: { a: 1 }, 2: { a:2 }, 3: { a: 3 } }

//Difference_By

import indexBy from './indexBy';

const differenceBy = (fn, listA, listB) => {
  const bIndex = indexBy(fn, listb);
  return listA.filter(val => !bIndex[fn(val)]);
};

differenceBy(val => val, [1,2,3], [3,4,5]); // = [1,2]
differenceBy(
  vehicle => vehicle.make, 
  [{ make: 'tesla' }, { make: 'ford' }, { make: 'gm' }], 
  [{ make: 'tesla' }, { make: 'bmw' }, { make: 'audi' }], 
); // = [{ make: 'ford' }, { make: 'gm' }]

//RECOVER_WITH
const recoverWith = async (defaultValue, fn, ...args) => {
    try {
      const result = await fn(...args);
      return result;
    } catch (_e) {
      return defaultValue;
    }
  }
  
  recoverWith('A', val => val, 'B'); // = B
  recoverWith('A', () => { throw new Error() }); // = 'A'

  //Distance
  const distance = ([x0, y0], [x1, y1]) => (
    Math.hypot(x1 - x0, y1 - y0)
  );
  
  distance([0, 1], [5, 4]); // = 5.8309518948453


  //Drop While
const dropWhile = (pred, list) => {
    let index = 0;
    list.every(elem => {
      index++;
      return pred(elem);
    });
    return list.slice(index-1);
  }
  
  dropWhile(val => (val < 5), [1,2,3,4,5,6,7]); // = [5,6,7]  

//Sum By
const sumBy = (fn, list) =>
  list.reduce((prev, next) => prev + fn(next), 0);

sumBy(product => product.price, [
  { name: 'pizza', price: 10 }, 
  { name: 'pepsi', price: 5 },
  { name: 'salad', price: 5 },
]); // = 20


//Ascending

const ascending = (fn) => (a, b) => {
    const valA = fn(a);
    const valB = fn(b);
    return valA < valB ? -1 : valA > valB ? 1 : 0;
  }
  
  const byPrice = ascending(val => val.price);
  [{ price: 300 }, { price: 100 }, { price: 200 }].sort(byPrice); 
  // = [{ price: 100 }, { price: 200 }, { price: 300 }]

//Desending
const descending = (fn) => (a, b) => {
    const valA = fn(b);
    const valB = fn(a);
    return valA < valB ? -1 : valA > valB ? 1 : 0;
  }
  
 byPrice = descending(val => val.price);
  [{ price: 300 }, { price: 100 }, { price: 200 }].sort(byPrice); 
  // = [{ price: 300 }, { price: 200 }, { price: 100 }]


//find by Key
const findKey = (predicate, index) => Object
  .keys(index)
  .find(key => predicate(index[key], key, index));

findKey(
  car => !car.available,
  {
    tesla: { available: true },
    ford: { available: false },
    gm: { available: true }
  },
); // = "ford"


//Bifurcate By
const bifurcateBy = (predicate, list) =>
  list.reduce((acc, val, i) => (
    acc[predicate(val, i) ? 0 : 1].push(val), acc), 
    [[], []]
  );
  
bifurcateBy(val => val > 0, [-1, 2, -3, 4]); 
// = [[2, 4], [-1, -3]]

//Pipe
const pipe = (functions, ...args) => (
    functions.reduce(
      (prev, next) => Array.isArray(prev) ? next(...prev) : next(prev),
      args
    )
  );
  pipe([Math.abs, Math.floor, val => -val], 4.20); // = -4
  pipe([(a, b) => a - b, Math.abs], 5, 10); // = 5