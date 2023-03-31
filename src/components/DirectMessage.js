import { useState } from "react";
import axios from "axios";

function DirectMessage() {
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/messages", {
        sender,
        receiver,
        message,
      });
      console.log(res.data);
      setSender("");
      setReceiver("");
      setMessage("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto ">
      <div className="mb-4 mr-2 ml-2">
        <label htmlFor="sender" className="block text-gray-700 font-bold mb-2">
          Sender:
        </label>
        <input
          type="text"
          id="sender"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4 mr-2 ml-2">
        <label
          htmlFor="receiver"
          className="block text-gray-700 font-bold mb-2"
        >
          Receiver:
        </label>
        <input
          type="text"
          id="receiver"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4 mr-2 ml-2">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          Message:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className=" mr-2 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Send
      </button>
    </form>
  );
}

export default DirectMessage;