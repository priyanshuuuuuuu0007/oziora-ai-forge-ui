import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Eye, Bookmark, ShoppingCart, Play } from "lucide-react";

interface AgentCardProps {
  id: string;
  title: string;
  description: string;
  platform: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  creator: string;
  thumbnail: string;
  isFree?: boolean;
}

const AgentCard = ({
  id,
  title,
  description,
  platform,
  category,
  price,
  rating,
  reviews,
  creator,
  thumbnail,
  isFree = false,
}: AgentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

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
    <div
      className="glass-card rounded-xl overflow-hidden transition-smooth hover:scale-105 hover:glow-primary cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <div className="absolute top-3 left-3 z-20 flex gap-2">
          <Badge className={getPlatformColor(platform)}>{platform}</Badge>
          <Badge variant="secondary">{category}</Badge>
        </div>
        <div className="absolute top-3 right-3 z-20">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBookmark}
            className={`glass h-8 w-8 ${isBookmarked ? "text-yellow-400" : "text-white"}`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
          </Button>
        </div>
        
        {/* Hover overlay with actions */}
        {isHovered && (
          <div className="absolute inset-0 z-30 flex items-center justify-center">
            <div className="flex gap-2">
              <Button variant="glass" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button variant="default" size="sm">
                <Play className="w-4 h-4 mr-2" />
                Demo
              </Button>
            </div>
          </div>
        )}
        
        {/* Placeholder for thumbnail image */}
        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
          <div className="text-6xl text-primary/30">🤖</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title and Creator */}
        <div>
          <h3 className="font-semibold text-foreground text-lg line-clamp-1">{title}</h3>
          <p className="text-sm text-muted-foreground">by {creator}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

        {/* Rating and Reviews */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            {isFree ? (
              <Badge variant="secondary" className="font-semibold bg-accent text-accent-foreground">Free</Badge>
            ) : (
              <span className="text-lg font-bold text-foreground">${price}</span>
            )}
          </div>
          <Button variant="default" size="sm">
            <ShoppingCart className="w-4 h-4 mr-2" />
            {isFree ? "Get" : "Buy"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;