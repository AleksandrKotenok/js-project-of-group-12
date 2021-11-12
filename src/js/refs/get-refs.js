export default function getRefs() {
  return {
    searchInputRef: document.querySelector('.header__search-form-input'),
    searchBtnRef: document.querySelector('.header__form-btn'),
    textError: document.querySelector('.header__search-error'),
    insertPoint: document.querySelector('.hero__list'),
    header: document.querySelector('#header'),
    homeLink: document.querySelector('#home-link'),
    libraryLink: document.querySelector('#library-link'),
    modalСardRef: document.querySelector('.modal-form__card'),
    overlayRef: document.querySelector('.overlay'),
    lightboxRef: document.querySelector('.lightbox'),
    clsBtnRef: document.querySelector('.modal-form__close-btn'),
    btnWatched: document.querySelector('#btn-watched'),
    btnQueue: document.querySelector('#btn-queue'),
    headerForm: document.querySelector('.header__form'),
    headerButton: document.querySelector('.header__button'),
    headerErrorRef: document.querySelector('.header__search-error'),
    spinnerRef: document.querySelector('.loading__spinner'),
    spinnerDotsRefs: document.querySelector('.loading__dots'),
    pageNumbersContainer: document.querySelector('.page__numbers--container'),
    nextBtn: document.querySelector('.page__btn--next'),
    prevBtn: document.querySelector('.page__btn--prev'),
    firstPageBtn: document.querySelector('.page__btn--first'),
    lastPageBtn: document.querySelector('.page__btn--last'),
    pageEllipsisStart: document.querySelector('.page__ellipsis--start'),
    pageEllipsisFinish: document.querySelector('.page__ellipsis--finish'),
    pagesContainer: document.querySelector('.page__container'),
    pageThree: document.querySelector('.page__number--three'),
    pageFour: document.querySelector('.page__number--four'),
    pageFive: document.querySelector('.page__number--five'),
    openFooterModalBtn: document.querySelector('[footer-modal-open]'),
    closeFooterModalBtn: document.querySelector('[footer-modal-close]'),
    footerModal: document.querySelector('[footer-modal]'),
    backdropRef: document.querySelector('.backdrop'),
    searchForm: document.querySelector('.js-search-form'),
    backToTopRef: document.querySelector('.back-to-top'),
  };
}
