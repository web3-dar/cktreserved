import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowCircleLeft,
  FaPiggyBank,
  FaBitcoin,
  FaChartLine,
  FaHandHoldingUsd,
  FaLandmark,
  FaHandshake,
  FaHome,
} from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import BottomNav from "../pages/stickyNav";

import HelpSection from "../Home/hero2";
import BlogSection from "../Home/blogsection";

const investments = [
  {
    id: 1,
    name: "Savings Account",
    icon: <FaPiggyBank />,
    color: "text-pink-600",
    description: "A savings account lets you safely store money and earn a small interest over time.",
  },
  {
    id: 2,
    name: "Cryptocurrency",
    icon: <FaBitcoin />,
    color: "text-yellow-500",
    description: "Invest in digital currencies like Bitcoin or Ethereum. High risk, high reward.",
  },
  {
    id: 3,
    name: "Stocks & ETFs",
    icon: <FaChartLine />,
    color: "text-green-600",
    description: "Buy shares of companies or ETFs for long-term growth and dividends.",
  },
  {
    id: 4,
    name: "Mutual Funds",
    icon: <FaHandHoldingUsd />,
    color: "text-indigo-600",
    description: "Pooled investments managed by professionals. Good for diversification.",
  },
  {
    id: 5,
    name: "Government Bonds",
    icon: <FaLandmark />,
    color: "text-blue-500",
    description: "Low-risk fixed-income securities issued by governments.",
  },
  {
    id: 6,
    name: "Real Estate",
    icon: <FaHome />,
    color: "text-orange-500",
    description: "Invest in residential or commercial properties for rental income and growth.",
  },
  {
    id: 7,
    name: "Partnerships",
    icon: <FaHandshake />,
    color: "text-purple-600",
    description: "Invest in or partner with businesses to share in their profits.",
  },
];

const PaymentPage = () => {
  const navigate = useNavigate();
  const [selectedInvestment, setSelectedInvestment] = useState<any>(null);

  const closeModal = () => setSelectedInvestment(null);

  return (
    <>
    
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex flex-col items-center px-4 py-6">
        <header className="w-full flex items-center justify-between py-4 border-b max-w-4xl">
          <button className="text-2xl text-purple-600 hover:text-purple-800 transition" onClick={() => navigate(-1)}>
            <FaArrowCircleLeft />
          </button>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Investment Options</h1>
          <div className="w-8" />
        </header>

        <div className="w-full max-w-4xl mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {investments.map((item) => (
            <div
              key={item.id}
              className="bg-white backdrop-blur-sm bg-opacity-80 border border-gray-100 shadow-lg rounded-2xl p-6 flex items-center justify-between hover:shadow-2xl transition-all cursor-pointer"
              onClick={() => setSelectedInvestment(item)}
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 ${item.color}`}>
                  {item.icon}
                </div>
                <span className="text-sm font-semibold text-gray-800">{item.name}</span>
              </div>
              <AiOutlineInfoCircle className="text-gray-400 hover:text-gray-600 text-lg" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedInvestment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-xl">
            <h2 className="text-xl font-bold text-gray-800 mb-4">{selectedInvestment.name}</h2>
            <p className="text-sm text-gray-600">{selectedInvestment.description}</p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
<HelpSection/>
<BlogSection/>
      <BottomNav />
    </>
  );
};

export default PaymentPage;
