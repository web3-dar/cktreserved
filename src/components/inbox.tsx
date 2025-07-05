
import { MailWarning, ShieldAlert, CreditCard } from "lucide-react";
import BottomNav from "../pages/stickyNav";
import BottomNav2 from "../pages/bottomnav2";
import SupportBot from "./support";

const messages = [
  {
    id: 1,
    icon: <ShieldAlert className="text-red-600" size={24} />,
    subject: "Transfer Restricted: Tier-2 Required",
    preview: "Your account requires Tier-2 Reserve Unlock to proceed with outbound transfers.",
    date: "July 5, 2025",
    unread: true,
  },
  {
    id: 2,
    icon: <MailWarning className="text-yellow-500" size={24} />,
    subject: "Important: Account Verification Pending",
    preview: "We noticed your profile verification is incomplete. Please update your details.",
    date: "July 3, 2025",
    unread: true,
  },
  {
    id: 3,
    icon: <CreditCard className="text-green-600" size={24} />,
    subject: "Card Issuance Notice",
    preview: "Your virtual debit card has been approved and will be issued shortly.",
    date: "July 1, 2025",
    unread: true,
  },
];

const InboxPage = () => {
  return (
    <>
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-red-800">📥 Inbox – Ckt Reserved Trust Bank</h1>
      
      <ul className="space-y-4">
        {messages.map((msg) => (
          <li
            key={msg.id}
            className={`border rounded-lg p-4 shadow-sm hover:shadow-md transition flex items-start gap-4 bg-white ${
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
    <BottomNav/>
    <BottomNav2/>
    <SupportBot/>
    </>
  );
};

export default InboxPage;
