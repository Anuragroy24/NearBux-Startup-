"use client"

import Image from "next/image"
// Update the import path below if your Button component is located elsewhere
import { Button } from "../../components/ui/button"
// Update the path below to the correct relative path if needed
import Navbar from "../../components/navbar"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"
import { ShoppingCart } from "lucide-react"

export default function CartPage() {
  const [quantities, setQuantities] = useState([1, 1, 1])

  const itemPrice = 400
  const totalPrice = quantities.reduce((sum, qty) => sum + qty * itemPrice, 0)
  const discount = 200
  const finalAmount = totalPrice - discount

  const updateQuantity = (index: number, value: number) => {
    const newQuantities = [...quantities]
    newQuantities[index] = Math.max(1, value)
    setQuantities(newQuantities)
  }

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      <Navbar />

      <div className="p-4 border-b flex items-center">
        <div className="text-orange-500">
          <ShoppingCart className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-bold ml-2">My Cart</h1>
      </div>

      <div className="p-4 border-b">
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-2xl font-bold">Lkame</h2>
          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">4.0 ★</span>
        </div>
      </div>

      {/* Cart Items */}
      <div className="space-y-3 p-4">
        {[0, 1, 2].map((index) => (
          <div key={index} className="bg-gray-200 p-3 rounded-lg flex items-center">
            <div className="w-20 h-20 bg-orange-200 rounded-md overflow-hidden relative mr-3">
              <Image src="/placeholder.svg?height=80&width=80" alt="Black T-shirt" fill className="object-cover" />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold">Black Men's T-shirt</h3>
              <p className="text-lg">₹ {itemPrice}</p>
            </div>

            <div className="flex items-center border rounded-md bg-white">
              <Button
                variant="ghost"
                size="icon"
                className="text-blue-500 h-8 w-8"
                onClick={() => updateQuantity(index, quantities[index] - 1)}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{quantities[index]}</span>
              <Button
                variant="ghost"
                size="icon"
                className="text-blue-500 h-8 w-8"
                onClick={() => updateQuantity(index, quantities[index] + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Total</h3>
          <div className="border rounded-md px-3 py-2 bg-white min-w-[150px] text-right">
            <span className="mr-2">₹</span>
            <span>{totalPrice}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Discount</h3>
          <div className="flex items-center">
            <div className="border rounded-md px-3 py-2 bg-white min-w-[150px] text-right">
              <span className="mr-2">₹</span>
              <span>{discount}</span>
            </div>
            <Button variant="blue" className="ml-2 rounded-md">
              View Offers
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Amount</h3>
          <div className="border rounded-md px-3 py-2 bg-white min-w-[150px] text-right">
            <span className="mr-2">₹</span>
            <span>{finalAmount}</span>
          </div>
        </div>

        <Button variant="blue" className="w-full py-6 text-lg rounded-md mt-6">
          Order
        </Button>
      </div>
    </div>
  )
}
