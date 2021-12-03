import Component from '/js/views/component.js';

class Footer extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
            <footer class="footer">
                <p class="footer-info">
                    &copy; All Rights Reserved, 2021
                <img class="footer-img" src="/img/gluti.png" alt="picture">
                </p>
            </footer>
            `);
        });
    }
}

export default Footer;