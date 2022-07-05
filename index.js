const Telegraf = require('telegraf')
const bot = new Telegraf("5584332697:AAEt4-yhQ0j779Uz8O6OboR90R-sqX0I-7I")

 const ion = new RegExp('.*')
 const axios = require('axios');
  bot.startPolling()

bot.hears('/start', ctx =>{
   
  ctx.replyWithHTML('<b> Welcome 😁</b> @'+ctx.from.username+',\n this is a bot for shortening long url, just send the URL you want to shorten....')
 
})
 
 bot.hears(["/panel","/Panel"] , ctx => {
   if(ctx.from.id != 1365913214){
     ctx.reply("you are not admin")
   return
   }
   ctx.replyWithHTML('<b> Welcome 😁</b> @'+ctx.from.username+',\n This is your admin panel coded by @ThedevProguy\n Remember this panel is under development',{reply_markup:{inline_keyboard:[[{text: "🔋 Support", url: 'https://t.me/allbothelp'} ]
  ]
}
})
 });


 
 
bot.hears(ion,(ctx)=>{
    let msg = ctx.message.text;
    if (msg.length < 5) {
  ctx.replyWithMarkdown("_That does not look like a valid URL ❌ _")
return 
}

if (msg.substring(0,7) == "http://") {
   axios.get('https://is.gd/create.php?format=simple&url='+msg)
  //console.log(ctx)
  .then(res => {
    
ctx.replyWithHTML(" <b> The Url has successfully been short</b> \n <b>🔗 Full Link: </b>"+msg+"\n<b># 🔗 Short Link:</b> <code>"+res.data+"</code>", {reply_markup:{inline_keyboard:[[{text: '🔗 Visit link', url: res.data} ]

        ]

      }
    })
    
      
  }).catch(e => {
    console.log(e);
    ctx.reply(e)
  })

} else {
if (msg.substring(0,8) == "https://") {
  
   axios.get('https://is.gd/create.php?format=simple&url='+msg)
  //console.log(ctx)
  .then(res => {
    
ctx.replyWithHTML(" <b> The Url has successfully been short</b> \n <b>🔗 Full Link: </b>"+msg+"\n<b># 🔗 Short Link:</b> <code>"+res.data+"</code>", {reply_markup:{inline_keyboard:[[{text: '🔗 Visit link', url: res.data} ]

        ]

      }
    })
    
  }).catch(e => {
    console.log(e);
    ctx.reply(e)
  })
return
}
  ctx.replyWithMarkdown("_That does not look like a valid link . _")
}
   
 });
