const Canvas = require('canvas');

module.exports = class Ttp {
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
        const canvas = Canvas.createCanvas(576, 576)
	    const ctx = canvas.getContext('2d')
    	ctx.font =`${font}px SF-Pro`
    	ctx.strokeStyle = 'black'
    	ctx.lineWidth = 3
    	ctx.textAlign = 'center'
    	ctx.strokeText(text, 290,300)
    	ctx.fillStyle = 'white'
    	ctx.fillText(text, 290,300)

        return canvas;
    }
};
