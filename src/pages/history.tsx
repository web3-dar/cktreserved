import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BottomNav from "./stickyNav";

interface Transaction {
  type: "Credit" | "Debit";
  amount: number;
  date: string;
  label: string;
  icon: string;
}

const generateTransactions = (total: number): Transaction[] => {
  const transactions: Transaction[] = [];
  let remainingCredit = total;
  const creditLabels = ["Payment Received", "Bank Transfer", "Cash In"];
  const debitLabels = ["Tax", "Service Fee", "Maintenance", "VAT"];

  const creditCount = Math.floor(Math.random() * 2) + 4; // 4–5 credits

  // Generate credits
  for (let i = 0; i < creditCount - 1; i++) {
    const amt = parseFloat((Math.random() * (remainingCredit / 2) + 20).toFixed(2));
    remainingCredit -= amt;
    transactions.push({
      type: "Credit",
      amount: amt,
      label: creditLabels[i % creditLabels.length],
      icon: "💰",
      date: new Date(Date.now() - Math.random() * 5 * 86400000)
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
    });
  }
  transactions.push({
    type: "Credit",
    amount: parseFloat(remainingCredit.toFixed(2)),
    label: "Final Deposit",
    icon: "💸",
    date: new Date().toISOString().slice(0, 19).replace("T", " "),
  });

  // Generate 2–3 random debits
  const debitCount = Math.floor(Math.random() * 2) + 2;
  for (let i = 0; i < debitCount; i++) {
    const amt = parseFloat((Math.random() * 30 + 10).toFixed(2));
    transactions.push({
      type: "Debit",
      amount: amt,
      label: debitLabels[i % debitLabels.length],
      icon: "🧾",
      date: new Date(Date.now() - Math.random() * 3 * 86400000)
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
    });
  }

  // Sort by newest date
  return transactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

const TransactionHistory: React.FC = () => {
  const [userAmount, setUserAmount] = useState<number>(0);
  const [allTransactions, setAllTransactions] = useState<Transaction[]>([]);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
    // const [userAmount, setUserAmount] = useState<number>(0);
  // const [userImage, setUserImage] = useState<string>("");
  // const [showBalance, setShowBalance] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>("");
  // const [accountType, setAccountType] = useState<string>("");
  // const [subType, setSubType] = useState<string>("");
  // const [userEmail, setUserEmail] = useState<string>("");
  const [userLastName, setLastName] = useState<string>("");
  // const [useMidname, setMiddleName] = useState<string>("");
  const [AcctNum, setAcctNumber] = useState<string>("");

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    console.log(userAmount)
    if (storedUser) {
      const user = JSON.parse(storedUser);
      const amount = user.amount || 0;
       setUserAmount(user.amount || 0);
      setUserName(user.firstName || "");
      setLastName(user.lastName || "");
      // setMiddleName(user.middleName || "");
      // setAccountType(user.accountType || "Nll");
      // setSubType(user.accountSubType || "");
      // setUserEmail(user.email || "");
      setAcctNumber(user.accountNumber || "");
      setUserAmount(amount);
      setAllTransactions(generateTransactions(amount));
    }
  }, []);

  const inflow = allTransactions
    .filter((t) => t.type === "Credit")
    .reduce((sum, t) => sum + t.amount, 0);

  const outflow = allTransactions
    .filter((t) => t.type === "Debit")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <>
      <div className="p-6 min-h-screen bg-gray-100">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <Link to="/dashboard">
            <button className="text-purple-600 text-xl">&larr;</button>
          </Link>
          <h1 className="text-lg font-bold text-black"> Recent Transactions </h1>
          <button className="text-purple-600 text-xl">&#x21bb;</button>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-sm text-gray-500">Inflow</h2>
            <p className="text-xl font-bold text-green-600">+${inflow.toFixed(2)}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-sm text-gray-500">Outflow</h2>
            <p className="text-xl font-bold text-red-600">-${outflow.toFixed(2)}</p>
          </div>
        </div>

        {/* Transactions */}
        <div className="space-y-4">
          {allTransactions.map((transaction, index) => (
            <div
              key={index}
              onClick={() => setSelectedTransaction(transaction)}
              className="cursor-pointer bg-white p-4 rounded-xl shadow-md hover:bg-gray-50 transition-all flex justify-between items-center"
            >
              <div className="flex gap-3 items-start">
                <span className="text-xl">{transaction.icon}</span>
                <div>
                  <p
                    className={`font-semibold ${
                      transaction.type === "Debit"
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {transaction.label}
                  </p>
                  <p className="text-xs text-gray-400">{transaction.date}</p>
                </div>
              </div>
              <p
                className={`font-bold text-lg ${
                  transaction.type === "Debit"
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {transaction.type === "Credit" ? "+$" : "-$"}
                {transaction.amount.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>

     {selectedTransaction && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4">
    <div className="bg-white w-full max-w-2xl p-6 rounded-md shadow-xl relative">
      <button
        onClick={() => setSelectedTransaction(null)}
        className="absolute top-2 right-4 text-gray-500 text-xl hover:text-black"
      >
        &times;
      </button>

      {/* Header */}
      <h2 className="text-xl font-bold text-center mb-6">CKT Reserved & Trust Bank</h2>

      {/* Account Info */}
      <div className="mb-6 text-sm text-gray-700">
        <p>Welcome, {userName} {userLastName}</p>
        <p>Account Number: <strong>{AcctNum}</strong></p>
        <p>Account Balance: <strong>${userAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</strong></p>
        <p>Last Deposit Date: <strong>June 25, 2025</strong></p>
        <p>Deposit Reference Number: <strong>2234-WN7823490</strong></p>
        <p className="text-green-600 font-semibold mt-2">Status: Funds Available for Payout</p>
      </div>

      {/* Transaction Table */}
      <div className="overflow-x-auto">
        <table className="w-full border text-sm text-left mb-6">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="border px-3 py-2">Date</th>
              <th className="border px-3 py-2">Type</th>
              <th className="border px-3 py-2">Amount</th>
              <th className="border px-3 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">2025-06-25</td>
              <td className="border px-3 py-2">Deposit</td>
              <td className="border px-3 py-2">${userAmount}</td>
              <td className="border px-3 py-2">Success</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">2025-06-27</td>
              <td className="border px-3 py-2">Transfer Request</td>
              <td className="border px-3 py-2">$0.00</td>
              <td className="border px-3 py-2">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Note */}
      <p className="text-xs text-gray-500 text-center">
        This dashboard reflects the most current status of your winnings under the Camellia K Talachi Mega Bonus Program.<br />
        Your deposit has been securely processed by CKT National Reserve. If you have any questions or would like to request a payout, please contact your claim specialist directly.
      </p>
    </div>
  </div>
)}


      <BottomNav />
    </>
  );
};

export default TransactionHistory;
