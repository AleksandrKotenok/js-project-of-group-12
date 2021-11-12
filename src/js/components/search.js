import getRefs from '../refs/get-refs';
import API from '../API/api-service';
import searchErr from './search-error';
import card from '../../handlebars/cardMovie.hbs';
const { searchInputRef, searchBtnRef, insertPoint, pagesContainer } = getRefs();
const api = new API();

import { startSpinner, stopSpinner } from './spinner.js';
import createCardData from './create-card-data';

searchBtnRef.addEventListener('click', onSearchInput);

async function onSearchInput(e) {
  if (!searchInputRef.value.trim()) return;

  initialReset();

  e.preventDefault();

  try {
    api._setQuery(searchInputRef.value);

    startSpinner();

    const data = await api.fetchMovieSearchQuery();
    const result = await data.results;

    const markup = await createCardData(result);

    if (!result.length) searchErr(true);

    insertPoint.insertAdjacentHTML('beforeend', card(markup));
    stopSpinner();
    pagesContainer.innerHTML = '';
  } catch (error) {
    console.error(error);
  }
}

function initialReset() {
  insertPoint.innerHTML = '';
  searchErr(false);
  api._setPage(1);
}
