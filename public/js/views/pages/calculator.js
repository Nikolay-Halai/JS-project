import Component from '/js/views/component.js';
import PlayOnClick from '/js/helpers/play-on-click.js';
import {description} from '/js/helpers/alcohol.js';

class Calculator extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
            <div class="wrapper">
                <form id="form">

                    <p>What\`s your gender?</p>
                    <div class="sex">
                        <label for="Man" data-component="play-on-click" data-sound="/sound/morti.mp3">
                            <img src="/img/morti.png" alt="man">
                            Man
                            <input type="radio" name="sex" value="0.70" id="Man" checked>
                        </label>

                        <label for="Woman" data-component="play-on-click" data-sound="/sound/sanders.mp3">
                            <img src="/img/sanders.png" alt="woman">
                            Woman
                            <input  type="radio" name="sex" value="0.60" id ="Woman">
                        </label>
                    </div>

                    <div class="weight">
                        <img src="/img/fat.png" alt="weight">
                        <label>
                            Your weight ?:
                            <input id="weight" type="text" name="weight">
                            <p class="error-message">indicate your weight, IN NUMBERS</p>
                        </label>                  
                    </div>

                    <div class="bevarages">
                        <label>
                            <a class="lin"  href="" >making a cocktail</a>
                            <select id="drinks" name="drinks">
                                <option value="">Chooise a drink</option>
                            </select>

                        <p class="error-message">Choose what you drink! I'm not a telepathic person</p>
                        </label>

                        <img src="img/rik.png" alt="drinks">
                        <select id="strenght" name="volume">
                            <option value="">How much did you drink?</option>
                        </select>
                    </div>
                    <button type="button" id="btn-calk">Drove</button>
                </form>
            </div>
            `);
        });
    }

    afterRender() {
        fetch('/options.json').then((response) => {
            response.json().then((data) => {
                this.setActions(data);
            });
        });
    }

    setActions(options) {
        PlayOnClick();

        const form = document.getElementById('form'),
            drinkSelect = document.getElementById('drinks'),
            volumeSelect = document.getElementById('strenght'),
            btn = document.getElementById('btn-calk');

        Object.keys(options).forEach((key) => {
            const optionNode = document.createElement('option');

            optionNode.value = key;
            optionNode.textContent = options[key].name;

            drinkSelect.appendChild(optionNode);
        });

        drinkSelect.addEventListener('change', (event) => {
            const drink = options[event.target.value];

            Array.from(volumeSelect.querySelectorAll('option')).forEach((el) => {
                if (el.value) {
                    volumeSelect.removeChild(el);
                }
            });

            if (drink) {
                Object.keys(drink.volumes).forEach((key) => {
                    const optionNode = document.createElement('option');

                    optionNode.value = key;
                    optionNode.textContent = drink.volumes[key];

                    volumeSelect.appendChild(optionNode);
                });

                volumeSelect.selectedIndex = 1;
            }

            Calculator.recipeLink();
        });

        drinks.onchange = () => {
            const drinks = form.drinks.options[0];
        };

        btn.addEventListener('click', () => {
            if (!Calculator.checkedValue()) return;

            const formData = new FormData(form),
                data = {};

            for (let entry of formData) {
                data[entry[0]] = entry[1];
            }

            alcoholCounting(+data.volume, +data.sex, +data.weight);
        });


        function alcoholCounting(volume, sex, weight) {
            const result = volume / (weight * sex);

            Calculator.showResult(description(result.toFixed(1)));
        }
    }

    static checkedValue() {
        let isValid = true;

        const weight = document.getElementById('weight'),
            drinks = document.getElementById('drinks'),
            weightConteiner = document.getElementsByClassName('weight')[0],
            drinksConteiner = document.getElementsByClassName('bevarages')[0],
            errorMessage = document.getElementsByClassName('error-message')[0];

        const wightValue = weight.value,
            drinksValue = drinks.value;

        if (!/^[0-9]+$/.test(wightValue) || wightValue === '') {
            isValid = false;
            weightConteiner.classList.add('error');
            errorMessage.classList.add('error');

        } else {
            weightConteiner.classList.remove('error');
            errorMessage.classList.remove('error');
        }

        if (drinksValue === '') {
            isValid = false;
            drinksConteiner.classList.add('error');
            errorMessage.classList.add('error');

        } else {
            drinksConteiner.classList.remove('error');
            errorMessage.classList.remove('error');
        }

        return isValid;
    }

    static showResult(content) {
        this.soundBtn();

        const modal = document.getElementById('modal-template').content.cloneNode(true),
            modalBtn = modal.querySelector('.modal-btn'),
            modalText = modal.querySelector('.modal-text');

        modalText.textContent = content;

        modalBtn.addEventListener('click', () => document.querySelector('.modal').remove());

        document.body.appendChild(modal);
    }

    static soundBtn() {
        const myAudio = new Audio;
        myAudio.src = '/sound/laba.mp3';
        myAudio.play();
    }


    static recipeLink() {
        const ricipc = document.getElementById('drinks').options[document.getElementById('drinks').selectedIndex].text,
            chek = new RegExp("[A-Z]", 'g'),
            link = document.getElementsByClassName('lin')[0];

        if (ricipc.match(chek).length >= 2) {
            link.classList.add('selected');
            link.href = "#/recipes";

        } else {
            link.classList.remove('selected');
        }
    }

}

export default Calculator;