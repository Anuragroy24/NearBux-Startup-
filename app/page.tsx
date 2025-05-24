"use client"

import Image from "next/image"
import { Search, ChevronLeft, ChevronRight, Mic } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { useState } from "react"
import Navbar from "../components/navbar"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 3

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <Navbar />

      {/* Featured Shops */}
      <div className="p-4">
        <h2 className="text-blue-500 text-xl font-bold text-center mb-4">Featured Shops Near You</h2>

        <div className="relative rounded-lg p-4 shadow-sm" style={{ backgroundColor: "oklch(90.1% 0.058 230.902)" }}>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-blue-500" />
          </button>

          <div className="flex flex-col">
            <div className="flex justify-between mb-2">
              <div>
                <h3 className="text-blue-900 font-semibold text-lg">Lkame</h3>
                <div className="flex items-center">
                  <span className="text-sm mr-1">4.0</span>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-2">Style that speaks – fashion for every you.</p>
            <p className="text-xs text-gray-500 mb-3">Address : AK-3,hastings/near Gupta electronics</p>

            <div className="relative h-40 w-full mb-3 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=160&width=400"
                alt="Lkame store front"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex justify-between items-center">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-4 py-1 h-8 rounded-full flex items-center gap-1">
                Shop Now
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>

              <div className="flex gap-1">
                {[0, 1, 2].map((dot, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${i === currentSlide ? "bg-blue-500" : "bg-gray-300"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-blue-500" />
          </button>
        </div>
      </div>

      {/* Tabs and Content */}
      <div className="px-4">
        <Tabs defaultValue="shops" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-200 rounded-lg p-1">
            <TabsTrigger
              value="shops"
              className="rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-500 data-[state=active]:shadow-sm"
            >
              Shops
            </TabsTrigger>
            <TabsTrigger
              value="orders"
              className="rounded-md data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-sm"
            >
              My Orders
            </TabsTrigger>
          </TabsList>

          <TabsContent value="shops" className="mt-4">
            <div className="flex gap-2 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Search By Shop Name" className="pl-10 pr-10 py-2 text-sm bg-white rounded-full" />
                <Mic className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-4 h-4" />
              </div>
              <Button
                variant="outline"
                className="bg-blue-500 text-white hover:bg-blue-600 rounded-full flex items-center gap-1 px-4"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"
                  />
                </svg>
                Filter
              </Button>
            </div>

            <div className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white p-3 rounded-lg shadow-sm flex gap-3">
                  <div className="flex-1">
                    <h3 className="font-semibold">Lkame</h3>
                    <div className="flex items-center">
                      <span className="text-xs mr-1">4.0</span>
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3 h-3 ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Category : Clothing</p>
                    <p className="text-xs text-gray-500 mt-1">Address : AK-3,hastings/near Gupta electronics</p>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-0.5 h-6 mt-2 rounded-full">
                      Shop Now
                    </Button>
                  </div>
                  <div className="w-20 h-20 relative rounded-lg overflow-hidden">
                    <Image src="/placeholder.svg?height=80&width=80" alt="Lkame store" fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="orders" className="mt-4">
            <div className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg">Lkame</h3>
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">4.0</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Ordered Date :</span> 21-05-2025
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        <span className="font-medium">Address :</span> AK-3,hastings/near Gupta electronics
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">
                        <span className="text-gray-600">Order Total :</span> ₹1500
                      </p>
                    </div>
                  </div>

                  <Button className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-4 py-1 h-7 rounded-full">
                    View More
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
