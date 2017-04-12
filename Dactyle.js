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
}
