import { useState } from "react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMsg = { role: "user", text: message };
    setChat([...chat, userMsg]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      });

      const data = await res.json();

      const botMsg = { role: "bot", text: data.reply };

      setChat((prev) => [...prev, botMsg]);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 flex flex-col h-[80vh]">

      {/* TITLE */}
      <h1 className="text-3xl font-semibold text-center mb-6">
        AI Career Assistant 🤖
      </h1>

      {/* CHAT BOX */}
      <div className="flex-1 overflow-y-auto bg-white p-4 rounded-xl shadow border">

        {chat.length === 0 && (
          <p className="text-gray-400 text-center mt-10">
            Ask anything about your career...
          </p>
        )}

        {chat.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-xl max-w-xs ${
                msg.role === "user"
                  ? "bg-[#5B6FFF] text-white"
                  : "bg-gray-100"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <p className="text-gray-400 text-sm">AI is typing...</p>
        )}

      </div>

      {/* INPUT */}
      <div className="flex mt-4 gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask your question..."
          className="flex-1 p-3 border rounded-full outline-none"
        />

        <button
          onClick={sendMessage}
          className="bg-[#5B6FFF] text-white px-6 py-2 rounded-full hover:bg-[#4a5be0]"
        >
          Send
        </button>
      </div>

    </div>
  );
};

export default Chat;