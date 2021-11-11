import './sass/main.scss';
import './js/components/search';
import './js/components/home';
import './js/components/pages';
import './js/components/modal';
import './js/components/library';
import API from './js/API/api-service';

const api = new API();
import './js/components/footer-modal.js';
import { addBackToTop } from 'vanilla-back-to-top';
addBackToTop({ scrollDuration: 500 });
