async function sendMessage() {
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("status");

    if (!message) {
        status.innerText = "⚠️ اكتب رسالة أولاً";
        status.style.color = "red";
        return;
    }

    try {
        const response = await fetch('send.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: message })
        });

        const result = await response.json();

        if (result.ok) {
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
        console.error(err);
    }
}
