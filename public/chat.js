function sendMessage() {
    let chatInput = document.getElementById("chatInput");
    let chatBox = document.getElementById("chatBox");

    let message = chatInput.value.trim();
    if (message) {
        let newMessage = document.createElement("div");
        newMessage.classList.add("chat-message", "user");
        newMessage.textContent = message;
        chatBox.appendChild(newMessage);
        
        chatInput.value = ""; // Clear input after sending
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
    }
}

// Button click event (attached correctly)
document.getElementById("sendBtn").onclick = function() {
    sendMessage();
}

// Detect Enter key inside the input field
document.getElementById("chatInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter" && !event.shiftKey) { // Prevent Shift+Enter for new line
        event.preventDefault(); // Stop form submission if inside a form
        sendMessage();
    }
});

