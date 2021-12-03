import Component from '/js/views/component.js';


class Start extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
                <div class="start"> 
                    <h1 class="page-title">Welcome!</h1>                   
                    <p class="about=info">
                    On Rick and Morty's travels, it's always good to know what state Rick and you are in. <br> We will help you with this
                    </p>

                    <a class="about-btn-start button" href="#/calculator" title="after clicking we do not bear any responsibility :) good luck!">
                    push me and go to state definition
                    </a>

                    <p class="warning">
                    Attention!!! <br> This offer is for entertainment purposes only! <br> All the results are not accurate, all coincidences with reality are most likely accidental, and in general, <br> drinking a lot is harmful!
                    </p>
                </div>
            `);
        });
    }
}

    
export default Start;