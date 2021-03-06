export function getAllsMemesLast() {
  const memes = JSON.parse(localStorage.getItem("memes"));
  return memes?.reverse() || [];
}

function checkLengthLastMemes() {
  const memes = getAllsMemesLast();
  return memes.length >= 5;
}

export default function addLastMeme(meme) {
  const memes = getAllsMemesLast() || [];
  if (checkLengthLastMemes()) {
    memes.shift();
  }
  
  memes.push(meme);
  localStorage.setItem("memes", JSON.stringify(memes));
}
