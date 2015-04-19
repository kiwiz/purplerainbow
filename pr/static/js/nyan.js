"use strict";

(function() {

var COLORS = ['ff0000','ff9900','ffff00','33ff00','0099ff','6633ff'];
var SZ = 18;

// NyanCat class.
function NyanCat(elem, x, y, angle, speed, colors) {
    // Create the image.
    this.img = document.createElement('img');
    this.img.setAttribute('src', '/static/img/' + (colors.length == COLORS.length ? 'ncjs.gif':'ncsjs.gif'));
    this.img.style.position = 'fixed';
    this.img.style.zIndex = 16384;

    // Create the canvas containing the brush.
    this.brush = document.createElement('canvas');
    var ctx = this.brush.getContext('2d');
    this.brush.width = 1;
    this.brush.height = SZ;
    var sz = SZ / colors.length;

    // Fill the brush.
    for(var i = 0; i < colors.length; ++i) {
        ctx.fillStyle = '#' + COLORS[colors[i]];
        ctx.fillRect(0, sz * i, 18, sz);
    }

    this.update = function() {
        this.time++;
        this.logic();
        this.move(
            this.x + Math.cos(this.angle) * this.speed,
            this.y + Math.sin(this.angle) * this.speed
        );
    };

    this.logic = function() {
        this.state += 1;
        switch(this.logictype) {
            case 0:
                break;
            case 1:
                if(this.state < 15) this.angle += 0.05;
                else if(this.state < 30) this.angle -= 0.05;
                else this.state = 0;
                break;
            case 2:
                this.angle += (this.state < 64 ? this.state:64) / 512;
                break;
            case 3:
                this.angle -= (this.state < 64 ? this.state:64) / 512;
                break;
            case 4:
                var spd = this.state / 2;
                this.speed = (spd < 15 ? spd:5);
                break;
            case 5:
                if(Math.random() < 0.1) this.angle += Math.PI / 2;
                break;
            case 6:
                if(Math.random() < 0.1) this.angle += Math.PI / 2;
                break;
        }
    };

    this.move = function(x, y) {
        this.x = x;
        this.y = y;

        var hsz = this.size / 2;
        if(this.x > window.innerWidth + hsz) this.x = -hsz;
        if(this.x < -hsz) this.x = window.innerWidth + hsz;
        if(this.y > window.innerHeight + hsz) this.y = -hsz;
        if(this.y < -hsz) this.y = window.innerHeight + hsz;

        this.img.style.top = (y - this.img.height / 2) + 'px';
        this.img.style.left = (x - this.img.width / 2) + 'px';
        this.img.style.MozTransform =
        this.img.style.webkitTransform = 
        this.img.style.OTransform = "rotate(" + this.angle + "rad)" + (this.upsidedown ? " scaleY(-1)":"");
    };

    this.destroy = function() {
        this.img.parentNode.removeChild(this.img);
    };

    // Initialize variables.
    this.angle = angle;
    this.speed = speed;
    this.state = false;
    this.logictype = (Math.random() * 7) | 0;
    this.upsidedown = Math.random() < 0.5;
    this.colors = colors;
    this.time = 0;
    this.size = SZ;
    this.move(x, y);

    elem.appendChild(this.img);
}

var Nyan = {
    elem: null,
    audio: null,
    canv: null,
    intv: null,
    cats: null,
    listeners: null,

    initialize: function() {
        // If our base elem is defined, we've already initialized.
        if(this.elem) {
            return;
        }

        this.cats = [];

        // Force our container to fill the screen.
        document.body.style.padding = '0px';
        document.body.style.margin = '0px';

        // Create the parent element.
        this.elem = document.createElement('div');
        this.elem.style.overflow = 'hidden';
        this.elem.style.position = 'fixed';
        this.elem.style.left = '0px';
        this.elem.style.top = '0px';

        // Create the canvas element for trails.
        this.canv = document.createElement('canvas');

        this.canv.style.left = '0px';
        this.canv.style.top = '0px';
        this.canv.style.zIndex = 16384;
        this.canv.style.position = 'relative';
        this.canv.width = window.innerWidth;
        this.canv.height = window.innerHeight;

        this.listeners = [];
        this.listeners.push(['click', this._proxy(this.onclick), false]);
        this.listeners.push(['resize', this._proxy(this.onresize), false]);
        this.listeners.push(['keyup', this._proxy(this.onkeyup), false]);
        for(var k in this.listeners) {
            var x = this.listeners[k];
            window.addEventListener(x[0], x[1], x[2]);
        }

        // Start the background music.
        this.audio = document.createElement('audio');
        this.audio.setAttribute('loop', 'loop');
        this.audio.setAttribute('autoplay', 'autoplay');
//        this.audio.setAttribute('src', 'n.oga');

        this.elem.appendChild(this.canv);
        this.elem.appendChild(this.audio);

        document.body.appendChild(this.elem);
    },
    onclick: function(e) {
        this.addCat(e.clientX, e.clientY);
    },
    onresize: function() {
        var temp = document.createElement('canvas');
        temp.width = this.canv.width;
        temp.height = this.canv.height;
        var tctx = temp.getContext('2d');

        tctx.drawImage(this.canv, 0, 0);
        this.canv.width = window.innerWidth;
        this.canv.height = window.innerHeight;
        var ctx = this.canv.getContext('2d');
        ctx.drawImage(temp, 0, 0);
    },
    onkeyup: function(e) {
        switch(e.keyCode) {
            case 27:
                this.destroy();
                break;
            case 32:
                this.addCat();
                break;
        }
    },
    addCat: function(x, y) {
        if(typeof(x) === 'undefined') x = window.innerWidth * Math.random();
        if(typeof(y) === 'undefined') y = window.innerHeight * Math.random();
        this.cats.push(new NyanCat(
            this.elem,
            x, y,
            2 * Math.PI * Math.random(), 
            4 * Math.random() + 5, 
            [(Math.random() * COLORS.length) | 0]
        ));
    },
    run: function() {
        if(this.intv) {
            return;
        }
        var this_ = this;
        this.tick();
        this.intv = setInterval(function() { this_.tick() }, 50);
    },
    stop: function() {
        if(!this.intv) {
            return;
        }
        clearInterval(this.intv);
        this.intv = null;

        while(this.cats.length) {
            var cat = this.cats.pop();
            cat.destroy();
        }

        while(this.listeners.length) {
            var x = this.listeners.pop();
            window.removeEventListener(x[0], x[1], x[2]);
        }
    },
    destroy: function() {
        this.stop();
        this.elem.parentNode.removeChild(this.elem);
    },
    tick: function() {
        // Loop over all the cats and process each.
        for(var i = 0; i < this.cats.length; ++i) {
            var cat_a = this.cats[i];
            var dead = false;

            // Look at every possible pairing.
            for(var j = i + 1; j < this.cats.length; ++j) {
                var cat_b = this.cats[j];

                // Exit out if there is no collision.
                if(Math.abs(cat_a.x - cat_b.x) > (cat_a.size + cat_b.size) / 2) continue;
                if(Math.abs(cat_a.y - cat_b.y) > (cat_a.size + cat_b.size) / 2) continue;
                if(Math.pow(cat_a.x - cat_b.x, 2) + Math.pow(cat_a.y - cat_b.y, 2) > cat_a.size * cat_b.size) continue;

                // Destroy.
                cat_a.destroy();
                cat_b.destroy();

                var center_x = (cat_a.x + cat_b.x) / 2;
                var center_y = (cat_a.y + cat_b.y) / 2;
        
                //Get unique colors
                var colors = [];
                var tcolors = {};
                for(var k = 0; k < cat_a.colors.length; ++k) tcolors[cat_a.colors[k]] = 1;
                for(var k = 0; k < cat_b.colors.length; ++k) tcolors[cat_b.colors[k]] = 1;
                for(var k in tcolors) colors.push(k);
                colors.sort();

                this.drawExplosion(center_x, center_y, colors);

                // Resize the array.
                var l = this.cats.length;
                if(i < l - 2) {
                    if(j < l - 2) {
                        // If both cats aren't at the end, copy over them.
                        this.cats[i] = this.cats[l - 2];
                        this.cats[j] = this.cats[l - 1];
                    } else {
                        this.cats[i] = this.cats[l - (j == l - 2 ? 1:2)];
                    }
                }
                this.cats.pop();
                this.cats.pop();

                --i;

                // Spawn baby cats.
                var spawn_num = (Math.random() * 3|0) + 1;
                for(var k = 0; k < spawn_num; ++k) {
                    var angle = 2 * Math.PI * Math.random();
                    this.cats.push(new NyanCat(
                        this.elem,
                        center_x + Math.cos(angle) * SZ * (colors.length * Math.random() * 0.5 + 0.5), 
                        center_y + Math.sin(angle) * SZ * (colors.length * Math.random() * 0.5 + 0.5), 
                        angle,
                        4 * Math.random() + 5,
                        colors
                    ));
                }
                dead = true;
                break;
            }
            if(i < 0 || dead) continue;

            // Move the cat.
            cat_a.update();

            // Draw the trails.
            var ctx = this.canv.getContext('2d');
            ctx.save();
            ctx.translate(cat_a.x, cat_a.y);
            ctx.rotate(cat_a.angle);
            var width = cat_a.time < SZ ? cat_a.time:SZ - 2;
            ctx.drawImage(cat_a.brush,
                // Input brush
                0, 0, 1, 18,
                // Output swath
                0, (cat_a.upsidedown ? -10:-8) + (SZ - width) / 2,
                cat_a.speed + 2, width
            );
            ctx.restore();
        }
    },
    drawExplosion: function(x, y, colors) {
        var ctx = this.canv.getContext('2d');
        ctx.save();
        ctx.translate(x, y);

        //Band sizes
        var sz = Math.random() * 6 + colors.length * 2;

        for(var i = 0; i < colors.length; ++i) {
            ctx.globalAlpha = (i + 1) * 0.2 / colors.length + 0.7;
            ctx.fillStyle = '#' + COLORS[colors[i]];
            ctx.beginPath();

            for(var j = 0; j < 2 * Math.PI; j += 0.2) {
                var length = Math.random() * (sz + 2) + sz * (colors.length - i) + 10;
                ctx.lineTo(Math.cos(j) * length, Math.sin(j) * length);
            }
            ctx.closePath();
            ctx.fill();
        }
        
        ctx.restore();
    },
    _proxy: function(func) {
        var x = this;
        return function() {
            return func.apply(x, arguments);
        };
    }
};

window.Nyan = Nyan;
$('#nyanmom').one('click', function() {
    Nyan.initialize();
    Nyan.addCat(0, 0);
    Nyan.run(); 
});
})();
