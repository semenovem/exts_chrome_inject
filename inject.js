console.log('hello inject');



document.body.addEventListener('click', handedClipbord);

function handedClipbord(e) {
  if (document.getSelection().toString()) {
    document.execCommand('copy');
  }
}
