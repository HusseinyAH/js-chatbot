//elements
let sendBtn = document.getElementById('sendBtn');
let textbox = document.getElementById('textbox');
let chatContainer = document.getElementById('chatContainer');


//function to handle the chatbot messages and display the content in the chat container.
function chatbotSendMessage(messageText) {
    
    let messageElement = document.createElement('div');
    messageElement.classList.add("w-50");
    messageElement.classList.add("float-left");
    messageElement.classList.add("shadow-sm");
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";
    messageElement.innerHTML = "<span>chat:</span>"+
    "<span style="+"margin-top: 10px; padding: 10px"+">"+messageText+"</span>";

    chatContainer.appendChild(messageElement);
}

//function to handle the textbox and the send button and display the content in the chat container.
function sendMessage(messageText) {
    
    let messageElement = document.createElement('div');
    messageElement.classList.add("w-50");
    messageElement.classList.add("float-md-end");
    messageElement.classList.add("shadow-sm");
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";
    messageElement.innerHTML = "<span>Agent:</span>"+
    "<span style="+"margin-top: 10px; padding: 10px"+">"+messageText+"</span>";

    chatContainer.appendChild(messageElement);
    textbox.value = "";

}


sendBtn.addEventListener('click', function(e){

let messageText = textbox.value;
sendMessage(messageText);

})