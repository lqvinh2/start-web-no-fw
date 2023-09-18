import $ from 'jquery';


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
    content.innerHTML = '';
    $("#" + partId).append(data);
  } catch (error) {
    console.error(error);
  }
};

export { loadContentPage, loadContentPartAsync };
