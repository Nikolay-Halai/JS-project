import Component from '/js/views/component.js';

class Header extends Component {
    render() {
        const resource = this.request.resource;

        return new Promise(resolve => {
            resolve(`
            <header class="header">
                <a class="header-link ${!resource ? 'active' : ''}"  href="#/">
                    Start
                </a>
                <a class="header-link ${resource === 'calculator' ? 'active' : ''}" href="#/calculator">
                    Alcohol calculator
                </a>
                <a class="header-link ${resource === 'recipes' ? 'active' : ''}" href="#/recipes">
                    Cocktail recipes
                </a>
            </header>
            `);
        });
    }
}

export default Header;