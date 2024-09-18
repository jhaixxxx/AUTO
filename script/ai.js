/*
    HTTPS://Y2PHEQ.ME
*/

// EXPORTING MODULE
module.exports = {
  config: {
    name: "ai",
    description: "AI assistant",
    role: 0,
    prefix: !1,
    usage: "ai [query]",
    credits: "HTTPS://Y2PHEQ.ME",
    cooldown: 10
  },

  // START
  async run( {
    api,
    event,
    args
  }) {
    async function BOT(__) {
      api.sendMessage(__, event.threadID, event.messageID);
    }
    async function REACT(__) {
      api.setMessageReaction(__, event.messageID, _ => {}, !0);
    }

    /* USER INPUT */
    let query = args.join("")
    if (!query) {
      BOT("Very demure, very mindful, and very helpful! \u2728\n\nHello there, I am your AI assistant that will help you answer your questions.\n\nExample: ai what are you?");
    } REACT("\u23f3");

    /* CALLBACK API */
    try {
      fetch("https://y2pheq.glitch.me/ai?prompt=" + query + "&uid=" + event.senderID)
      .then(r => {
        if (r.ok) {
          return r.json()
          console.log(r.json())
        } else {
          BOT("API DOWN");
        }
      }).then(x__ => (console.log(x__),
        BOT(x__.response + "\n\n• clear conversation history: ai clear"), REACT("\u2705")
      ));
    } catch (error) {
      console.error(error);
    }
  }
}

/*
    HTTPS://Y2PHEQ.ME
*/
