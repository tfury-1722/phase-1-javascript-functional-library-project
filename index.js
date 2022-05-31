function myEach(collection, callback) {
    let tempArray;
    if (Array.isArray(collection)) {
        tempArray = collection
    } else {
        tempArray = Object.values(collection)
    }

  for (let index = 0; index < tempArray.length; index++) {
        callback(tempArray[index])
          
    }
    return collection;
}

function myMap(collection, callback) {
let newArray;
let tempArray = [];
if (Array.isArray(collection)) {
    newArray = collection
} else {
    newArray = Object.values(collection)
}

for (let index = 0; index < newArray.length; index++) {
    const result = callback(newArray[index])
      tempArray.push(result)
}
return tempArray
}

function myReduce(collection, callback, acc) {
    let newArray;
    if (Array.isArray(collection)) {
        newArray = collection.slice(0)
    } else {
        newArray = Object.values(collection)
    }
    
    if (acc === undefined) {
        acc = newArray.shift()
        newArray.forEach(value => {
            acc = callback(acc, value, collection)
        })
        // for (let i = 1; i < newArray.length; i++) {
        //     acc = callback(acc, newArray[i], collection)            
        // }
    } else {
        for (let i = 0; i < newArray.length; i++) {            
            acc = callback(acc, newArray[i], collection)            
        }
    }
    return acc;
}

function myFind(collection, predicate) {
    let found;
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            const element = collection[i];
            if (predicate(element)) {
                return element
            }
        }
    } else {
    if (typeof collection === 'object') {
        for (let j = 0; j < collection.length; j++) {
            const element = collection[j];
            if (predicate(element)) {
                return element
            } 
        }
    }    
    }
    return found
}


function myFilter(collection, predicate) {
    let truthyArray = [];
    if (Array.isArray(collection)) {
        truthyArray.push(collection.map((i,value,index) => {
            predicate(i) === true
            return predicate(i);
        }))
        
    } else {
    if (typeof collection === 'object') {
        let value = Object.keys(collection)
        truthyArray.push(value.map(i => predicate(i) === true))
    }    
    }
    return truthyArray;
}

function mySize(collection) {
    let countedItems = 0;
    if (Array.isArray(collection)) {
        for (const item of collection) {
            countedItems += 1
        }
    } else {
        for (const key in collection) {
           countedItems += 1
        }
    }
    return countedItems;
}

function myFirst(arr, n = []) {
    let earlyValue = [];
    if (typeof n === undefined && Array.isArray(arr)) {
        earlyValue.push(arr.slice(0,1))
    }
    if (typeof n === "number"){
        let value = arr.slice(0,`${n}`);
         earlyValue.push(value);
    }
    
    return earlyValue;
}

function myLast(arr, n = []) {
    if(Array.isArray(arr) && typeof n === undefined) {
        const lastItem = arr.pop()
    } else {
        const newArr = [];
        newArr.push(arr.pop() * `${n}`)
        return newArr;
    }
    return lastItem;
}

function myKeys(object) {
    const kNames = [];
    for (const key in object) {
        kNames.push(key)
    }
    return kNames;
}

function myValues(object) {
    const vNames = [];
    for (const key in object) {
        vNames.push(object[key])
    }
    return vNames;
}

// console.log(myFirst([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
// console.log(myFirst({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0 }))
//=> []
//=> [2]