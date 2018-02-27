console.log('hello inject');



document.body.addEventListener('click', handedClipboard);

function handedClipboard() {
  if (document.getSelection().toString()) {
    document.execCommand('copy');
  }
}


//

function handlerKey(e) {
  if (e.code === 'Enter') {
    if (!e.metaKey && !e.shiftKey && !e.ctrlKey) {
      getElSrcListen().focus();
    }
    return;
  }
  if (e.key.length === 1) {
    if (document.activeElement !== getElSource()) {
      getElSource().focus();
    }
    return;
  }

  if (e.code === 'Backspace') {
    getElSource().focus();
  }
}


function getElSrcListen() {
  return document.getElementById('gt-src-listen');
}
function getElSource() {
  return document.getElementById('source');
}

function defLang(val) {
  if(/^[\w\d\s]$/i.test(val)) {
    return 'en';
  }
  if ( /^[а-яё\d\s]+$/i.test(val)) {
    return 'ru';
  }
  return null;
}

function getVal() {
  const val = location.hash.split('/')[2];
  return typeof val === 'string' ? val : '';
}

function getCurLang() {
  const val = location.hash.split('/')[0];
  return typeof val === 'string' ? val : '';
}

function setLangEn() {
  location.hash = `#en/ru/${getVal()}`;
}

function setLangRu() {
  location.hash = `#ru/en/${getVal()}`;
}

function handlerChangeLocationHash() {
  const lang = defLang(getVal());

  if(lang && lang !== getCurLang()) {
    switch(lang) {
      case 'en': setLangEn(); break;
      case 'ru': setLangRu(); break;
    }
  }
}

window.addEventListener('keydown', handlerKey);
window.addEventListener('hashchange', handlerChangeLocationHash);
location.hash = '#en/ru/';