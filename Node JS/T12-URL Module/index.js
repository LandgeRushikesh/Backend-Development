import url from 'url'

// URL Object

const pathString = "https://www.google.com/search/?q=hello+world"
const urlObj = new URL(pathString)


console.log(urlObj);

// format() - 

console.log(url.format(pathString));

// import.meta.url - gives file URL
console.log(import.meta.url);

// fileURLToPath() -
console.log(url.fileURLToPath(import.meta.url));// just convert file url to path

// search -
console.log(urlObj.search);

// params object -
const params = new URLSearchParams(urlObj.search)


console.log(params.get('q'));
params.append('limit', '5')
console.log(params);

params.delete('limit')
console.log(params);

