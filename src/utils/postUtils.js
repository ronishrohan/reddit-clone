const listener = "https://red-modern-cygnet.cyclic.app/"

export async function getPosts(){
    const res = await fetch(listener+"posts");
    const data = await res.json();
    
    return data;
}