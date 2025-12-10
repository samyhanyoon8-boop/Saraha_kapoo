async function sendMessage() {
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("status");

    if (!message) {
        status.innerText = "⚠️ اكتب رسالة أولاً";
        status.style.color = "red";
        return;
    }

    // بيانات البوت وحسابك
    const botToken = "8543960258:AAHbxuWBEOiWWmJJyqvWvi1JmujGm3KfcOk"; 
    const chatId = "8357427128";

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
            console.error("خطأ في الاستجابة من تليجرام");
        }
    } catch (err) {
        status.innerText = "❌ حدث خطأ، حاول مرة أخرى.";
        status.style.color = "red";
        console.error(err);
    }
}
