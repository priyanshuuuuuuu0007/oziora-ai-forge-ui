import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, ArrowLeft, Share2, Bookmark, Play, Download, ExternalLink, Heart, MessageSquare } from "lucide-react";
import AgentCard from "@/components/AgentCard";

const AgentDetail = () => {
  const { id } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  // Mock agent data - in real app, this would be fetched based on ID
  const agent = {
    id: "1",
    title: "Email Marketing Automator",
    description: "Transform your email marketing with AI-powered automation that personalizes content, optimizes send times, and tracks performance in real-time.",
    fullDescription: `This comprehensive email marketing automation agent revolutionizes how you connect with your audience. Using advanced AI algorithms, it analyzes subscriber behavior, preferences, and engagement patterns to create hyper-personalized email campaigns that convert.

**Key Features:**
- AI-powered content personalization
- Optimal send time prediction
- A/B testing automation
- Advanced segmentation
- Real-time analytics and reporting
- Integration with 50+ email platforms
- Spam score optimization
- Template library with 100+ designs

**How it Works:**
1. Connect your email platform (MailChimp, ConvertKit, etc.)
2. Upload your subscriber list
3. Set your campaign goals and preferences
4. Let the AI create and optimize your campaigns
5. Monitor results through the comprehensive dashboard

**Requirements:**
- Email marketing platform account
- Minimum 100 subscribers
- API access to your email service`,
    platform: "Zapier",
    category: "Marketing",
    price: 29,
    rating: 4.8,
    reviews: 142,
    creator: {
      name: "Sarah Chen",
      avatar: "",
      title: "Marketing Automation Expert",
      followers: 1250,
      agents: 12,
    },
    thumbnail: "",
    features: [
      "AI Content Personalization",
      "Send Time Optimization",
      "A/B Testing",
      "Advanced Analytics",
      "50+ Platform Integrations",
      "Template Library",
    ],
    tags: ["email", "marketing", "automation", "ai", "analytics"],
    lastUpdated: "2024-01-15",
    version: "2.1.0",
    installs: 1420,
    supportedPlatforms: ["Zapier", "n8n", "Make"],
  };

  const reviews = [
    {
      id: 1,
      user: "Mike Johnson",
      avatar: "",
      rating: 5,
      date: "2024-01-10",
      content: "Incredible automation! Increased our email open rates by 45% in just 2 weeks. The AI personalization is spot on.",
      helpful: 24,
    },
    {
      id: 2,
      user: "Lisa Wong",
      avatar: "",
      rating: 5,
      date: "2024-01-08",
      content: "Easy to set up and the results speak for themselves. Customer support is excellent too.",
      helpful: 18,
    },
    {
      id: 3,
      user: "David Kim",
      avatar: "",
      rating: 4,
      date: "2024-01-05",
      content: "Great agent overall. Would love to see more template options, but the core functionality is solid.",
      helpful: 12,
    },
  ];

  const relatedAgents = [
    {
      id: "2",
      title: "Social Media Manager",
      description: "Schedule posts, analyze engagement, and grow your social presence automatically.",
      platform: "n8n",
      category: "Social Media",
      price: 0,
      rating: 4.6,
      reviews: 89,
      creator: "Mike Rodriguez",
      thumbnail: "",
      isFree: true,
    },
    {
      id: "4",
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
  ];

  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "n8n":
        return "bg-blue-500/20 text-blue-400";
      case "zapier":
        return "bg-orange-500/20 text-orange-400";
      case "openai":
        return "bg-green-500/20 text-green-400";
      default:
        return "bg-purple-500/20 text-purple-400";
    }
  };

  return (
    <div className="min-h-screen pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link to="/marketplace">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Marketplace
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="glass-card rounded-xl overflow-hidden">
              {/* Agent Preview */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button variant="glass" size="lg">
                    <Play className="w-6 h-6 mr-2" />
                    Watch Demo
                  </Button>
                </div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className={getPlatformColor(agent.platform)}>{agent.platform}</Badge>
                  <Badge variant="secondary">{agent.category}</Badge>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{agent.title}</h1>
                    <p className="text-lg text-muted-foreground">{agent.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Share2 className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsBookmarked(!isBookmarked)}
                    >
                      <Bookmark className={`w-5 h-5 ${isBookmarked ? "fill-current text-yellow-400" : ""}`} />
                    </Button>
                  </div>
                </div>

                {/* Creator Info */}
                <div className="flex items-center space-x-4 mb-6">
                  <Avatar>
                    <AvatarImage src={agent.creator.avatar} />
                    <AvatarFallback>{agent.creator.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{agent.creator.name}</div>
                    <div className="text-sm text-muted-foreground">{agent.creator.title}</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Follow
                  </Button>
                </div>

                {/* Rating and Stats */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(agent.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
                      ))}
                    </div>
                    <span className="font-medium">{agent.rating}</span>
                    <span className="text-muted-foreground">({agent.reviews} reviews)</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {agent.installs.toLocaleString()} installs
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Updated {new Date(agent.lastUpdated).toLocaleDateString()}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {agent.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Tabs Navigation */}
            <div className="glass border-b border-border/50">
              <div className="flex space-x-8 px-6">
                {["overview", "reviews", "changelog"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 text-sm font-medium border-b-2 transition-smooth capitalize ${
                      activeTab === tab
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="glass-card p-6 rounded-xl">
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">About This Agent</h3>
                    <div className="prose prose-invert max-w-none">
                      <div className="whitespace-pre-line text-muted-foreground">
                        {agent.fullDescription}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {agent.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Reviews</h3>
                    <Button variant="outline">Write a Review</Button>
                  </div>
                  
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-border/50 pb-4 last:border-b-0">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage src={review.avatar} />
                            <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-medium">{review.user}</span>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className={`w-3 h-3 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {new Date(review.date).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="text-muted-foreground mb-3">{review.content}</p>
                            <div className="flex items-center gap-4">
                              <Button variant="ghost" size="sm">
                                <Heart className="w-4 h-4 mr-1" />
                                Helpful ({review.helpful})
                              </Button>
                              <Button variant="ghost" size="sm">
                                <MessageSquare className="w-4 h-4 mr-1" />
                                Reply
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "changelog" && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Version History</h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-primary pl-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="default">v{agent.version}</Badge>
                        <span className="text-sm text-muted-foreground">Latest</span>
                      </div>
                      <h4 className="font-medium mb-2">Enhanced AI Personalization</h4>
                      <p className="text-muted-foreground text-sm mb-2">Released {agent.lastUpdated}</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Improved AI content generation accuracy by 25%</li>
                        <li>• Added support for dynamic product recommendations</li>
                        <li>• Enhanced mobile optimization</li>
                        <li>• Bug fixes and performance improvements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Purchase Card */}
            <div className="glass-card p-6 rounded-xl space-y-4 sticky top-24">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">${agent.price}</div>
                <div className="text-sm text-muted-foreground">One-time purchase</div>
              </div>
              
              <div className="space-y-3">
                <Link to="/checkout">
                  <Button variant="default" size="lg" className="w-full">
                    Buy Now
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Free Trial
                </Button>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Platform:</span>
                  <span>{agent.platform}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category:</span>
                  <span>{agent.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Version:</span>
                  <span>{agent.version}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Support:</span>
                  <span className="text-primary">24/7</span>
                </div>
              </div>

              <div className="pt-4 border-t border-border/50">
                <Button variant="ghost" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Documentation
                </Button>
              </div>
            </div>

            {/* Creator Profile */}
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-semibold mb-4">About the Creator</h3>
              <div className="flex items-center gap-3 mb-4">
                <Avatar>
                  <AvatarImage src={agent.creator.avatar} />
                  <AvatarFallback>{agent.creator.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{agent.creator.name}</div>
                  <div className="text-sm text-muted-foreground">{agent.creator.title}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <div className="font-medium">{agent.creator.followers}</div>
                  <div className="text-muted-foreground">Followers</div>
                </div>
                <div>
                  <div className="font-medium">{agent.creator.agents}</div>
                  <div className="text-muted-foreground">Agents</div>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                View Profile
              </Button>
            </div>
          </div>
        </div>

        {/* Related Agents */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedAgents.map((agent) => (
              <AgentCard key={agent.id} {...agent} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetail;