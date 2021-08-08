# Package FunnyCommands
- Tired of looking for pictures of people kissing, or slapping to create commands for your bot? So this package was created for you!


# What does she have?
- for now there are only two functions inside it... one is to send anime images kissing and the other is to show anime images hitting each other in the face... But in the future, there will be more things to help you!

# How to use?
```js
const funnycommands = new funny()

const embed = new Discord.MessageEmbed()
.setTitle('kiss')
.setColor('RED')
.setDescription(`${message.author} just kissed ${message.mentions.users.first()}`)
.setImage(funnycommands.kiss())

message.channel.send(embed) //images of people kissing will come out...
```

# Others...
```js
.kiss() //Returns anime image kissing... (As stated above)
.way() //Returns anime image crashing...
.hug() //Returns anime image hugging
.cafune() //Returns anime image cafuné
```

# How to install?
```js
npm i funnycommands
```
