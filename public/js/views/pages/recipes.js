import Component from '/js/views/component.js';

class Recipes extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
            <div class="recipes-bg"> </div>
            <div class="items">
                <div class="item">
                    <img src="/img/recipes/cat.png" alt="picture">
                    <div>
                        <h3>Shoney\’s Slammer</h3>
                        <p>Highball glass</p>
                        <ul>
                            <li>4 Mint Leaves</li>
                            <li>0.5 oz Simple Syrup</li>
                            <li>2 oz White Rum</li>
                            <li>1 oz Orange Juice</li>
                            <li>Fill Club Soda</li>
                        </ul>
                        <p>
                            Muddle mint leaves in the simple syrup. Add ice to the glass and pour rum and orange juice. Fill
                            with club soda.
                        </p>
                    </div>
                </div>
        
                <div class="item">
                  
                    <div>
                        <h3>What used to be Seattle</h3>
                        <p>Martini Glass</p>
                        <ul>
                            <li>2 oz Whiskey</li>
                            <li>0.5 oz Lime Juice</li>
                            <li>0.5 oz Lemon Juice</li>
                            <li>0.25 oz Simple Syrup</li>
                            <li>Splash IPA Beer</li>
                        </ul>
                        <p>
                            Add ingredients except for the IPA to a cocktail shaker with ice. Shake and strain into a martini
                            glass, and splash some IPA into the drink.
                        </p>
                    </div>
                </div>
        
                <div class="item">
                    <img src="/img/recipes/cucumberRik.png" alt="picture">
                    <div>
                        <h3>Pickle Rick!</h3>
                        <p>Martini Glass</p>
                        <ul>
                            <li>1.5 oz Whiskey</li>
                            <li>0.5 oz Dill Pickle Juice</li>
                            <li>1 oz Lemon Juice</li>
                        </ul>
                        <p>
                            Add ingredients to a cocktail shaker with ice. Shake and strain into a martini glass.
                        </p>
                    </div>
                </div>
        
                <div class="item">
                    
                    <div>
                        <h3>Rick Sanchez Tinkerer of Terror</h3>
                        <p>Martini Glass</p>
                        <ul>
                            <li>1.5 oz Tequila</li>
                            <li>1 oz Lemon Juice</li>
                            <li>0.75 oz Simple Syrup</li>
                            <li>0.5 oz Pomegranate Juice</li>
                            <li>Maraschino Cherry</li>
                        </ul>
                        <p>
                            Add ingredients to a cocktail shaker with ice. Shake and strain into a martini glass. Garnish with a
                            maraschino cherry.
                        </p>
                    </div>
                </div>
        
                <div class="item">
                    <img src="/img/recipes/misiks.png" alt="picture">
                    <div>
                        <h3>Take the Wormhole Out to Breakfast</h3>
                        <p>Old-Fashioned Glass</p>
                        <ul>
                            <li>1 oz Gin</li>
                            <li>1 oz Dry Vermouth</li>
                            <li>0.75 oz Tempus Fugit Gran Classico Bitter Spirits</li>
                            <li>1 Dash Orange Bitters</li>
                            <li>Mint Sprig</li>
                            <li>Lemon Wedge</li>
                        </ul>
                        <p>
                            Add ingredients to a cocktail shaker with ice. Shake and strain into an old-fashioned glass with
                            ice.
                        </p>
                    </div>
                </div>
        
                <div class="item">
                   
                    <div>
                        <h3>Sea-Cucumber!</h3>
                        <p>Martini Glass</p>
                        <ul>
                            <li>2 oz Hendricks Gin</li>
                            <li>0.75 oz Lime Juice</li>
                            <li>0.75 oz Simple Syrup</li>
                            <li>2 Cucumber Slices</li>
                            <li>2 Cilantro Leaves</li>
                            <li>Dash of Sea Salt</li>
                        </ul>
                        <p>
                            Lightly muddle cilantro and cucumber with simple syrup in a cocktail shaker. Fill cocktail shaker
                            with ice, add gin and lime juice. Shake and strain into a martini glass.
                        </p>
                    </div>
                </div>
        
                <div class="item">
                    <img src="/img/recipes/rikStupid.png" alt="picture">
                    <div>
                        <h3>The Creepy Morty</h3>
                        <p>Old-Fashioned Glass</p>
                        <ul>
                            <li>2 oz Whiskey</li>
                            <li>1 oz Triple Sec</li>
                            <li>1 oz Peach Schnapps</li>
                            <li>1 oz Sour Mix</li>
                        </ul>
                        <p>
                            Add ingredients to a cocktail shaker with ice. Shake and strain into an old-fashioned glass with
                            ice.
                        </p>
                    </div>
                </div>
        
                <div class="item">
                 
                    <div>
                        <h3>Red Head Magnet</h3>
                        <p>Old-Fashioned Glass</p>
                        <ul>
                            <li>1 oz Jägermeister</li>
                            <li>1 oz Schnapps</li>
                            <li>1 oz Chambord</li>
                        </ul>
                        <p>
                            Add ingredients to a cocktail shaker with ice. Shake and strain into an old-fashioned glass with
                            ice.
                        </p>
                    </div>
                </div>
        
                <div class="item">
                    <img src="/img/recipes/nap.png" alt="picture">
                    <div>
                        <h3>It’s Called a Hug, It Won’t Kill You</h3>
                        <p>Highball glass</p>
                        <ul>
                            <li>2 oz Tequila</li>
                            <li>1.5 oz Triple Sec</li>
                            <li>2 oz pomegranate juice</li>
                            <li>2 oz Lime Juice</li>
                            <li>1 oz Simple Syrup</li>
                        </ul>
                        <p>
                            Add ingredients to a cocktail shaker with ice. Shake and strain into an highball glass with ice.
                        </p>
                    </div>
                </div>
        
                <div class="item">
                   
                    <div>
                        <h3>Commander-in-Queef</h3>
                        <p>Highball glass</p>
                        <ul>
                            <li>1.5 oz White Rum</li>
                            <li>3 oz Grapefruit Juice</li>
                            <li>Salt</li>
                            <li>Sugar</li>
                            <li>2 Lime Wedges</li>
                        </ul>
                        <p>
                            Use one lime wedge to add salt and sugar to the rim of a highball glass. Add ice to the glass and
                            pour in rum and juice. Garnish with the remaining lime wedge.
                        </p>
                    </div>
                </div>
            </div>      
            `);
        });
    }
}


export default Recipes;