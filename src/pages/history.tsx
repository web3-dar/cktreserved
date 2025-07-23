import  { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import BottomNav from "./stickyNav";
import BottomNav2 from "./bottomnav2";
import SupportBot from "../components/support";
import { fetchHistoryForLoggedUser, Transaction } from "../backend/api";



const TransactionHistory = () => {
  const [userAmount, setUserAmount] = useState<number>(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [userName, setUserName] = useState<string>("");
  const [userLastName, setLastName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [visibleCount, setVisibleCount] = useState<number>(10);


   useEffect(() => {
    const loadData = async () => {
      const storedUser = localStorage.getItem("loggedInUser");
      if (!storedUser) return;

      try {
        const user = JSON.parse(storedUser);
        setUserAmount(user.amount || 0);
        setUserName(user.firstName || "");
        setLastName(user.lastName || "");

         const history = await fetchHistoryForLoggedUser(user.email);
setTransactions(history);
setLoading(false);


      } catch (err) {
        console.error("Failed to load user data or history:", err);
         setLoading(false);
      }
    };

    loadData();
  }, []);

  // const inflow = allTransactions
  //   .filter((t) => t.type === "Credit")
  //   .reduce((sum, t) => sum + t.amount, 0);

  // const outflow = allTransactions
  //   .filter((t) => t.type === "Debit")
  //   .reduce((sum, t) => sum + t.amount, 0);

  return (
    <>
       <div className="max-w-5xl mx-auto bg-white rounded-xl  overflow-hidden mt-8 p-4 md:p-8">
      <div className="text-center mb-6">
        <h2 className="text-lg md:text-xl font-semibold">ADV PLUS BANKING - 1234</h2>
        <p className="text-2xl md:text-3xl font-bold mt-2">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(userAmount)}
        </p>
        <p className="text-sm text-gray-500">Available balance</p>
      </div>

      <div className="mt-4">
        <h3 className="text-gray-600 font-semibold text-sm md:text-base mb-2">RECENT TRANSACTIONS</h3>
       {loading ? (
  <div className="space-y-4 mb-8">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="animate-pulse space-y-2 border-b pb-2 mb-8">
        <div className="h-3 w-1/4 bg-gray-300 rounded"></div>
        <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
        <div className="flex justify-between items-center mt-1">
          <div className="h-4 w-20 bg-gray-300 rounded"></div>
          <div className="h-3 w-16 bg-gray-300 rounded"></div>
        </div>
      </div>
    ))}
  </div>
) : transactions.length === 0 ? (
  <p className="text-sm text-gray-500 text-center">No transactions found.</p>
) : (
  <div className="space-y-4 mb-8">
  {[...transactions].slice(0, visibleCount).map((tx, index) => (


      <div
        key={index}
        className="border-b pb-2 cursor-pointer hover:bg-gray-50 transition mb-8"
        onClick={() => setSelectedTransaction(tx)}
      >
        <p className="text-xs text-gray-500">{tx.date}</p>
        <p className="text-sm font-medium text-gray-800">{tx.description}</p>
        <div className="flex justify-between items-center mt-1">
          <span className={`font-semibold ${tx.type === "debit" ? "text-red-500" : "text-green-600"}`}>
            {tx.amount}
          </span>
          <span className="text-xs text-gray-400">Bal: ${userAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
        </div>
      </div>

      
    ))}

    {visibleCount < transactions.length && (
  <div className="text-center mt-4">
    <button
      onClick={() => setVisibleCount(prev => prev + 10)}
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
    >
      Load More
    </button>
  </div>
)}

  </div>
)}

      </div>

      {selectedTransaction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4 md:px-8">
          <div className="bg-white w-full max-w-2xl p-6 rounded-md shadow-xl relative">
            <button
              onClick={() => setSelectedTransaction(null)}
              className="absolute top-2 right-4 text-gray-500 text-xl hover:text-black"
            >
              &times;
            </button>

            <div className="mb-6 text-sm md:text-base text-gray-700">
              <p>Welcome, {userName} {userLastName}</p>
              <p>
                Account Balance: <strong>${userAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</strong>
              </p>
              <p>Transaction Date: <strong>{selectedTransaction.date}</strong></p>
              <p>Deposit Reference Number: <strong>2234-WN7823490</strong></p>
              <p className="text-green-600 font-semibold mt-2">Status: Funds Available for Payout</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border text-sm md:text-base text-left mb-6">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="border px-3 py-2">Date</th>
                    <th className="border px-3 py-2">Description</th>
                    <th className="border px-3 py-2">Amount</th>
                    <th className="border px-3 py-2">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2">{selectedTransaction.date}</td>
                    <td className="border px-3 py-2">{selectedTransaction.description}</td>
                    <td className="border px-3 py-2">
                      <span className={selectedTransaction.type === "debit" ? "text-red-600" : "text-green-600"}>
                        {selectedTransaction.amount}
                      </span>
                    </td>
                    <td className="border px-3 py-2">
  {selectedTransaction.type.toLowerCase() === "debit" ? "Debit" : "Deposit"}
</td>

                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* <StickyBottomNav /> */}
    </div>

      {/* Transaction Modal */}
      {/* {selectedTransaction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4">
          <div className="bg-white w-full max-w-2xl p-6 rounded-md shadow-xl relative">
            <button
              onClick={() => setSelectedTransaction(null)}
              className="absolute top-2 right-4 text-gray-500 text-xl hover:text-black"
            >
              &times;
            </button>

            <h2 className="text-xl font-bold text-center mb-6">CKT Reserved & Trust Bank</h2>

            <div className="mb-6 text-sm text-gray-700">
              <p>Welcome, {userName} {userLastName}</p>
              <p>Account Number: <strong>{AcctNum}</strong></p>
              <p>Account Balance: <strong>${userAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</strong></p>
              <p>Last Deposit Date: <strong>July 19, 2025</strong></p>
              <p>Deposit Reference Number: <strong>2234-WN7823490</strong></p>
              <p className="text-green-600 font-semibold mt-2">Status: Funds Available for Payout</p>
            </div>

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
              <td className="border px-3 py-2">2025-12-07</td>
              <td className="border px-3 py-2  ">Interest (1%)</td>
              <td className="border px-3 py-2">$998.25</td>
              <td className="border px-3 py-2 ">Success</td>
            </tr>
 <tr>
              <td className="border px-3 py-2">2025-12-07</td>
              <td className="border px-3 py-2 ">Deposit</td>
              <td className="border px-3 py-2">$14,700.00</td>
              <td className="border px-3 py-2 ">Success</td>
            </tr>
 <tr>
              <td className="border px-3 py-2">2025-12-07</td>
              <td className="border px-3 py-2 ">Interest (1%)</td>
              <td className="border px-3 py-2">$998.25</td>
              <td className="border px-3 py-2 ">Success</td>
            </tr>
 <tr>
              <td className="border px-3 py-2">2025-11-07</td>
              <td className="border px-3 py-2 ">Deposit</td>
              <td className="border px-3 py-2">$300.00</td>
              <td className="border px-3 py-2 ">Success</td>
            </tr>
                    <tr>
              <td className="border px-3 py-2">2025-11-07</td>
              <td className="border px-3 py-2 ">Deposit</td>
              <td className="border px-3 py-2">$15,000.00</td>
              <td className="border px-3 py-2 ">Success</td>
            </tr>

                   
                    <tr>
              <td className="border px-3 py-2">2025-08-05</td>
              <td className="border px-3 py-2 ">Deposit</td>
              <td className="border px-3 py-2">$15,000.00</td>
              <td className="border px-3 py-2 ">Success</td>
            </tr>

                      <tr>
              <td className="border px-3 py-2">2025-07-05</td>
              <td className="border px-3 py-2 ">Interest (1%)</td>
              <td className="border px-3 py-2">$998.25</td>
              <td className="border px-3 py-2 ">Success</td>
            </tr>

                  <tr>
              <td className="border px-3 py-2">2025-07-03</td>
              <td className="border px-3 py-2">Service Fee</td>
              <td className="border px-3 py-2">$45.00</td>
              <td className="border px-3 py-2">Success</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">2025-07-03</td>
              <td className="border px-3 py-2">Tax</td>
              <td className="border px-3 py-2">$30.00</td>
              <td className="border px-3 py-2">Success</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">2025-07-03</td>
              <td className="border px-3 py-2">Maintenance</td>
              <td className="border px-3 py-2">$100.00</td>
              <td className="border px-3 py-2">Success</td>
            </tr>

             <tr>
              <td className="border px-3 py-2">2025-07-03</td>
              <td className="border px-3 py-2">Deposit</td>
              <td className="border px-3 py-2">$1,000,000.00</td>
              <td className="border px-3 py-2">Success</td>
            </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-500 text-center">
              This dashboard reflects the most current status of your winnings under the Camellia K Talachi Mega Bonus Program.<br />
              Your deposit has been securely processed by CKT National Reserve. If you have any questions or would like to request a payout, please contact your claim specialist directly.
            </p>
          </div>
        </div>
      )} */}

      <BottomNav />
      <BottomNav2 />
      <SupportBot/>
    </>
  );
};

export default TransactionHistory;
