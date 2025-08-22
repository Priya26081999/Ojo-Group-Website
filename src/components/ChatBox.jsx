import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

function ChatBox() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
     
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        >
          <MessageCircle size={28} />
        </button>
      )}

      
      {open && (
        <div className="w-80 sm:w-96 bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col">
        
          <div className="bg-green-600 text-white px-4 py-3 flex justify-between items-center">
            <h3 className="font-semibold">Chat with Us</h3>
            <button onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
          </div>

         
          <div className="flex-1 p-4 overflow-y-auto space-y-2 text-sm">
            {messages.length === 0 ? (
              <p className="text-gray-500 text-center">No messages yet...</p>
            ) : (
              messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg max-w-[70%] ${
                    msg.sender === "user"
                      ? "bg-green-100 self-end ml-auto"
                      : "bg-gray-200"
                  }`}
                >
                  {msg.text}
                </div>
              ))
            )}
          </div>

         
          <div className="flex border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 text-sm outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-green-600 text-white px-4 hover:bg-green-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBox;
