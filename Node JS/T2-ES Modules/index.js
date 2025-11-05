// import { getPost } from "./postController.js";//if we haven't exported by default 
import getPost, { postsLength } from "./postController.js"; // when we export by default

console.log(getPost());
console.log(postsLength())

