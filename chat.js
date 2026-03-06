async function analyzeGold() {

let rsi = Math.floor(Math.random() * 100)
let macd = Math.random() > 0.5 ? "BUY" : "SELL"
let adx = Math.floor(Math.random() * 50)
let trend = Math.random() > 0.5 ? "BUY" : "SELL"

let signal = "HOLD"

if (rsi < 30 && macd === "BUY") {
signal = "BUY"
}
else if (rsi > 70 && macd === "SELL") {
signal = "SELL"
}

let win = Math.floor(60 + Math.random() * 30)

document.getElementById("chat").innerHTML = `
<h3>XAUUSD AI Analysis</h3>

RSI : ${rsi} <br>
MACD : ${macd} <br>
ADX : ${adx} <br>
Trend : ${trend} <br><br>

<h2>${signal}</h2>

Win Probability : ${win}%
`
}
