import izitoast from 'izitoast';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const refs = {
  formEl: document.querySelector('.form'),
  galleryEl: document.querySelector('.gallery'),
};

const handleFormSubmit = event => {
  event.preventDefault();
  const form = event.currentTarget;
  const searchQuery = form.elements.search_text.value.trim();

  if (!searchQuery) {
    izitoast.error({
      message: 'Please enter a search query',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();
  getImagesByQuery(searchQuery)
    .then(({ hits }) => {
      if (hits.length === 0) {
        izitoast.info({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      createGallery(hits);
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      izitoast.error({
        message: 'Failed to fetch images',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
};

refs.formEl.addEventListener('submit', handleFormSubmit);
