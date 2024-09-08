import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Users, Search, Menu, X, ChevronRight, Bell, BookOpen, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-blue-900">
      <header className="sticky top-0 z-50 w-full border-b border-emerald-700 bg-emerald-900/90 backdrop-blur supports-[backdrop-filter]:bg-emerald-900/60">
        <div className="container flex h-16 items-center justify-between">
          <Link className="flex items-center justify-center space-x-2" href="#">
            <Zap className="h-6 w-6 text-blue-400" />
            <span className="text-2xl font-bold text-emerald-100">ClubHub</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link className="text-sm font-medium hover:text-blue-400 transition-colors text-emerald-100" href="#">
              Home
            </Link>
            <Link className="text-sm font-medium hover:text-blue-400 transition-colors text-emerald-100" href="#">
              Clubs
            </Link>
            <Link className="text-sm font-medium hover:text-blue-400 transition-colors text-emerald-100" href="#">
              Events
            </Link>
            <Link className="text-sm font-medium hover:text-blue-400 transition-colors text-emerald-100" href="#">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-emerald-100">
              <Bell className="h-5 w-5" />
            </Button>
            <Button className="hidden md:inline-flex">Sign Up</Button>
            <Button
              className="md:hidden"
              size="icon"
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4 bg-emerald-800">
            <Link className="text-sm font-medium hover:text-blue-400 transition-colors text-emerald-100" href="#">
              Home
            </Link>
            <Link className="text-sm font-medium hover:text-blue-400 transition-colors text-emerald-100" href="#">
              Clubs
            </Link>
            <Link className="text-sm font-medium hover:text-blue-400 transition-colors text-emerald-100" href="#">
              Events
            </Link>
            <Link className="text-sm font-medium hover:text-blue-400 transition-colors text-emerald-100" href="#">
              About
            </Link>
            <Button>Sign Up</Button>
          </nav>
        </div>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-emerald-100 via-blue-200 to-emerald-100">
                  Discover Your Passion, Connect with Others
                </h1>
                <p className="mx-auto max-w-[700px] text-emerald-200 md:text-xl dark:text-emerald-200">
                  Join clubs, attend events, and build lasting connections in our vibrant community.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="flex-1 bg-emerald-800 border-emerald-700 text-emerald-100 placeholder-emerald-400"
                    placeholder="Search clubs or events"
                    type="search"
                  />
                  <Button type="submit">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-800/50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-emerald-100">Explore Campus Life</h2>
            <Tabs defaultValue="featured" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="clubs">Clubs</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
              </TabsList>
              <TabsContent value="featured">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <FeaturedCard
                    title="Tech Innovators Meetup"
                    description="Join us for an evening of cutting-edge tech talks and networking opportunities."
                    image="/placeholder.svg?height=200&width=400"
                    link="#"
                  />
                  <FeaturedCard
                    title="Art in Motion Exhibition"
                    description="Experience a dynamic showcase of student artwork and interactive installations."
                    image="/placeholder.svg?height=200&width=400"
                    link="#"
                  />
                  <FeaturedCard
                    title="Global Cultures Festival"
                    description="Celebrate diversity with international cuisines and cultural performances."
                    image="/placeholder.svg?height=200&width=400"
                    link="#"
                  />
                </div>
              </TabsContent>
              <TabsContent value="clubs">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <ClubCard
                    name="Robotics Club"
                    description="Build and program robots, participate in competitions."
                    members={42}
                    image="/placeholder.svg?height=100&width=100"
                  />
                  <ClubCard
                    name="Environmental Society"
                    description="Work on sustainability projects and eco-friendly initiatives."
                    members={78}
                    image="/placeholder.svg?height=100&width=100"
                  />
                  <ClubCard
                    name="Debate Team"
                    description="Sharpen your critical thinking and public speaking skills."
                    members={35}
                    image="/placeholder.svg?height=100&width=100"
                  />
                </div>
              </TabsContent>
              <TabsContent value="events">
                <div className="space-y-8">
                  <EventCard
                    title="Annual Science Fair"
                    description="Showcase your research and innovative projects to the university community."
                    date="2023-10-15"
                    time="09:00 AM - 5:00 PM"
                    location="University Main Hall"
                  />
                  <EventCard
                    title="Career Networking Night"
                    description="Connect with alumni and industry professionals to explore career opportunities."
                    date="2023-10-20"
                    time="6:00 PM - 9:00 PM"
                    location="Student Center Ballroom"
                  />
                  <EventCard
                    title="Wellness Week Kickoff"
                    description="Join us for a week of activities promoting physical and mental health."
                    date="2023-10-25"
                    time="All Day"
                    location="Various Campus Locations"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-emerald-100">Why Join ClubHub?</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-emerald-800 border-emerald-700">
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 text-blue-400" />
                  <CardTitle className="text-emerald-100">Connect with Peers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-200">Meet like-minded individuals and form lasting friendships based on shared interests and passions.</p>
                </CardContent>
              </Card>
              <Card className="bg-emerald-800 border-emerald-700">
                <CardHeader>
                  <Zap className="h-8 w-8 mb-2 text-blue-400" />
                  <CardTitle className="text-emerald-100">Develop New Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-200">Participate in workshops, projects, and events that help you grow both personally and professionally.</p>
                </CardContent>
              </Card>
              <Card className="bg-emerald-800 border-emerald-700">
                <CardHeader>
                  <BookOpen className="h-8 w-8 mb-2 text-blue-400" />
                  <CardTitle className="text-emerald-100">Enhance Your Resume</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-200">Gain leadership experience and build a portfolio of achievements that stand out to future employers.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-800/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-emerald-100">Ready to Get Started?</h2>
              <p className="max-w-[600px] text-emerald-200 md:text-xl">
                Join ClubHub today and start exploring all the exciting opportunities waiting for you on campus.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                Sign Up Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-emerald-900">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <Link className="flex items-center justify-center space-x-2 mb-2" href="#">
              <Zap className="h-6 w-6 text-blue-400" />
              <span className="text-2xl font-bold text-emerald-100">ClubHub</span>
            </Link>
            <p className="text-sm text-emerald-300">© 2023 ClubHub. All rights reserved.</p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            <Link className="text-sm hover:underline underline-offset-4 text-emerald-300" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline underline-offset-4 text-emerald-300" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm hover:underline underline-offset-4 text-emerald-300" href="#">
              Contact Us
            </Link>
            <Link className="text-sm hover:underline underline-offset-4 text-emerald-300" href="#">
              FAQ
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function FeaturedCard({ title, description, image, link }) {
  return (
    <Card className="overflow-hidden bg-emerald-800 border-emerald-700">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <CardTitle className="text-xl text-emerald-100">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-emerald-200">{description}</p>
      </CardContent>
      <CardContent className="pt-0">
        <Link className="inline-flex items-center text-blue-400 hover:underline" href={link}>
          Learn more
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

function ClubCard({ name, description, members, image }) {
  return (
    <Card className="bg-emerald-800 border-emerald-700">
      <CardHeader className="flex flex-row items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="rounded-full"
        />
        <div>
          <CardTitle className="text-lg text-emerald-100">{name}</CardTitle>
          <CardDescription className="text-emerald-300">{members} members</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-emerald-200">{description}</p>
      </CardContent>
      <CardContent className="pt-0">
        <Button className="w-full" variant="outline">Join Club</Button>
      </CardContent>
    </Card>
  )
}

function EventCard({ title, description, date, time, location }) {
  return (
    <Card className="bg-emerald-800 border-emerald-700">
      <CardHeader>
        <CardTitle className="text-xl text-emerald-100">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-emerald-200 mb-4">{description}</p>
        <div className="space-y-2 text-sm text-emerald-300">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            {date}
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            {time}
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4" />
            {location}
          </div>
        </div>
      </CardContent>
      <CardContent className="pt-0">
        <Button className="w-full">RSVP</Button>
      </CardContent>
    </Card>
  )
}