import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Zap, DollarSign, Star, TrendingUp, Users, Award } from "lucide-react";
import AgentCard from "@/components/AgentCard";

const Home = () => {
  const featuredAgents = [
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
    },
    {
      id: "2",
      title: "Social Media Manager",
      description: "Schedule posts, analyze engagement, and grow your social presence automatically.",
      platform: "n8n",
      category: "Social",
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
      description: "Intelligent chatbot that handles customer inquiries 24/7 with natural language processing.",
      platform: "OpenAI",
      category: "Support",
      price: 49,
      rating: 4.9,
      reviews: 256,
      creator: "Alex Johnson",
      thumbnail: "",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
                    content: "Zorelius has transformed our workflow. The AI agents are incredibly powerful and easy to integrate.",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Entrepreneur",
      company: "StartupXYZ",
      content: "I've made over $10k selling my automation templates. The platform is fantastic for creators.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Operations Manager",
      company: "E-commerce Plus",
      content: "The customer support agents have reduced our response time by 80%. Amazing ROI!",
      rating: 5,
    },
  ];

  const trustedLogos = ["Microsoft", "Google", "Slack", "HubSpot", "Notion", "Airtable"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-hero">
          <div className="absolute inset-0 opacity-20">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-primary rounded-full animate-float`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="mb-6 glass border-primary/30 text-primary">
            🚀 The Future of AI Automation
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Zorelius
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            A Civilisation of Intelligence
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Discover, buy, and sell intelligent automation agents. Transform your business with 
            AI-powered workflows that work 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/marketplace">
              <Button variant="default" size="lg" className="w-full sm:w-auto">
                Explore Agents
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/create">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Start Selling
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">AI Agents</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">50k+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">$2M+</div>
              <div className="text-sm text-muted-foreground">Creator Earnings</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Oziora?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The most advanced platform for AI automation marketplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center space-y-4 hover:glow-primary transition-smooth">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold">Build</h3>
              <p className="text-muted-foreground">
                Create intelligent AI agents with no-code tools. Deploy across multiple platforms seamlessly.
              </p>
            </div>

            <div className="glass-card p-8 text-center space-y-4 hover:glow-accent transition-smooth">
              <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold">Sell</h3>
              <p className="text-muted-foreground">
                Monetize your expertise. List your AI agents and reach thousands of potential customers.
              </p>
            </div>

            <div className="glass-card p-8 text-center space-y-4 hover:glow-primary transition-smooth">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto glow-accent">
                <DollarSign className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-semibold">Earn</h3>
              <p className="text-muted-foreground">
                Generate passive income. Our creators earn an average of $3,000+ per month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Agents */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured AI Agents</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the most popular automation agents trusted by thousands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredAgents.map((agent) => (
              <AgentCard key={agent.id} {...agent} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/marketplace">
              <Button variant="outline" size="lg">
                View All Agents
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Loved by Creators & Businesses</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our community has to say about Zorelius
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-lg font-semibold text-muted-foreground">
              Trusted by teams at leading companies
            </h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {trustedLogos.map((logo, index) => (
              <div key={index} className="text-2xl font-bold text-muted-foreground">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 space-y-8 glow-primary">
            <h2 className="text-4xl font-bold">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of businesses already using AI agents to automate their workflows and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/marketplace">
                <Button variant="default" size="lg">
                  Get Started Now
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;