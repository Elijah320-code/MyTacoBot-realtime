document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('send-btn').addEventListener('click', sendMessage);
});

function sendMessage() {
    const userInputField = document.getElementById('user-input');
    const userInput = userInputField.value;
    if (userInput.trim() === '') return; // Ignore empty messages

    displayMessage(userInput, 'user'); // Display the user's message
    const botResponse = generateResponse(userInput); // Generate the bot's response
    setTimeout(() => displayMessage(botResponse, 'bot'), 500); // Display bot's response after a short delay

    userInputField.value = ''; // Clear input field after sending the message
}

function displayMessage(message, sender) {
    const messagesContainer = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    // Apply different styling based on the sender
    messageDiv.className = sender === 'user' ? 'message user' : 'message bot';
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll to the latest message
}

function generateResponse(input) {
    input = input.toLowerCase();
    const tacoFacts = [
        "I love tacos! 🌮 Did you know that the best tacos are made with fresh ingredients? 😋",
        "My favorite tacos are fish tacos. 🐟 What's yours?",
        "Tacos were invented a long time ago, but they keep getting yummier! 😊",
        "If I were human, I'd eat tacos every day! 😂",
        "Hmm, I'm not sure about that. But tacos make everything better! 🤖💖"
    ];

    if (input.includes('taco')) {
        return tacoFacts[0];
    } else if (input.includes('favorite')) {
        return tacoFacts[1];
    } else if (input.includes('history') || input.includes('invent')) {
        return tacoFacts[2];
    } else {
        // Randomly select a cute response if the question isn't about tacos directly
        return tacoFacts[Math.floor(Math.random() * tacoFacts.length)];
    }
}
