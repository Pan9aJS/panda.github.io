window.onload = function () {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Circle {
        constructor(x, y, r, color) {
            this.x = x;
            this.y = y;
            this.r = r;
            this.color = color;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    function circData() {
        let x = Math.floor(Math.random() * canvas.width);
        let y = Math.floor(Math.random() * canvas.height);
        let r = Math.floor(Math.random() * 25);
        let color = 'rgb(' + Math.floor(Math.random() * 225) + ',' + Math.floor(Math.random() * 225) + ',' + Math.floor(Math.random() * 225) + ')';
        return { x: x, y: y, r: r, color: color };
    }


    function anim(o) { new Circle(o.x, o.y, o.r, o.color).draw(); }

    let z = setInterval(() => anim(circData()), 120);
    setTimeout(() => {
        this.clearInterval(z);
    }, 20000);


































}