import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { 
  Plus, 
  DollarSign, 
  Eye, 
  Star, 
  TrendingUp, 
  Download,
  Edit3,
  Trash2,
  MoreHorizontal,
  Calendar,
  Users,
  Activity
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    {
      title: "Total Earnings",
      value: "$12,450",
      change: "+20.1%",
      icon: DollarSign,
      color: "text-green-400",
    },
    {
      title: "Total Views",
      value: "45,231",
      change: "+15.3%",
      icon: Eye,
      color: "text-blue-400",
    },
    {
      title: "Total Downloads",
      value: "1,234",
      change: "+8.2%",
      icon: Download,
      color: "text-purple-400",
    },
    {
      title: "Avg Rating",
      value: "4.8",
      change: "+0.1",
      icon: Star,
      color: "text-yellow-400",
    },
  ];

  const myAgents = [
    {
      id: "1",
      title: "Email Marketing Automator",
      status: "Active",
      price: 29,
      views: 1420,
      downloads: 142,
      rating: 4.8,
      earnings: "$4,118",
      lastUpdated: "2024-01-15",
    },
    {
      id: "2",
      title: "Social Media Scheduler",
      status: "Active",
      price: 19,
      views: 890,
      downloads: 89,
      rating: 4.6,
      earnings: "$1,691",
      lastUpdated: "2024-01-12",
    },
    {
      id: "3",
      title: "Lead Generation Bot",
      status: "Draft",
      price: 39,
      views: 0,
      downloads: 0,
      rating: 0,
      earnings: "$0",
      lastUpdated: "2024-01-10",
    },
  ];

  const recentActivity = [
    {
      type: "purchase",
      agent: "Email Marketing Automator",
      user: "John Doe",
      amount: "$29",
      time: "2 hours ago",
    },
    {
      type: "review",
      agent: "Social Media Scheduler",
      user: "Sarah Chen",
      rating: 5,
      time: "4 hours ago",
    },
    {
      type: "purchase",
      agent: "Email Marketing Automator",
      user: "Mike Johnson",
      amount: "$29",
      time: "6 hours ago",
    },
    {
      type: "view",
      agent: "Lead Generation Bot",
      user: "Anonymous",
      time: "8 hours ago",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-500/20 text-green-400";
      case "draft":
        return "bg-yellow-500/20 text-yellow-400";
      case "inactive":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="min-h-screen pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Creator Dashboard</h1>
            <p className="text-xl text-muted-foreground">
              Manage your AI agents and track your success
            </p>
          </div>
          <Link to="/create">
            <Button variant="default" size="lg">
              <Plus className="w-5 h-5 mr-2" />
              Create New Agent
            </Button>
          </Link>
        </div>

        {/* Welcome Banner */}
        <div className="glass-card p-6 mb-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Welcome back, Sarah! 👋</h2>
              <p className="text-muted-foreground">
                Your agents have generated <span className="text-primary font-semibold">$1,200</span> this month.
                Keep up the great work!
              </p>
            </div>
            <div className="hidden md:block">
              <div className="text-4xl">🚀</div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className={stat.color}>{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* My Agents */}
            <div className="glass-card rounded-xl">
              <div className="p-6 border-b border-border/50">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">My Agents</h3>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left p-4 font-medium text-muted-foreground">Agent</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Price</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Performance</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Earnings</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {myAgents.map((agent) => (
                      <tr key={agent.id} className="border-b border-border/50 last:border-b-0">
                        <td className="p-4">
                          <div>
                            <div className="font-medium">{agent.title}</div>
                            <div className="text-sm text-muted-foreground">
                              Updated {new Date(agent.lastUpdated).toLocaleDateString()}
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className={getStatusColor(agent.status)}>
                            {agent.status}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <span className="font-medium">${agent.price}</span>
                        </td>
                        <td className="p-4">
                          <div className="text-sm space-y-1">
                            <div>{agent.views.toLocaleString()} views</div>
                            <div>{agent.downloads} downloads</div>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                              {agent.rating || "N/A"}
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="font-medium text-green-400">{agent.earnings}</span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit3 className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Analytics Chart Placeholder */}
            <div className="glass-card p-6 rounded-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Earnings Analytics</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">7D</Button>
                  <Button variant="default" size="sm">30D</Button>
                  <Button variant="outline" size="sm">90D</Button>
                </div>
              </div>
              <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Analytics chart would go here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link to="/create">
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Agent
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start">
                  <Activity className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Customer Support
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Promotion
                </Button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm">
                        {activity.type === "purchase" && (
                          <>
                            <span className="font-medium">{activity.user}</span> purchased{" "}
                            <span className="font-medium">{activity.agent}</span> for{" "}
                            <span className="text-green-400">{activity.amount}</span>
                          </>
                        )}
                        {activity.type === "review" && (
                          <>
                            <span className="font-medium">{activity.user}</span> left a{" "}
                            <span className="text-yellow-400">{activity.rating}-star</span> review on{" "}
                            <span className="font-medium">{activity.agent}</span>
                          </>
                        )}
                        {activity.type === "view" && (
                          <>
                            Someone viewed <span className="font-medium">{activity.agent}</span>
                          </>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {activity.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Creator Tips */}
            <div className="glass-card p-6 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
              <h3 className="font-semibold mb-3">💡 Creator Tip</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Agents with detailed descriptions and demo videos get 3x more downloads. 
                Add a video to your next agent!
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;