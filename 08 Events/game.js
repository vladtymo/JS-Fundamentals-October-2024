const element = document.querySelector('.hero');

// TODO: add logic for other directions

const hero = {
    x: 0,
    y: 0,
    step: 10,
    moveLeft() {
        // check bounds
        if (this.x - this.step >= 0)
            this.x -= this.step;
    },
    moveRight() {
        this.x += this.step;
    },
    move(htmlElement) {
        htmlElement.style.transform = `translate(${this.x}px,${this.y}px)`
    }
};

window.onkeydown = (e) => {
    switch (e.keyCode) {
        case 37: // left
            hero.moveLeft();
            break;
        case 39: // right
            hero.moveRight();
            break;
    }
    hero.move(element);
}
