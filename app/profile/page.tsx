import Image from "next/image"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { ChevronLeft, LogOut } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white p-4 flex items-center gap-3 border-b">
        <Link href="/" className="text-gray-600">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold">My Account</h1>
      </div>

      <div className="p-4">
        {/* Profile Section */}
        <div className="bg-white rounded-lg p-4 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 relative rounded-full overflow-hidden">
              <Image src="/placeholder.svg?height=64&width=64" alt="Profile picture" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Priyanka Sharma</h2>
              <p className="text-gray-500 text-sm">priyankasharma1234@gmail.com</p>
            </div>
          </div>
          <Button variant="blue" className="rounded-md px-6">
            Edit
          </Button>
        </div>

        {/* Personal Information */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Personal Information</h3>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <Input
                  type="text"
                  value="+91 12345 12345"
                  className="bg-gray-100 border-gray-300 rounded-md"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Pin</label>
                <Input type="text" value="311001" className="bg-gray-100 border-gray-300 rounded-md" readOnly />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Address</label>
                <Input type="text" placeholder="Address" className="bg-gray-100 border-gray-300 rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Areaname</label>
                <Input type="text" placeholder="areaname" className="bg-gray-100 border-gray-300 rounded-md" />
              </div>
            </div>
          </div>
        </div>

        {/* Others Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Others</h3>

          <div className="space-y-3">
            <Link href="#" className="block text-blue-500 text-lg">
              Help & Support
            </Link>
            <Link href="#" className="block text-blue-500 text-lg">
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* Logout Button */}
        <div className="flex justify-center">
          <Button
            variant="destructive"
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded-md flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  )
}
