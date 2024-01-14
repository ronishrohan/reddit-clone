const listener = "https://red-modern-cygnet.cyclic.app/"

export async function getPosts(){
    const res = await fetch(listener+"posts");
    const data = await res.json();
    
    return data;
}

export async function createPost(data){
    fetch(listener + "posts", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
}