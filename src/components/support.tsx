import { useEffect } from "react";
// import { MessageCircle } from "lucide-react";
import { FaEnvelope } from "react-icons/fa";

declare global {
  interface Window {
    ChatraID: string;
    Chatra?: any;
  }
}

const SupportBot = () => {
  // const [chatraReady, setChatraReady] = useState(false);

//   useEffect(() => {
   
//     window.ChatraID = "ZzBSDsiThaoDyxpLc";

   
//     if (!document.getElementById("chatra-script")) {
//       const script = document.createElement("script");
//       script.id = "chatra-script";
//       script.src = "https://call.chatra.io/chatra.js";
//       script.async = true;

//       // Detect when Chatra is ready
//       script.onload = () => {
//   const waitForChatra = () => {
//     if (window.Chatra) {
//       setChatraReady(true);
//     } else {
//       setTimeout(waitForChatra, 100); // Retry every 100ms
//     }
//   };
//   waitForChatra();
// };


//       document.body.appendChild(script);
//     } else {
//       // If script already exists, assume it's ready
//       setChatraReady(true);
//     }
//   }, []);

   useEffect(() => {
    // Load Tawk.to script
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/687139b2c15e2e191205da16/1ivt4iok2";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  // const openChat = () => {
  //   if (window.Chatra) {
  //     window.Chatra("openChat", true);
  //   } else {
  //   //   alert("Chat is still loading, please try again in a second.");
  //   }
  // };

  return (

    <>
   
   <div className="fixed bottom-[100px] left-5 z-50 flex flex-col items-center space-y-1">
  <a href="mailto:support@cktreservetrust.online">
    <button
      className="p-3 rounded-full shadow-lg bg-red-800 hover:bg-red-700 text-white"
    >
     <FaEnvelope/>
    </button>
  </a>
  <span className="text-sm text-black font-bold">Email Us</span>
</div>



    </>
  );
};

export default SupportBot;
