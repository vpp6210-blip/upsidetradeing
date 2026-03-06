async function analyzeGold() {

const chat = document.getElementById("chat")

chat.innerHTML = "Analyzing XAUUSD..."

const response = await fetch("https://api.openai.com/v1/chat/completions", {
method: "POST",
headers: {
"Content-Type": "application/json",
"Authorization": "Bearer bc045d74482d4842848d3cf13b3f7992"
},
body: JSON.stringify({
model: "gpt-4o-mini",
messages: [
{
role: "user",
content: "Give XAUUSD signal using RSI MACD ADX Trend. Answer like: RSI BUY, MACD SELL, ADX STRONG, FINAL SIGNAL BUY with win percentage."
}
]
})
})

const data = await response.json()

chat.innerHTML = data.choices[0].message.content

}
