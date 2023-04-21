const Canvas = require("canvas");

module.exports = class Verifycation {

    constructor() {
        this.fm = "https://telegra.ph/file/5b249abccf537d67ceffc.png";
        this.bg = "https://telegra.ph/file/c792631587035c6cd185e.jpg";
        this.avatar = "https://telegra.ph/file/a23556f205dacb630e58d.jpg";
        this.username = "Ronzz YT";
        this.resi = "588B8F7B60";
        this.member = "372";
    }
     //avatar
    setAvatar(value) {
        this.avatar = value;
        return this;
    }
    //username
    setUsername(value) {
        this.username = value;
        return this;
    }
    //bg
    setBg(value) {
        this.bg = value;
        return this;
    }
    setResi(value) {
        this.resi = value;
        return this;
    }
    //member
    setMember(value) {
        this.member = value;
        return this;
    }
    async toAttachment() {
    
    
        // Create canvas
        const canvas = Canvas.createCanvas(600, 300);
        const ctx = canvas.getContext("2d");
       
   
        // Draw background
        let background = await Canvas.loadImage(this.bg);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        let fram = await Canvas.loadImage(this.fm);
        ctx.drawImage(fram, 0, 0, canvas.width, canvas.height);

        //circle avatar
    ctx.save();
	ctx.beginPath();
	ctx.rotate(-17 * Math.PI / 180);
	let avatar = await Canvas.loadImage(this.avatar);
    ctx.strokeStyle = 'white';  // some color/style
	ctx.lineWidth = 3;  
	ctx.drawImage(avatar, -4, 130, 113, 113);
    ctx.strokeRect(-4, 130, 113, 113);
	ctx.restore();
    
        let res = this.resi;
        let resinya = res.length > 15 ? res.substring(0, 15) + "..." : res;
        ctx.globalAlpha = 1;
        ctx.font = "700 20px Courier New";
        ctx.textAlign = 'left';
        ctx.fillStyle = "#ffffff";
        ctx.fillText(`RESI: ${resinya}`, 300, 160);
        
        
        ctx.font = "700 20px Courier New";
        ctx.textAlign = 'left';
        ctx.fillStyle = "#ffffff";
        ctx.fillText(`${this.member}th member`, 250, 290);
        
        let username = this.username;
        let namalu = username.length > 12 ? username.substring(0, 15) + "..." : username;
        ctx.globalAlpha = 1;
        ctx.font = "700 27px Courier New";
        ctx.textAlign = 'left';
        ctx.fillStyle = "#ffffff";
        ctx.fillText(namalu, 242, 248);
         
	   
        return canvas;
    }
};
