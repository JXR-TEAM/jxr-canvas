const Canvas = require('canvas');
const canvasGif = require('canvas-gif');

module.exports = class Attp {
    constructor() {
        this.text = "Ronzz YT";
    }
     //avatar
    setTeks(value) {
        this.text = value;
        return this;
    }
    async toAttachment() {
    
    
        // Create canvas
        const file = './node_modules/jxr-canvas/assets/img/attp.gif'

        var text = this.text
        let length = text

        var font = 90

        if (length>12){ font = 68}
        if (length>15){ font = 58}
        if (length>18){ font = 55}
        if (length>19){ font = 50}
        if (length>22){ font = 48}
        if (length>24){ font = 38}
        if (length>27){ font = 35}
        if (length>30){ font = 30}
        if (length>35){ font = 26}
        if (length>39){ font = 25}
        if (length>40){ font = 20}
        if (length>49){ font = 10}
        const canvas = await canvasGif(
        file, (ctx) => {
           var couler = ["#ff0000","#ffe100","#33ff00","#00ffcc","#0033ff","#9500ff","#ff00ff"]
           let jadi = couler[Math.floor(Math.random() * couler.length)]

		   function drawStroked(text, x, y) {
			  ctx.lineWidth = 5
			  ctx.font = `${font}px SF-Pro`
			  ctx.fillStyle = jadi
			  ctx.strokeStyle = 'black'
			  ctx.textAlign = 'center'
			  ctx.strokeText(text, x, y)
			  ctx.fillText(text, x, y)
		   }
		
		drawStroked(text,290,300)

	},
	{
		coalesce: false, // whether the gif should be coalesced first (requires graphicsmagick), default: false
		delay: 0, // the delay between each frame in ms, default: 0
		repeat: 0, // how many times the GIF should repeat, default: 0 (runs forever)
		algorithm: 'octree', // the algorithm the encoder should use, default: 'neuquant',
		optimiser: false, // whether the encoder should use the in-built optimiser, default: false,
		fps: 7, // the amount of frames to render per second, default: 60
		quality: 100, // the quality of the gif, a value between 1 and 100, default: 100
	}
)

        return canvas;
    }
};
