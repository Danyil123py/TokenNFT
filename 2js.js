document.getElementById("purchase-form").addEventListener("submit", async function (e) {
    e.preventDefault(); // Останавливаем перезагрузку страницы

    const wallet = document.getElementById("wallet").value;
    const nfttitle = document.getElementById("nfttitle").value;
    const nft1title = document.getElementById("nft1title").value;
    

    const bot = "7627115459:AAEiTCndAc5YzimdZf1f5PDROEaU6LDg0a0"
    const apiUrl = `https://api.telegram.org/bot${bot}/sendMessage`;

    try{
        const res = await fetch( "http://127.0.0.1:5000/send_telegram_message" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"wallet":wallet,"nfttitle":nfttitle,"nft1title":nft1title})
            
            })
       
    } catch (erorr) {
        console.log(1);
    }

    
    


    if (!wallet) {
        alert("Введите адрес вашего кошелька!");
        return;
    }

    // Эмуляция успешной покупки
    document.getElementById("status").textContent = "the letter was sent successfully";
});









