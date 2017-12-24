export default function remove(obj, property: string) {
  for (let prop in obj) {
    if (prop === property) delete obj[prop];
    else if (typeof obj[prop] === 'object')
      remove(obj[prop], property);
  }
}