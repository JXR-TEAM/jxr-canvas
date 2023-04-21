const Canvas = require("canvas");
const { formatVariable, applyText } = require("../../utils/functions");

module.exports = class Patrick {

    constructor() {
        this.frame = "https://i.ibb.co/cTdRnCd/Patrick-scary.png";
        this.avatar = "https://telegra.ph/file/a23556f205dacb630e58d.jpg";
    }
     //avatar
    setAvatar(value) {
        this.avatar = value;
        return this;
    }
    
    async toAttachment() {
    	
      // Create canvas
    const canvas = Canvas.createCanvas(850, 1280);
    const ctx = canvas.getContext("2d");
    
    
   
  
  //avatar
  let avatar = await Canvas.loadImage(this.avatar);
  ctx.drawImage(avatar, 180, 49, 470, 570);
  
  
  
  let img = await Canvas.loadImage(this.frame);
  ctx.drawImage(img, 0, 0, 850, 1280);
  
  
return canvas;   
    }
};