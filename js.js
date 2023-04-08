const cardText = document.querySelector('.card-text');
const fullTextBtn = document.querySelector('#show-full-text-btn');
const fullTextContent = document.querySelector('#full-text-content');
const truncatedText = cardText.textContent.substr(0, 100) + '...';

if (cardText.textContent.length > 100) {
  const truncatedText = cardText.textContent.substr(0, 100) + '...';
  cardText.textContent = truncatedText;
  fullTextContent.textContent = cardText.dataset.fullText;
  fullTextBtn.classList.remove('d-none');
}

fullTextBtn.addEventListener('click', () => {
  fullTextContent.textContent = cardText.dataset.fullText;
  const fullTextModal = new bootstrap.Modal(document.querySelector('#full-text-modal'), {});
  fullTextModal.show();
});

const cardText1 = document.querySelector('.card-text-1');
const fullTextBtn1 = document.querySelector('#show-full-text-btn-1');
const fullTextContent1 = document.querySelector('#full-text-content-1');
const truncatedText1 = cardText.textContent.substr(0, 100) + '...';

if (cardText1.textContent.length > 100) {
  const truncatedText1 = cardText1.textContent.substr(0, 100) + '...';
  cardText1.textContent = truncatedText1;
  fullTextContent1.textContent = cardText.dataset.fullText;
  fullTextBtn1.classList.remove('d-none');
}

fullTextBtn1.addEventListener('click', () => {
  fullTextContent1.textContent = cardText1.dataset.fullText;
  const fullTextModal = new bootstrap.Modal(document.querySelector('#full-text-modal-1'), {});
  fullTextModal.show();
});


const cardText2 = document.querySelector('.card-text-2');
const fullTextBtn2 = document.querySelector('#show-full-text-btn-2');
const fullTextContent2 = document.querySelector('#full-text-content-2');
const truncatedText2 = cardText.textContent.substr(0, 100) + '...';
if (cardText2.textContent.length > 100) {
  const truncatedText2 = cardText2.textContent.substr(0, 100) + '...';
  cardText2.textContent = truncatedText2;
  fullTextContent2.textContent = cardText2.dataset.fullText;
  fullTextBtn2.classList.remove('d-none');
}

fullTextBtn2.addEventListener('click', () => {
  fullTextContent2.textContent = cardText2.dataset.fullText;
  const fullTextModal = new bootstrap.Modal(document.querySelector('#full-text-modal-2'), {});
  fullTextModal.show();
});

const cardText3 = document.querySelector('.card-text-3');
const fullTextBtn3 = document.querySelector('#show-full-text-btn-3');
const fullTextContent3 = document.querySelector('#full-text-content-3');
const truncatedText3 = cardText.textContent.substr(0, 100) + '...';
if (cardText3.textContent.length > 100) {
  const truncatedText3 = cardText3.textContent.substr(0, 100) + '...';
  cardText3.textContent = truncatedText3;
  fullTextContent3.textContent = cardText3.dataset.fullText;
  fullTextBtn3.classList.remove('d-none');
}

fullTextBtn3.addEventListener('click', () => {
  fullTextContent3.textContent = cardText3.dataset.fullText;
  const fullTextModal = new bootstrap.Modal(document.querySelector('#full-text-modal-3'), {});
  fullTextModal.show();
});