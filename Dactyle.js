class Dactyle {

    constructor (target, text, minSpeed, maxSpeed, htmlSupport) {
        this.targetQuery = target;
        this.target = document.querySelector(target);
        this.text = text;
        this.table = this.setTable(this.text);
        this.minSpeed = minSpeed || 50;
        this.maxSpeed = maxSpeed || 150;
        this.iteration = 0;
        this.htmlSupport = htmlSupport || true;
        this.createCursor();
    }

    type () {
        let timeoutID = setTimeout(_ => {
            if (this.htmlSupport) {
                if (this.table[this.iteration].endsWith('<')) {
                    do {
                        this.iteration++;
                    } while (!this.table[this.iteration].endsWith('>'));
                }
                this.target.innerHTML = this.table[this.iteration];
            } else {
                this.target.textContent = this.table[this.iteration];
            }

            this.iteration++;
            if (this.iteration === this.table.length) {
                clearTimeout(timeoutID);
            } else {
                this.type();
            }
        }, this.getRandomSpeed());
    }



    setTable (text) {
        let table = [];
        for (let i = 0; i < text.length; i++) {
            table.push(text.substring(0, i+1));
        }
        return table;
    }

    getRandomSpeed() {
        return Math.floor(Math.random() * (this.maxSpeed - this.minSpeed)) + this.minSpeed;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    createCursor() {
        let style = document.createElement('style');
        let style2 = document.createElement('style');
        let sheet = style2.sheet;

        document.head.appendChild(style);
        document.head.appendChild(style2);

        style.innerHTML = `@keyframes blink {
            0%   { opacity: 1; }
            50%  { opacity: 0; }
            100% { opacity: 1; }}
        `;

        sheet.addRule(this.targetQuery + '::after', 'content: "|"');
        sheet.addRule(this.targetQuery + '::after', 'animation: blink 0.7s ease-in-out infinite');
    }
}
