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
  
let random1 = cafu[Math.floor(Math.random() * cafu.length)]

let bei = [
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
  
let random2 = bei[Math.floor(Math.random() * bei.length)]

let tap = [
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
  
  let random3 = tap[Math.floor(Math.random() * tap.length)]
  
  let shi = Math.floor(Math.random() * 100)
  
  let hu = ['https://tenor.com/view/teria-wang-kishuku-gakkou-no-juliet-hug-anime-gif-16509980', 'https://tenor.com/view/anime-cheeks-hugs-gif-14106856', 'https://tenor.com/view/hug-anime-gif-15793126', 'https://tenor.com/view/anime-hug-love-smile-gif-15942846', 'https://tenor.com/view/hug-anime-clingy-gif-7552075', 'https://tenor.com/view/hug-anime-care-comfort-understanding-gif-15793129', 'https://tenor.com/view/hugs-and-love-gif-19327081', 'https://tenor.com/view/sakura-quest-anime-animes-hug-hugging-gif-14721541', 'https://tenor.com/view/hug-anime-gif-11074788', 'https://tenor.com/view/a-whisker-away-hug-love-anime-embrace-gif-17694740', 'https://tenor.com/view/chiya-urara-meirochou-anime-saku-gif-8995974', 'https://tenor.com/view/hug-cuddle-comfort-love-friends-gif-5166500', 'https://tenor.com/view/cuddle-hug-anime-bunny-costumes-happy-gif-17956092', 'https://tenor.com/view/toilet-bound-hanakokun-anime-anime-hug-gif-16831471']
    
    let random4 = hu[Math.floor(Math.random() * hu.length)]

 let mor = ["https://c.tenor.com/RS7jYiWS9EcAAAAC/bite-anime.gif", "https://c.tenor.com/w4T323o46uYAAAAC/anime-bite.gif", "https://pa1.narvii.com/6045/a9bb6d864ebe7e01ed647b78fc652f15116716c4_hq.gif", "http://gifimage.net/wp-content/uploads/2017/09/anime-bite-gif-4.gif", "https://c.tenor.com/8UjO54apiUIAAAAC/gjbu-bite.gif", "https://c.tenor.com/DBwz1nSElowAAAAC/aruu-anime.gif", "https://media1.tenor.com/images/6dd67bd831780c4a754cb33697cddcb6/tenor.gif?itemid=10095819",]
 let random5 = mor[Math.floor(Math.random() * mor.length)] 

 class funny {
    constructor() {
      this.c = random1
      this.b = random2
      this.t = random3
      this.h = random4
      this.e = random5
      this.s = shi
    }
    
    get kiss() {
      return this.b
    }
    
    get slap() {
      return this.t
    }
    
    get cafune() {
      return this.c
    }
    
    get ship() {
      return this.s
    }
    
    get hug() {
      return this.h
    }

    get bite() {
      return this.e
    }
  }
