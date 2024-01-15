const listener = "https://reddt-backend.onrender.com/";

export async function getPosts(mode) {
  const res = await fetch(listener + "posts/" + mode);
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
