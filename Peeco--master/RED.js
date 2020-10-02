const tag = (type, opt = {}) => {
    const t = document.createElement(type);

    if (opt.className)
        t.classList.add(opt.className);

    if (opt.href)
        t.setAttribute('href', opt.href);

    if (opt.innerText)
        t.innerText = opt.innerText;

    return t;
}
async function main() {
    const response = await fetch(`https://www.reddit.com/r/memes/.json`);
    const obj = await response.json();

    console.log(obj);
    const post = obj.data.children[Math.floor(Math.random() * obj.data.children.length)];
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    const postImage = document.createElement('img');
    postImage.id="meme";
    postImage.src=post.data.url;
    postDiv.appendChild(postImage);
    document.getElementById("meme2").appendChild(postDiv);  //ca fait apparaitre au moment ou il y a une balise div avec un id meme2x   
    

}

main();