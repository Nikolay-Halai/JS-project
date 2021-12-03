import {parseRequestURL} from '/js/helpers/utils.js';

class Component {
    constructor() {
        this.request = parseRequestURL();       
    }

    afterRender() {}
}

export default Component;