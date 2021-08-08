let beijar = [
    "https://media.discordapp.net/attachments/863510049514061824/870642897324736532/desconhecido.gif",
    "https://media.discordapp.net/attachments/863510049514061824/870643359289593857/desconhecido.gif",
    "https://media.discordapp.net/attachments/863510049514061824/870643376578510848/desconhecido.gif",
    "https://media.discordapp.net/attachments/863510049514061824/870643393712259142/desconhecido.gif",
    "https://media.discordapp.net/attachments/863510049514061824/870643937000431636/desconhecido.gif",
    "https://media.discordapp.net/attachments/863510049514061824/870643946945130586/desconhecido.gif",
    "https://media.discordapp.net/attachments/863510049514061824/870643970777178142/desconhecido.gif",
    "https://media.discordapp.net/attachments/863510049514061824/870643981929832509/desconhecido.gif",
    "https://media.discordapp.net/attachments/863510049514061824/870644843553107988/desconhecido.gif"
    ]
    let primeiro = beijar[Math.floor(Math.random() * beijar.length)]
    
    let bater = [
    "https://i.pinimg.com/originals/bc/ee/bf/bceebfa72d3a5933cb0e9cf319bb67ae.gif",
    "https://i.pinimg.com/originals/2f/0f/82/2f0f82e4fb0dee8efd75bee975496eab.gif",
    "https://pa1.narvii.com/6218/e60d658287b1ca835595e7592905e3c8ffc99c59_hq.gif",
    "https://media.tenor.com/images/6dbd997e3e79f21b7841b244833325c0/tenor.gif",
    "https://i.pinimg.com/originals/65/57/f6/6557f684d6ffcd3cd4558f695c6d8956.gif",
    "https://www.intoxianime.com/wp-content/uploads/2017/04/tumblr_ooub8fIHkT1qz64n4o2_400.gif",
    "http://pa1.narvii.com/6289/6736b2df0b1e355a15796b63ae4014bcd5994c8d_00.gif",
    "https://i.gifer.com/B2Sm.gif",
    "https://i.pinimg.com/originals/92/11/ed/9211ed04d027b5aaa557708b81609eb5.gif"
    ]
    let segundo = bater[Math.floor(Math.random() * bater.length)]

    let cafu = [
    "https://media.discordapp.net/attachments/863510049514061824/871356819199639592/desconhecido.gif",
    "https://media.discordapp.net/attachments/863510049514061824/871356842159271986/desconhecido.gif",
    "https://media.discordapp.net/attachments/863510049514061824/871356836471791686/desconhecido.gif",
    "https://media.discordapp.net/attachments/863510049514061824/871356821087084594/desconhecido.gif",
    "https://media.discordapp.net/attachments/863510049514061824/871357510785847306/desconhecido.gif",
    "https://media.discordapp.net/attachments/863510049514061824/871358400502587392/desconhecido.gif",
    "https://media.discordapp.net/attachments/863510049514061824/871358205140295690/desconhecido.gif",
    "https://media.discordapp.net/attachments/863510049514061824/871357772728533002/desconhecido.gif"
    ]

    let terceiro = cafu[Math.floor(Math.random() * cafu.length)]

    let hu = [
      "https://c.tenor.com/9e1aE_xBLCsAAAAC/anime-hug.gif",
      "https://i.pinimg.com/originals/8d/ab/29/8dab296aed2cbe25af8ebb4703517356.gif",
      "https://c.tenor.com/xXojtCFI3UgAAAAC/anime-hug.gif",
      "http://2.bp.blogspot.com/-f_bejpkQjJc/UbX7FQhRGxI/AAAAAAAABXA/B3P1uFUlqAs/s1600/tumblr_mkmipvUcxH1s9s0bdo1_500.gif",
      "http://33.media.tumblr.com/6a02f9f626db7b7e3027ed5763649027/tumblr_inline_njc1ii3hwN1sl9x7p.gif",
      "https://1.bp.blogspot.com/-VUK7EW4jACI/XhQDtlnFrZI/AAAAAAAARBc/JgS-3mLsKw8fw_penHTBF9rwWQssoU-rgCLcBGAsYHQ/s1600/original.gif",
      "https://i.imgur.com/r9aU2xv.gif?noredirect",
      "https://25.media.tumblr.com/2a3ec53a742008eb61979af6b7148e8d/tumblr_mt1cllxlBr1s2tbc6o1_500.gif"
    ]

    let quarto = hu[Math.floor(Math.random() * hu.length)]

   module.exports = class funny {
   constructor() {
       this.b = primeiro;
       this.tapa = segundo;
       this.caf = terceiro;
       this.abraco = quarto;
     }

   get kiss() {
     return this.b
   }

   get way() {
     return this.tapa
   }

   get cafune() {
     return this.caf
   }

   get hug() {
     return this.abraco
   }
}
