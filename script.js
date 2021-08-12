AFRAME.registerComponent('change-color-onclick', {
    init: function() {
        let colors = ['red', 'green', 'blue', 'yellow', 'purple'];
        let castlePart = this.el;

        castlePart.addEventListener("click", function() {
            let randIndex = Math.floor(Math.random() * colors.length);
            castlePart.setAttribute('color', colors[randIndex]);
        })
    }
})