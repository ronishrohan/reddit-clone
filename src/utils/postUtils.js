const listener =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/"
    : "https://reddt-backend.onrender.com/";

export async function getPosts(mode, subreddit, skip) {
  console.log(listener + `posts/${mode}/${subreddit}`);
  const res = await fetch(listener + `posts/${mode}/${skip}/${subreddit}`);
  const data = await res.json();

  return data;
}

export async function createPost(data) {
  await fetch(listener + "posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    
  
}
export async function updateVotes(data) {
  await fetch(listener + "posts/vote", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  })
    .then((response) => response.json())

    .then((data) => console.log(data))

    .catch((error) => console.log(error));
}
export async function getPost(subreddit, user, slug) {
  const res = await fetch(listener + `posts/get/${subreddit}/${user}/${slug}`);
  const data = await res.json();
  return data;
}

export const createUser = async (data) => {

  const response = await fetch(listener + `users/add`, {

    method: 'POST',

    headers: {

      'Content-Type': 'application/json'

    },

    body: JSON.stringify(data)

  });

  const res = await response.json();

  console.log(res);

};
