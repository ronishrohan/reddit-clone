const listener = "http://localhost:3000/posts/"

export async function getPosts(){
    const res = await fetch(listener);
    const data = await res.json();
    
    return data;
}