import Navbar from "../../components/navbar"
import { Wallet } from "lucide-react"

export default function WalletPage() {
  const transactions = [
    { shopName: "Gupta General Store", points: "+150", date: "23-05-2025", isPositive: true },
    { shopName: "Gupta General Store", points: "+150", date: "23-05-2025", isPositive: true },
    { shopName: "Gupta General Store", points: "-75", date: "23-05-2025", isPositive: false },
    { shopName: "Gupta General Store", points: "+150", date: "23-05-2025", isPositive: true },
    { shopName: "Gupta General Store", points: "-75", date: "23-05-2025", isPositive: false },
    { shopName: "Gupta General Store", points: "+150", date: "23-05-2025", isPositive: true },
  ]

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      <Navbar />

      <div className="p-4">
        {/* My Wallet Header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="text-orange-500">
            <Wallet className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold">My Wallet</h1>
        </div>

        {/* Total Balance Card */}
        <div className="bg-white border-2 border-blue-400 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Total Balance</h2>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">₹</span>
            </div>
            <span className="text-4xl font-bold">124.57</span>
          </div>
        </div>

        {/* Transaction History */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="text-blue-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Transaction History</h2>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 mb-4 px-4">
            <div className="font-semibold text-lg">Shop Name</div>
            <div className="font-semibold text-lg text-center">Points</div>
            <div className="font-semibold text-lg text-right">Date</div>
          </div>

          {/* Transaction List */}
          <div className="space-y-3">
            {transactions.map((transaction, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="grid grid-cols-3 gap-4 items-center">
                  <div className="font-medium">{transaction.shopName}</div>
                  <div
                    className={`text-center font-semibold ${transaction.isPositive ? "text-green-500" : "text-red-500"}`}
                  >
                    {transaction.points}
                  </div>
                  <div className="text-right text-gray-600">{transaction.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
