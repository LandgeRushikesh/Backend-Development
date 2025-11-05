const posts = [
    { id: 1, title: "post 1" },
    { id: 2, title: "post 2" },
]

// 1st way
// export const getPost = () => posts;

// 2nd way
// const getPost = () => posts;
// export { getPost }; 

// 3rd way --> exporting by default
const getPost = () => posts;

// we can export other function also when we are exporting one function as a default
export const postsLength = () => posts.length;

export default getPost;
