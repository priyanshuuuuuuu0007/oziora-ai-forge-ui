import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Calendar, MapPin, Link as LinkIcon, Edit, Settings } from "lucide-react";
import AgentCard from "@/components/AgentCard";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("purchased");

  const userProfile = {
    name: "John Smith",
    username: "johnsmith",
    email: "john@example.com",
    avatar: "",
    joinDate: "2023-06-15",
    location: "San Francisco, CA",
    website: "https://johnsmith.dev",
    bio: "Full-stack developer passionate about AI automation and productivity tools. Building the future, one workflow at a time.",
    stats: {
      purchased: 12,
      reviews: 8,
      bookmarked: 24,
      following: 35,
      followers: 128,
    },
  };

  const purchasedAgents = [
    {
      id: "1",
      title: "Email Marketing Automator",
      description: "Automate your email campaigns with AI-powered personalization and scheduling.",
      platform: "Zapier",
      category: "Marketing",
      price: 29,
      rating: 4.8,
      reviews: 142,
      creator: "Sarah Chen",
      thumbnail: "",
      purchaseDate: "2024-01-15",
    },
    {
      id: "2",
      title: "Customer Support Bot",
      description: "Intelligent chatbot that handles customer inquiries 24/7 with natural language processing.",
      platform: "OpenAI",
      category: "Customer Support",
      price: 49,
      rating: 4.9,
      reviews: 256,
      creator: "Alex Johnson",
      thumbnail: "",
      purchaseDate: "2024-01-10",
    },
  ];

  const bookmarkedAgents = [
    {
      id: "3",
      title: "Lead Generation Assistant",
      description: "Find and qualify leads automatically using AI-powered research and outreach.",
      platform: "Zapier",
      category: "Sales",
      price: 39,
      rating: 4.7,
      reviews: 198,
      creator: "Emily Davis",
      thumbnail: "",
    },
    {
      id: "4",
      title: "Content Creator Pro",
      description: "Generate high-quality blog posts, social media content, and marketing copy.",
      platform: "OpenAI",
      category: "Content Creation",
      price: 59,
      rating: 4.9,
      reviews: 324,
      creator: "David Kim",
      thumbnail: "",
    },
  ];

  const reviews = [
    {
      id: 1,
      agent: "Email Marketing Automator",
      rating: 5,
      content: "Incredible automation! Increased our email open rates by 45% in just 2 weeks.",
      date: "2024-01-16",
      helpful: 12,
    },
    {
      id: 2,
      agent: "Customer Support Bot",
      rating: 5,
      content: "Easy to set up and the results speak for themselves. Highly recommended!",
      date: "2024-01-12",
      helpful: 8,
    },
  ];

  const tabs = [
    { id: "purchased", label: "Purchased Agents", count: userProfile.stats.purchased },
    { id: "reviews", label: "My Reviews", count: userProfile.stats.reviews },
    { id: "bookmarked", label: "Bookmarked", count: userProfile.stats.bookmarked },
  ];

  return (
    <div className="min-h-screen pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="glass-card p-8 rounded-xl mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar and Basic Info */}
            <div className="flex flex-col items-center md:items-start">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src={userProfile.avatar} />
                <AvatarFallback className="text-2xl">
                  {userProfile.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm" className="mb-2">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>

            {/* Profile Details */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-1">{userProfile.name}</h1>
                  <p className="text-lg text-muted-foreground">@{userProfile.username}</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 max-w-2xl">
                {userProfile.bio}
              </p>

              {/* Profile Meta */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Joined {new Date(userProfile.joinDate).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {userProfile.location}
                </div>
                <div className="flex items-center gap-1">
                  <LinkIcon className="w-4 h-4" />
                  <a href={userProfile.website} className="text-primary hover:underline">
                    {userProfile.website.replace('https://', '')}
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{userProfile.stats.purchased}</div>
                  <div className="text-sm text-muted-foreground">Purchased</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{userProfile.stats.reviews}</div>
                  <div className="text-sm text-muted-foreground">Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{userProfile.stats.bookmarked}</div>
                  <div className="text-sm text-muted-foreground">Bookmarked</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{userProfile.stats.following}</div>
                  <div className="text-sm text-muted-foreground">Following</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{userProfile.stats.followers}</div>
                  <div className="text-sm text-muted-foreground">Followers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="glass border-b border-border/50 mb-8">
          <div className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 text-sm font-medium border-b-2 transition-smooth flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
                <Badge variant="secondary" className="text-xs">
                  {tab.count}
                </Badge>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-12">
          {activeTab === "purchased" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">My Purchased Agents</h2>
                <p className="text-muted-foreground">
                  {purchasedAgents.length} agents purchased
                </p>
              </div>
              
              {purchasedAgents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {purchasedAgents.map((agent) => (
                    <div key={agent.id} className="relative">
                      <AgentCard {...agent} />
                      <div className="absolute top-3 right-3">
                        <Badge variant="default" className="bg-green-500/20 text-green-400">
                          Owned
                        </Badge>
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground text-center">
                        Purchased on {new Date(agent.purchaseDate).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🤖</div>
                  <h3 className="text-xl font-semibold mb-2">No agents purchased yet</h3>
                  <p className="text-muted-foreground mb-6">
                    Explore our marketplace to find amazing AI agents
                  </p>
                  <Button>Browse Marketplace</Button>
                </div>
              )}
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">My Reviews</h2>
                <p className="text-muted-foreground">
                  {reviews.length} reviews written
                </p>
              </div>
              
              {reviews.length > 0 ? (
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <Card key={review.id} className="glass-card">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{review.agent}</CardTitle>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {new Date(review.date).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-3">{review.content}</p>
                        <div className="text-sm text-muted-foreground">
                          {review.helpful} people found this helpful
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">⭐</div>
                  <h3 className="text-xl font-semibold mb-2">No reviews yet</h3>
                  <p className="text-muted-foreground">
                    Share your experience with purchased agents
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "bookmarked" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Bookmarked Agents</h2>
                <p className="text-muted-foreground">
                  {bookmarkedAgents.length} agents bookmarked
                </p>
              </div>
              
              {bookmarkedAgents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {bookmarkedAgents.map((agent) => (
                    <AgentCard key={agent.id} {...agent} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔖</div>
                  <h3 className="text-xl font-semibold mb-2">No bookmarks yet</h3>
                  <p className="text-muted-foreground mb-6">
                    Save interesting agents to view later
                  </p>
                  <Button>Browse Marketplace</Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;