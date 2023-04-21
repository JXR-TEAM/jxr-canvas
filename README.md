<p align="center">
  <img width="200" height="200" src="https://telegra.ph/file/c955871434c96bd8f40dc.jpg">
</p>

## Installation

```bash
$ npm install jxr-canvas

const JXR = require("jxr-canvas");
```


<p align="center">
    <a href="https://github.com/JXR-TEAM">
        <img
            src="https://readme-typing-svg.herokuapp.com?size=15&width=280&lines=thank+you+for+using+this+module"
            alt="JXR TEAM"
        />
    </a>
</p>

[![NPM](https://img.shields.io/badge/npm-362a63?style=for-the-badge&logo=npm&logoColor=cyan)](npmjs.com)


## how to use

<!-- Welcome -->
<details><summary><b>Welcome</b></summary><br>

```js
const __path = process.cwd();

const JXR = require("jxr-canvas");
const fs = require('fs');

var image = await new JXR.Welcome()
    .setUsername("Ronzz YT")
    .setGuildName("JXR TEAM")
    .setGuildIcon("https://telegra.ph/file/c955871434c96bd8f40dc.jpg")
    .setMemberCount("379")
    .setAvatar("https://telegra.ph/file/a23556f205dacb630e58d.jpg")
    .setBackground("https://telegra.ph/file/c792631587035c6cd185e.jpg")
    .toAttachment();
  
  let data = image.toBuffer();
  await fs.writeFileSync(__path +'/options/welcome.png', data)
 
```
#### Result
<img src="https://telegra.ph/file/a64d4d7065647e15e1bb1.png" height="130"></img>
</details>

<!-- Welcome -->
<details><summary><b>Welcome2</b></summary><br>

```js
const __path = process.cwd()

const JXR = require("jxr-canvas");
const fs = require('fs');

var image = await new JXR.Welcome2()
    .setAvatar("https://telegra.ph/file/a23556f205dacb630e58d.jpg")
    .setUsername("Ronzz YT")
    .setBg("https://telegra.ph/file/c792631587035c6cd185e.jpg")
    setGroupname("JXR TEAM")
    .setMember("379")
    .toAttachment();
    
  let data = image.toBuffer();
  await fs.writeFileSync(__path +'/options/welcome2.png', data)
  
```
#### Result
<img src="https://telegra.ph/file/188cbeff6443d9e7320ca.png" height="130"></img>
</details>
<!-- Welcome -->
<details><summary><b>Rank</b></summary><br>

```js
const __path = process.cwd()

const JXR = require("jxr-canvas");
const fs = require('fs');

var image = await new JXR.Rank()
    .setAvatar("https://telegra.ph/file/a23556f205dacb630e58d.jpg") 
    .setUsername("Ronzz YT") 
    .setBg("https://telegra.ph/file/c792631587035c6cd185e.jpg")
    .setNeedxp("100") 
    .setCurrxp("50") 
    .setLevel("2") 
    .setRank("https://i.ibb.co/Wn9cvnv/FABLED.png") 
    .toAttachment();
  
  let data = image.toBuffer();
  await fs.writeFileSync(__path +'/options/rank.png', data)
 
```
#### Result
<img src="https://telegra.ph/file/b5e9ba44ca74753c627d0.png" height="130"></img>
</details>

<!-- Welcome -->
<details><summary><b>Level Up</b></summary><br>

```js
const __path = process.cwd()

const JXR = require("jxr-canvas");
const fs = require('fs');

var image = await new JXR.Up()
    .setAvatar("https://i.ibb.co/1s8T3sY/48f7ce63c7aa.jpg") 
    .toAttachment();
  
  let data = image.toBuffer();
  await fs.writeFileSync(__path +'/options/levelup.png', data)
 
```
#### Result
<img src="https://telegra.ph/file/e1af60003fe64986f815a.png" height="100"></img>
</details>

#### update

<!-- Maker -->
<details><summary><b>Maker</b></summary><br>

#### Horny

```js
const __path = process.cwd()

const JXR = require("jxr-canvas");
const fs = require('fs');

var image = await new JXR.Horny()
    .setAvatar("https://telegra.ph/file/a23556f205dacb630e58d.jpg")
    .toBuild();
    
  let data = image.toBuffer();
  await fs.writeFileSync(__path +'/options/horny', data)
```
#### Result
<img src="https://telegra.ph/file/8ae9fd2f3907e11de3c72.png" height="240"></img>

#### Jojo

```js
const __path = process.cwd()

const JXR = require("jxr-canvas");
const fs = require('fs');

var image = await new JXR.Jo()
    .setImage("https://telegra.ph/file/a23556f205dacb630e58d.jpg")
    .toBuild();
    
  let data = image.toBuffer();
  await fs.writeFileSync(__path +'/options/jojo.png', data)
```
#### Result
<img src="https://telegra.ph/file/6dd06c41ca36031375220.png" height="170"></img>

#### Patrick

```js
const __path = process.cwd()

const JXR = require("jxr-canvas");
const fs = require('fs');

var image = await new JXR.Patrick()
    .setAvatar("https://telegra.ph/file/a23556f205dacb630e58d.jpg")
    .toAttachment();
    
  let data = image.toBuffer();
  await fs.writeFileSync(__path +'/options/pat.png', data)
```
#### Result
<img src="https://telegra.ph/file/c3c2b1ff025e6459281ce.png" height="200"></img>

#### Bonk

```js
const __path = process.cwd()

const JXR = require("jxr-canvas");
const fs = require('fs');

var image = await new JXR.Bonk()
    .setAvatar1("https://telegra.ph/file/ed04d65c676a879b4d31b.png")
    .setAvatar2("https://telegra.ph/file/a23556f205dacb630e58d.jpg")
    .toBuild();
    
  let data = image.toBuffer();
  await fs.writeFileSync(__path +'/options/bonk.png', data)
```
#### Result
<img src="https://telegra.ph/file/03f092f5c481c4e3ca9be.png" height="170"></img>

#### Spongebob Burn

```js
const __path = process.cwd()

const JXR = require("jxr-canvas");
const fs = require('fs');

var image = await new JXR.Burn()
    .setAvatar("https://telegra.ph/file/a23556f205dacb630e58d.jpg")
    .toAttachment();
    
  let data = image.toBuffer();
  await fs.writeFileSync(__path +'/options/burn.png', data)
```
#### Result
<img src="https://telegra.ph/file/c727c1d3b7fe09931d554.png" height="170"></img>




</details>


#### ✉ Req ? chat me on 

[![WhatsApp]](https://wa.me/628817839722)

## Credits
##### thanks my team for the help
* [`Ronzz YT`](https://github.com/Ronzz-Ofc)
* [`ArifzynXd`](https://github.com/ArifzynXd)
##### jxr-canvas