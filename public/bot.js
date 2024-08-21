const messagesDiv = document.getElementById('messages');

function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim()) {
        addMessage('User', userInput);
        document.getElementById('userInput').value = '';

        // Simulated bot response
        setTimeout(() => {
            const botResponse = `You said: ${userInput}`;
            addMessage('Bot', botResponse);
        }, 500);
    }
}

function addMessage(sender, text) {
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${text}`;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
