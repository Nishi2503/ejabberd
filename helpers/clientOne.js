const xmpp = require("simple-xmpp"); 
function send(){
    setTimeout(send, 5000);
    xmpp.send("myself @localhost", `hi! Today is ${new Date().toLocaleString()}`)
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
    "jid": "user1@localhost",
    "password": "password1",
    "host": "localhost",
    "port": 5220
})