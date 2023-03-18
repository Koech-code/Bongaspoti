import { useState } from "react";

function ChatBox() {
  const [messages, setMessages] = useState([
    { text: "Hi there!", sender: "receiver" },
    { text: "Hey, how's it going?", sender: "sender" },
    { text: "Not too bad, thanks for asking. How about you?", sender: "receiver" },
    { text: "I'm doing pretty well. Thanks for asking!", sender: "sender" },
  ]);

  const sendMessage = (event) => {
    event.preventDefault();
    const messageText = event.target.message.value;
    setMessages([...messages, { text: messageText, sender: "sender" }]);
    event.target.reset();
  };

  return (
    <div className="flex flex-col h-screen justify-end">
      <div className="flex flex-col h-5/6 overflow-y-scroll">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${
              message.sender === "sender"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-200 text-gray-700 self-start"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex justify-center">
        <input
          type="text"
          name="message"
          placeholder="Type your message here..."
          className="w-4/5 p-2 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatBox;
