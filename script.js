async function sendMessage() {
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("status");

    if (!message) {
        status.innerText = "⚠️ اكتب رسالة أولاً";
        status.style.color = "red";
        return;
    }

    const botToken = "PUT_YOUR_BOT_TOKEN_HERE"; 
    const chatId = "PUT_YOUR_CHAT_ID_HERE";

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                chat_id: chatId,
                text: `📩 رسالة جديدة لصارح كابو اليوتيوبر:\n\n${message}`
            })
        });

        if (response.ok) {
            status.innerText = "✔️ تم إرسال الرسالة بنجاح!";
            status.style.color = "#4caf50";
            document.getElementById("message").value = "";
        } else {
            status.innerText = "❌ حدث خطأ، حاول مرة أخرى.";
            status.style.color = "red";
        }
    } catch (err) {
        status.innerText = "❌ حدث خطأ، حاول مرة أخرى.";
        status.style.color = "red";
    }
}