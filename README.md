### Package FunnyCommands
- Tired of looking for pictures of people kissing, or slapping to create commands for your bot? So this package was created for you!


### What does she have?
- for now there are only two functions inside it... one is to send anime images kissing and the other is to show anime images hitting each other in the face... But in the future, there will be more things to help you!

### Functions and examples

  Functions    | Return       |  Examples
------------ | ------------ | ------------
`.kiss`    | Anime kissing  | `funnycommands.kiss`
`.slap`     | Anime crashing | `funnycommands.slap`
`.hug`     | Anime hugging  | `funnycommands.hug`
`.cafune`  | Anime cafuné   | `funnycommands.cafune`
`.bite`   | Anime Bit | `funnycommands.bite`
`.ship`    | Number from 1-100 | `funnycommands.ship`


# Examples

### .kiss example
```js
const funny = require("funnycommands")
const funnycommands = new funny()
const Discord = require("discord.js")

const embed = new Discord.MessageEmbed()
.setTitle('kiss')
.setColor('RED')
.setDescription(`${message.author} just kissed ${message.mentions.users.first()}`)
.setImage(funnycommands.kiss)

message.channel.send(embed) //images of people kissing...
```

### .slap example
```js
const funny = require("funnycommands")
const funnycommands = new funny()
const Discord = require("discord.js")

const embed = new Discord.MessageEmbed()
.setTitle('slap')
.setColor('RED')
.setDescription(`${message.author} slapped ${message.mentions.users.first()}`)
.setImage(funnycommands.slap)

message.channel.send(embed) //images of people slapped..
```

### .hug example
```js
const funny = require("funnycommands")
const funnycommands = new funny()
const Discord = require("discord.js")

const embed = new Discord.MessageEmbed()
.setTitle('hugged')
.setColor('RED')
.setDescription(`${message.author} hugged ${message.mentions.users.first()}`)
.setImage(funnycommands.hug)

message.channel.send(embed) //images of people hugging...
```

### .cafune example
```js
const funny = require("funnycommands")
const funnycommands = new funny()
const Discord = require("discord.js")

const embed = new Discord.MessageEmbed()
.setTitle('cuddled')
.setColor('RED')
.setDescription(`${message.author} cuddled in ${message.mentions.users.first()}`)
.setImage(funnycommands.cafune)

message.channel.send(embed) //images of people cuddled...
```

### .bite example
```js
const funny = require("funnycommands")
const funnycommands = new funny()
const Discord = require("discord.js")

const embed = new Discord.MessageEmbed()
.setTitle('bite')
.setColor('RED')
.setDescription(`${message.author} bite ${message.mentions.users.first()}`)
.setImage(funnycommands.bite)

message.channel.send(embed) //images of people bite...
```

### .ship example
```js
const funny = require("funnycommands")
const funnycommands = new funny()

message.channel.send(`${message.author} have ${funnycommands.ship} of staying with ${message.mentions.users.first()}`)
```


### How to install?
```js
npm i funnycommands
```
