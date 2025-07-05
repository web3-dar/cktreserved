import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react"; // Optional: or use any icon

const SupportBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState<string>("");
//   const [userLastName, setLastName] = useState<string>("");



   useEffect(() => {
      const storedUser = localStorage.getItem("loggedInUser");
      if (storedUser) {
        const user = JSON.parse(storedUser);
      
        setUserName(user.firstName || "");
        // setLastName(user.lastName || "");
       
      }
    }, []);



  const [messages, setMessages] = useState([
    { sender: "bot", text: ` Hello! ${userName} How can I help you today?` },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botReply = getBotReply(input);
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    }, 500);

    setInput("");
  };

const getBotReply = (question: string) => {
  const lower = question.toLowerCase();

  if (lower.includes("transfer")) {
    return `🚫 Transfer Access Restricted – Tier-2 Compliance Required.

Outbound transfers from this account are currently unavailable.

Per U.S. Reserve Compliance Policy and digital asset routing standards, your account must fulfill all Tier-2 clearance requirements prior to engaging in any financial transactions. For help, contact support at contact@cktreservedtrustbank.com.`  }

  if (lower.includes("loan")) {
    return "You can apply for a loan via your dashboard. Visit the 'Loans' section for available offers.";
  }

  if (lower.includes("account")) {
    return "For account updates or changes, please log in to your profile or contact our support team.";
  }

  if (lower.includes("card")) {
    return "To request or block a card, go to the 'Cards' tab in your dashboard.";
  }

  if (lower.includes("fraud") || lower.includes("unauthorized")) {
    return "Please report any suspicious activity immediately to contact@cktreservedtrustbank.com.";
  }

  if (lower.includes("contact") || lower.includes("support")) {
    return "You can reach us anytime at contact@cktreservedtrustbank.com.";
  }

  if (lower.includes("open account")) {
    return "To open a new account, visit https://cktreservedtrustbank.com and click 'Open Account'.";
  }

  if (lower.includes("balance")) {
    return "To check your balance, log in to your online banking dashboard.";
  }

  return "I'm not sure about that. Please contact us at contact@cktreservedtrustbank.com or visit https://cktreservedtrustbank.com.";
};



  return (
    <>
      {/* Sticky chat button */}
     <div className="fixed bottom-[100px] right-5 z-50 flex flex-col items-center space-y-1">
  <button
    className="bg-red-800 hover:bg-red-700 text-white p-3 rounded-full shadow-lg"
    onClick={() => setIsOpen(!isOpen)}
  >
    <MessageCircle size={24} />
  </button>
  <span className="text-sm text-gray-700 dark:text-gray-200">Contact Us</span>
</div>


      {/* Support Chat Box */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 max-w-md w-full border rounded-2xl shadow-lg flex flex-col h-[500px] bg-white z-50">
          <div className="bg-black text-white py-3 px-5 rounded-t-2xl font-bold flex justify-between items-center">
            <span>Support Bot</span>
            <button onClick={() => setIsOpen(false)} className="text-white text-sm">X</button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-100">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-red-800 text-white self-end ml-auto"
                    : "bg-white text-gray-800 self-start mr-auto border"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-3 bg-white flex items-center gap-2 border-t">
            <input
              type="text"
              className="flex-1 border rounded-full px-4 py-2 outline-none"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-400 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SupportBot;
