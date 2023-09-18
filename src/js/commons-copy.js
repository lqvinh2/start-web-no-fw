// Import Page.js

const loadContentPage = (page) => {
  const content = document.getElementById('content');
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      content.innerHTML = data;
    })
    .catch((error) => console.error(error));
};
const loadContentPartAsync = async (partId, partHTML) => {
  const content = document.getElementById(partId);

  if (!state.scripts) {
    state.scripts = []
  }

  try {
    const response = await fetch(partHTML);
    if (!response.ok) {
      console.error(`response is NOT ok`);
    }
    const data = await response.text();
    content.innerHTML = data;

    const scriptsAll = [...document.querySelectorAll('script')];
    const scriptsInPart = [...content.querySelectorAll('script')];

    // remove all script exist before S
    if (Array.isArray(scriptsAll) && Array.isArray(scriptsInPart)) {
      scriptsInPart.forEach((sPart) => {
        const scrRemove = scriptsAll.filter((x) => x.src === sPart.src);
        if (Array.isArray(scrRemove)) {
          scrRemove.forEach((s) => {
            s.remove();
          });
        }
      });
    } else {
      return;
    }
    // remove all script exist before E

    scriptsInPart.forEach((script) => {
      // if not add file scritp to page
      if (script.src) {

        const newScript = document.createElement('script');
        newScript.type = 'module';
        newScript.src = script.src;

        const srcInState = state.scripts.find(x => x.src === script.src)
        if (!srcInState) {
          state.scripts.push(newScript)
        }else {
          document.head.appendChild(srcInState);
          return
        }
        document.head.appendChild(newScript);

      } else if (script.textContent) {
        const newScript = document.createElement('script');
        newScript.textContent = script.textContent;
        document.head.appendChild(newScript);
      }
    });
  } catch (error) {
    console.error(error);
  }
};

export { loadContentPage, loadContentPartAsync };
