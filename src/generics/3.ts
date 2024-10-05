function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
    return Object.assign({},objA, objB);
}
    const object1 = { name: 'Max', age: 30 };
const object2 = { city: 'New York', country: 'USA' };

const mergedObject = merge(object1, object2);
console.log(mergedObject);
