// TEMPORARY DATA
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

const posts = [
  {
    id: 1,
    userId: 1,
    title: "Hello, World!",
    body: "This is my first post",
  },
  {
    id: 2,
    userId: 2,
    title: "Hello, Again!",
    body: "This is my second post",
  },
];

export const getPosts = async () => {
  return posts;
};

export const getPost = async (id) => {
  const post = posts.find((post) => post.id === parseInt(id));
  return post;
};

export const getUser = async (id) => {
  return users.find((user) => user.id === parseInt(id));
};
