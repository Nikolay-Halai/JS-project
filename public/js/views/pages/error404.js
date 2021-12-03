import Component from '/js/views/component.js';

class Error404 extends Component {
    render() {
        return new Promise(resolve => {
            resolve(` 
            <div class="not-found" >             
                <h1 class="page-title">404 Error - Page Not Found</h1> 
            </div>              
            `);
        });
    }
}

export default Error404;