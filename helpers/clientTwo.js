const xmpp = require("simple-xmpp"); 

function send(){
    setTimeout(send, 5000);
    xmpp.send("admin@localhost", `hi! Today is ${new Date().toLocaleString()}`)
}

xmpp.on("online", data => {
    console.log("hello, you are live!");
    console.log(`Connected as ${data.jid.user}`);
    send();
});

xmpp.on("chat", (from, message) => {
    console.log(`Got a message! ${message} from ${from}`)
})

xmpp.connect({
    "jid": "clientTwo@localhost",
    "password": "mypassword2",
    "host": "localhost",
    "port": 5222
})
