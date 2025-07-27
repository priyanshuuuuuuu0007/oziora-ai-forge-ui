import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Grid, List, Star, ArrowUpDown } from "lucide-react";
import AgentCard from "@/components/AgentCard";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");
  const [viewMode, setViewMode] = useState("grid");

  const categories = [
    "All Categories",
    "Marketing",
    "Sales",
    "Customer Support",
    "E-commerce",
    "Social Media",
    "Finance",
    "HR & Recruiting",
    "Data Analysis",
    "Content Creation",
  ];

  const platforms = ["All Platforms", "n8n", "Zapier", "OpenAI", "Custom", "Bubble"];

  const agents = [
    {
      id: "1",
      title: "Email Marketing Automator",
      description: "Automate your email campaigns with AI-powered personalization and scheduling. Includes A/B testing and analytics.",
      platform: "Zapier",
      category: "Marketing",
      price: 29,
      rating: 4.8,
      reviews: 142,
      creator: "Sarah Chen",
      thumbnail: "",
    },
    {
      id: "2",
      title: "Social Media Manager",
      description: "Schedule posts, analyze engagement, and grow your social presence automatically across all platforms.",
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
      id: "3",
      title: "Customer Support Bot",
      description: "Intelligent chatbot that handles customer inquiries 24/7 with natural language processing and sentiment analysis.",
      platform: "OpenAI",
      category: "Customer Support",
      price: 49,
      rating: 4.9,
      reviews: 256,
      creator: "Alex Johnson",
      thumbnail: "",
    },
    {
      id: "4",
      title: "Lead Generation Assistant",
      description: "Find and qualify leads automatically using AI-powered research and outreach sequences.",
      platform: "Zapier",
      category: "Sales",
      price: 39,
      rating: 4.7,
      reviews: 198,
      creator: "Emily Davis",
      thumbnail: "",
    },
    {
      id: "5",
      title: "Content Creator Pro",
      description: "Generate high-quality blog posts, social media content, and marketing copy using advanced AI models.",
      platform: "OpenAI",
      category: "Content Creation",
      price: 59,
      rating: 4.9,
      reviews: 324,
      creator: "David Kim",
      thumbnail: "",
    },
    {
      id: "6",
      title: "E-commerce Optimizer",
      description: "Optimize product listings, manage inventory, and automate customer communications for online stores.",
      platform: "n8n",
      category: "E-commerce",
      price: 45,
      rating: 4.8,
      reviews: 167,
      creator: "Lisa Wong",
      thumbnail: "",
    },
  ];

  return (
    <div className="min-h-screen pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">AI Agent Marketplace</h1>
          <p className="text-xl text-muted-foreground">
            Discover intelligent automation agents to transform your business
          </p>
        </div>

        {/* Search and Filters */}
        <div className="glass-card p-6 mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search AI agents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>

          {/* Filter Row */}
          <div className="flex flex-wrap gap-4 items-center">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category.toLowerCase().replace(" ", "-")}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Platform" />
              </SelectTrigger>
              <SelectContent>
                {platforms.map((platform) => (
                  <SelectItem key={platform} value={platform.toLowerCase().replace(" ", "-")}>
                    {platform}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedPrice} onValueChange={setSelectedPrice}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="under-50">Under $50</SelectItem>
                <SelectItem value="50-100">$50 - $100</SelectItem>
                <SelectItem value="over-100">Over $100</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <Badge variant="outline">4.5+</Badge>
            </div>

            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Sort and View Controls */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">
              Showing {agents.length} agents
            </span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <ArrowUpDown className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Most Popular</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="icon"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Agents Grid */}
        <div className={`grid gap-6 mb-12 ${
          viewMode === "grid" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
            : "grid-cols-1"
        }`}>
          {agents.map((agent) => (
            <AgentCard key={agent.id} {...agent} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mb-12">
          <Button variant="outline" size="lg">
            Load More Agents
          </Button>
        </div>

        {/* Popular Categories */}
        <div className="glass-card p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-6">Popular Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categories.slice(1).map((category) => (
              <Button
                key={category}
                variant="ghost"
                className="h-auto p-4 flex-col space-y-2 hover:glow-primary"
              >
                <div className="text-2xl">📊</div>
                <span className="text-sm">{category}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;