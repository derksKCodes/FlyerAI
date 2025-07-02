"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Palette,
  Plus,
  FileImage,
  Download,
  Share,
  Edit,
  Trash2,
  Crown,
  UserIcon,
  Settings,
  LogOut,
  Calendar,
} from "lucide-react"
import Link from "next/link"

interface Design {
  id: string
  title: string
  thumbnail: string
  createdAt: string
  status: "draft" | "completed"
  downloads: number
}

interface AppUser {
  id: string
  name: string
  email: string
  plan: string
}

export default function DashboardPage() {
  const [user, setUser] = useState<AppUser | null>(null)
  const [designs, setDesigns] = useState<Design[]>([
    {
      id: "1",
      title: "Summer Sale Flier",
      thumbnail: "/placeholder.svg?height=200&width=150",
      createdAt: "2024-01-15",
      status: "completed",
      downloads: 5,
    },
    {
      id: "2",
      title: "Restaurant Menu",
      thumbnail: "/placeholder.svg?height=200&width=150",
      createdAt: "2024-01-14",
      status: "draft",
      downloads: 0,
    },
  ])

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      // Redirect to sign in if not authenticated
      window.location.href = "/auth/signin"
    }
  }, [])

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" })
      localStorage.removeItem("user")
      window.location.href = "/"
    } catch (error) {
      console.error("Logout failed:", error)
      // Force logout even if API fails
      localStorage.removeItem("user")
      window.location.href = "/"
    }
  }

  const handleDeleteDesign = async (designId: string) => {
    if (confirm("Are you sure you want to delete this design?")) {
      setDesigns(designs.filter((d) => d.id !== designId))
    }
  }

  // Show loading if user data is not loaded yet
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Palette className="w-5 h-5 text-white" />
          </div>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              FlyerAI
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="/editor">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
                <Plus className="w-4 h-4 mr-2" />
                New Design
              </Button>
            </Link>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <UserIcon className="w-4 h-4" />
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-gray-500">{user.plan} plan</p>
              </div>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
          <p className="text-gray-600">Create stunning fliers and grow your business</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Designs</CardTitle>
              <FileImage className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{designs.length}</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Downloads</CardTitle>
              <Download className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{designs.reduce((sum, d) => sum + d.downloads, 0)}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Designs created</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Plan Status</CardTitle>
              <Crown className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold capitalize">{user.plan}</div>
              <Link href="/pricing">
                <p className="text-xs text-purple-600 hover:underline cursor-pointer">Upgrade plan</p>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="designs" className="space-y-6">
          <TabsList>
            <TabsTrigger value="designs">My Designs</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>

          <TabsContent value="designs" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">My Designs</h2>
              <Link href="/editor">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New
                </Button>
              </Link>
            </div>

            {designs.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <FileImage className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No designs yet</h3>
                  <p className="text-gray-600 mb-4">Create your first flier to get started</p>
                  <Link href="/editor">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
                      <Plus className="w-4 h-4 mr-2" />
                      Create Your First Design
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {designs.map((design) => (
                  <Card key={design.id} className="group hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={design.thumbnail || "/placeholder.svg"}
                          alt={design.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge variant={design.status === "completed" ? "default" : "secondary"}>
                            {design.status}
                          </Badge>
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-t-lg flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2">
                            <Link href={`/editor?design=${design.id}`}>
                              <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                                <Edit className="w-4 h-4" />
                              </Button>
                            </Link>
                            <Button
                              size="sm"
                              className="bg-white text-gray-900 hover:bg-gray-100"
                              onClick={() => {
                                // Simple download simulation
                                const link = document.createElement("a")
                                link.download = `${design.title}.png`
                                link.href = design.thumbnail
                                link.click()
                              }}
                            >
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              className="bg-white text-gray-900 hover:bg-gray-100"
                              onClick={() => {
                                if (navigator.share) {
                                  navigator.share({
                                    title: design.title,
                                    text: `Check out my ${design.title} created with FlyerAI!`,
                                    url: window.location.href,
                                  })
                                } else {
                                  navigator.clipboard.writeText(window.location.href)
                                  alert("Link copied to clipboard!")
                                }
                              }}
                            >
                              <Share className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-1">{design.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Created {new Date(design.createdAt).toLocaleDateString()}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{design.downloads} downloads</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteDesign(design.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="templates">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">Browse Templates</h2>
              <p className="text-gray-600 mb-6">Choose from hundreds of professional templates</p>
              <Link href="/templates">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600">Browse All Templates</Button>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="account" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Manage your account settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <p className="text-gray-600">{user.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <p className="text-gray-600">{user.email}</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Current Plan</label>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge className="capitalize">{user.plan}</Badge>
                    {user.plan === "free" && (
                      <Link href="/pricing">
                        <Button size="sm" variant="outline">
                          Upgrade
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <Button
                    variant="outline"
                    onClick={() => {
                      // Simple profile edit simulation
                      const newName = prompt("Enter new name:", user.name)
                      if (newName) {
                        const updatedUser = { ...user, name: newName }
                        setUser(updatedUser)
                        localStorage.setItem("user", JSON.stringify(updatedUser))
                        alert("Profile updated successfully!")
                      }
                    }}
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
