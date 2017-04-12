# Dactyle.js

A **typewriter** in JavaScript.


## Installation

Just download Dactyle.js and put it in your scripts directory.
Then, in your HTML, call Dactyle in your `<head>` :

    <script src="path/to/Dactyle.js"></script>

Now, you have to define the text Dactyle will type in a, HTML tag :

    <div id="idOfTheTextDactyleWillType">
        This text will be typed by Dactyle ! :)
    </div>

You can put this text in any HTML element, with any ID you want to use. Just care about this element can be selected easily in JavaScript.

You can make this element invisible for the user if you want.

Then, Dactyle need another HTML element, the one which it will type the text :

    <div id="idOfTheTarget"></div>

Now, you have to initialize Dactyle in a JS file :

    let dactyleInstance = new Dactyle (
        '#idOfTheTarget',
        document.querySelector('#idOfTheTextDactyleWillType').innerHTML,
    );

    // Then, tell me to type the text :
    dactyleInstance.type();


### Explanations

Dactyle just need those two arguments. You can put more arguments, look :

This is the list of arguments which are supported by Dactyle :

1. **Target**

    This is the HTML element where Dactyle will type the text.
    Send any string which can be selected by querySelector().

2. **Text**

    The text Dactyle will type. It can be include in a HTML element (like in this example), or directly in Dactyle's initialisation.

3. **Minimum speed**

    The minimum delay between 2 characters (in ms). Default is `50`.

4. **Maximum speed**

    The maximum delay between 2 characters (in ms). Default is `150`.

5. **HTML tags support**

    A boolean which determined if Dactyle has to support HTML tags or not. Default is `true`.


## TODO

* [ ] Add a cursor after the text
