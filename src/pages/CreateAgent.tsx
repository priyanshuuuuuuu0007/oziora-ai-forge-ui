import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  ArrowRight, 
  Save, 
  Upload, 
  X, 
  Plus,
  FileText,
  DollarSign,
  Settings,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const CreateAgent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    tags: [],
    platform: "",
    deploymentUrl: "",
    isPublic: true,
    pricing: "free",
    price: 0,
    thumbnail: null,
    demo: null,
  });
  const [newTag, setNewTag] = useState("");

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const categories = [
    "Marketing",
    "Sales",
    "Customer Support",
    "E-commerce",
    "Social Media",
    "Finance",
    "HR & Recruiting",
    "Data Analysis",
    "Content Creation",
    "Productivity",
  ];

  const platforms = [
    "n8n",
    "Zapier",
    "Make.com",
    "OpenAI",
    "Custom API",
    "Bubble",
    "Airtable",
    "Notion",
  ];

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, newTag.trim()],
      });
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove),
    });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const steps = [
    { number: 1, title: "Agent Info", icon: FileText },
    { number: 2, title: "Platform & Deployment", icon: Settings },
    { number: 3, title: "Pricing", icon: DollarSign },
    { number: 4, title: "Media & Demo", icon: Upload },
    { number: 5, title: "Review & Publish", icon: CheckCircle },
  ];

  return (
    <div className="min-h-screen pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/dashboard">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-2">Create New AI Agent</h1>
          <p className="text-xl text-muted-foreground">
            Share your automation expertise with the world
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`flex items-center ${
                  currentStep >= step.number ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    currentStep >= step.number
                      ? "bg-primary border-primary text-primary-foreground"
                      : "border-border"
                  }`}
                >
                  <step.icon className="w-5 h-5" />
                </div>
                <div className="ml-3 hidden md:block">
                  <div className="text-sm font-medium">{step.title}</div>
                </div>
              </div>
            ))}
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Form Content */}
        <div className="glass-card p-8 rounded-xl mb-8">
          {/* Step 1: Agent Info */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Agent Information</h2>
                <p className="text-muted-foreground mb-6">
                  Provide basic information about your AI agent
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Agent Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Email Marketing Automator"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe what your agent does and how it helps users..."
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    rows={4}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase()}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Tags</Label>
                  <div className="mt-2 space-y-3">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add a tag..."
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && addTag()}
                      />
                      <Button type="button" onClick={addTag} variant="outline">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    {formData.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {formData.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                            {tag}
                            <button
                              onClick={() => removeTag(tag)}
                              className="ml-1 hover:text-destructive"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Platform & Deployment */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Platform & Deployment</h2>
                <p className="text-muted-foreground mb-6">
                  Specify the platform and deployment details
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label>Platform *</Label>
                  <Select value={formData.platform} onValueChange={(value) => handleInputChange("platform", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      {platforms.map((platform) => (
                        <SelectItem key={platform} value={platform.toLowerCase()}>
                          {platform}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="deploymentUrl">Deployment URL / Template Link</Label>
                  <Input
                    id="deploymentUrl"
                    placeholder="https://example.com/template"
                    value={formData.deploymentUrl}
                    onChange={(e) => handleInputChange("deploymentUrl", e.target.value)}
                    className="mt-2"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Provide a link to your template, workflow, or deployment instructions
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="isPublic"
                    checked={formData.isPublic}
                    onCheckedChange={(checked) => handleInputChange("isPublic", checked)}
                  />
                  <Label htmlFor="isPublic">Make this agent publicly visible</Label>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Pricing */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Pricing Strategy</h2>
                <p className="text-muted-foreground mb-6">
                  Set your pricing model and rates
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <Label>Pricing Model</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <Card 
                      className={`cursor-pointer transition-smooth ${
                        formData.pricing === "free" ? "ring-2 ring-primary" : ""
                      }`}
                      onClick={() => handleInputChange("pricing", "free")}
                    >
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Free</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Share your agent for free to build your reputation and get feedback
                        </p>
                      </CardContent>
                    </Card>

                    <Card 
                      className={`cursor-pointer transition-smooth ${
                        formData.pricing === "paid" ? "ring-2 ring-primary" : ""
                      }`}
                      onClick={() => handleInputChange("pricing", "paid")}
                    >
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Paid</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Monetize your expertise with one-time purchase pricing
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {formData.pricing === "paid" && (
                  <div>
                    <Label htmlFor="price">Price (USD) *</Label>
                    <div className="relative mt-2">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="price"
                        type="number"
                        placeholder="29"
                        value={formData.price}
                        onChange={(e) => handleInputChange("price", parseFloat(e.target.value) || 0)}
                        className="pl-10"
                        min="1"
                        max="1000"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Recommended range: $10 - $100 for most automation agents
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 4: Media & Demo */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Media & Demo</h2>
                <p className="text-muted-foreground mb-6">
                  Upload visuals and demo content to showcase your agent
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <Label>Thumbnail Image</Label>
                  <div className="mt-2 border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">
                      Upload a thumbnail image for your agent
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Recommended: 1200x800px, PNG or JPG
                    </p>
                    <Button variant="outline">
                      Choose File
                    </Button>
                  </div>
                </div>

                <div>
                  <Label>Demo Video (Optional)</Label>
                  <div className="mt-2 border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">
                      Upload a demo video or GIF
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Max 50MB, MP4 or GIF format
                    </p>
                    <Button variant="outline">
                      Choose File
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Review & Publish */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Review & Publish</h2>
                <p className="text-muted-foreground mb-6">
                  Review your agent details before publishing
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Agent Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm text-muted-foreground">Title</Label>
                        <p className="font-medium">{formData.title || "Not specified"}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">Category</Label>
                        <p className="font-medium">{formData.category || "Not specified"}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">Platform</Label>
                        <p className="font-medium">{formData.platform || "Not specified"}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">Pricing</Label>
                        <p className="font-medium">
                          {formData.pricing === "free" ? "Free" : `$${formData.price}`}
                        </p>
                      </div>
                    </div>
                    
                    {formData.description && (
                      <div>
                        <Label className="text-sm text-muted-foreground">Description</Label>
                        <p className="mt-1">{formData.description}</p>
                      </div>
                    )}

                    {formData.tags.length > 0 && (
                      <div>
                        <Label className="text-sm text-muted-foreground">Tags</Label>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {formData.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-accent" />
                    <span className="font-medium">Before Publishing</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                    <li>• Ensure your agent description is clear and helpful</li>
                    <li>• Test your deployment link thoroughly</li>
                    <li>• Add detailed setup instructions</li>
                    <li>• Consider providing customer support</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-8 border-t border-border/50">
            <div className="flex gap-3">
              {currentStep > 1 && (
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
              )}
              <Button variant="ghost">
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
            </div>

            <div>
              {currentStep < totalSteps ? (
                <Button onClick={nextStep}>
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button variant="default" className="bg-gradient-primary">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Publish Agent
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAgent;