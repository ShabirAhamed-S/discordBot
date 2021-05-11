require('dotenv/config')

const Discord = require('discord.js') 

const client = new Discord.Client()

client.once('ready',(user)=>{
  console.log( `MyBot is online`)
})

client.login("ODQxMjA2MjU2OTM1ODk1MTAx.YJjYYA.xxr0EvxhuF0YdKsSpvZror8DXvw")