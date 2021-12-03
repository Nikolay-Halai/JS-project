import {parseRequestURL} from '/js/helpers/utils.js';

import Header from '/js/views/partials/header.js';
import Footer from '/js/views/partials/footer.js';

import start from '/js/views/pages/start.js';
import Error404 from '/js/views/pages/error404.js';
import calculator from '/js/views/pages/calculator.js';
import recipes from '/js/views/pages/recipes.js';



const Routes = {
    '/': start,
    '/calculator': calculator,
    '/recipes': recipes,
};

function router() {

    const headerContainer = document.getElementsByClassName('header-container')[0],
          contentContainer = document.getElementsByClassName('content-container ')[0],
          footerContainer = document.getElementsByClassName('footer-container')[0],
          header = new Header(),
          footer = new Footer();

    header.render().then(html => headerContainer.innerHTML = html);

    const request = parseRequestURL(),
        parsedURL = `/${request.resource || ''}`,
        page = Routes[parsedURL] ? new Routes[parsedURL]() : new Error404();

    page.render().then(html => {
        contentContainer.innerHTML = html;
        page.afterRender();       
    });

    footer.render().then(html => footerContainer.innerHTML = html);
    
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);