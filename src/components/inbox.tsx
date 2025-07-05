import  { useState } from "react";
import { MailWarning, ShieldAlert, CreditCard, Info, CheckCircle } from "lucide-react";
import BottomNav from "../pages/stickyNav";
import BottomNav2 from "../pages/bottomnav2";
import SupportBot from "./support";

type Message = {
  id: number;
  icon: JSX.Element;
  subject: string;
  preview: string;
  full: string;
  date: string;
  unread: boolean;
};



const messages: Message[] = [
  {
    id: 1,
    icon: <ShieldAlert className="text-red-600" size={24} />,
    subject: "Transfer Restricted: Tier-2 Required",
    preview: "Your account requires Tier-2 Reserve Unlock to proceed with outbound transfers.",
    full: `🚫 Transfer Access Restricted – Tier-2 Compliance Required.
    
Your account must fulfill all Tier-2 clearance requirements before you can make any transfers. A reserve unlock payment of $107,544.00 USD is required.`,
    date: "July 5, 2025",
    unread: true,
  },
  {
    id: 2,
    icon: <MailWarning className="text-yellow-500" size={24} />,
    subject: "Important: Account Verification Pending",
    preview: "We noticed your profile verification is incomplete. Please update your details.",
    full: `Your profile verification is still pending. Kindly log into your account to upload the required documents to avoid service disruption.`,
    date: "July 3, 2025",
    unread: true,
  },
  {
    id: 3,
    icon: <CreditCard className="text-green-600" size={24} />,
    subject: "Card Issuance Notice",
    preview: "Your virtual debit card has been approved and will be issued shortly.",
    full: `Congratulations! Your virtual debit card has been approved. It will be issued to your account within 2–3 business days.`,
    date: "July 1, 2025",
    unread: true,
  },
  {
    id: 4,
    icon: <Info className="text-blue-500" size={24} />,
    subject: "New Feature: Spending Analytics",
    preview: "Track your monthly spending trends with our new dashboard analytics.",
    full: `We’ve added a new spending analytics feature in your dashboard. Log in now to explore insights into your financial habits.`,
    date: "June 29, 2025",
    unread: false,
  },
  {
    id: 5,
    icon: <CheckCircle className="text-green-500" size={24} />,
    subject: "Your Profile Has Been Verified",
    preview: "Thank you for verifying your account. You now have full access.",
    full: `We’re happy to inform you that your account verification is now complete. You now have access to all features.`,
    date: "June 25, 2025",
    unread: false,
  },
];

const InboxPage = () => {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);


  return (
    <>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-red-800 text-center"> Inbox </h1>

        <ul className="space-y-4">
          {messages.map((msg) => (
            <li
              key={msg.id}
              onClick={() => setSelectedMessage(msg)}
              className={`cursor-pointer border rounded-lg p-4 shadow-sm hover:shadow-md transition flex items-start gap-4 bg-white ${
                msg.unread ? "border-l-4 border-red-600 bg-red-50/30" : "border-gray-200"
              }`}
            >
              <div className="mt-1">{msg.icon}</div>
              <div className="flex-1">
                <h3 className={`text-base font-semibold ${msg.unread ? "text-red-700" : "text-gray-800"}`}>
                  {msg.subject}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{msg.preview}</p>
              </div>
              <div className="text-sm text-gray-500 text-right">
                <p>{msg.date}</p>
                {msg.unread && (
                  <span className="text-xs text-white bg-red-600 px-2 py-0.5 rounded-full ml-1">
                    Unread
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Message Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
            <button
              onClick={() => setSelectedMessage(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-lg"
            >
              &times;
            </button>
            <div className="mb-3">{selectedMessage.icon}</div>
            <h2 className="text-xl font-bold text-red-700 mb-2">{selectedMessage.subject}</h2>
            <p className="text-gray-700 text-sm whitespace-pre-line">{selectedMessage.full}</p>
            <p className="text-xs text-gray-400 mt-4">{selectedMessage.date}</p>
          </div>
        </div>
      )}

      <BottomNav />
      <BottomNav2 />
      <SupportBot />
    </>
  );
};

export default InboxPage;
