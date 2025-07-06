import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

declare global {
  interface Window {
    ChatraID: string;
    Chatra?: any;
  }
}

const SupportBot = () => {
  const [chatraReady, setChatraReady] = useState(false);

  useEffect(() => {
    // Set Chatra ID
    window.ChatraID = "mbWC7AxrC8n5Hh5zK";

    // Load Chatra script
    if (!document.getElementById("chatra-script")) {
      const script = document.createElement("script");
      script.id = "chatra-script";
      script.src = "https://call.chatra.io/chatra.js";
      script.async = true;

      // Detect when Chatra is ready
      script.onload = () => {
        setChatraReady(true);
      };

      document.body.appendChild(script);
    } else {
      // If script already exists, assume it's ready
      setChatraReady(true);
    }
  }, []);

  const openChat = () => {
    if (window.Chatra) {
      window.Chatra("openChat", true);
    } else {
    //   alert("Chat is still loading, please try again in a second.");
    }
  };

  return (
    <div className="fixed bottom-[100px] right-5 z-50 flex flex-col items-center space-y-1">
      <button
        className={`p-3 rounded-full shadow-lg ${
          chatraReady ? "bg-red-800 hover:bg-red-700" : "bg-gray-400 cursor-not-allowed"
        } text-white`}
        onClick={openChat}
        disabled={!chatraReady}
      >
        <MessageCircle size={24} />
      </button>
      <span className="text-sm text-black font-bold">Contact Us</span>
    </div>
  );
};

export default SupportBot;
