import { Progress } from "@/components/ui/progress";
import { Heart, Clock } from "lucide-react";

interface CampaignCardProps {
  title: string;
  description: string;
  image: string;
  raised: number;
  goal: number;
  daysLeft: number;
  category: string;
}

const CampaignCard = ({
  title,
  description,
  image,
  raised,
  goal,
  daysLeft,
  category,
}: CampaignCardProps) => {
  const progress = Math.min((raised / goal) * 100, 100);

  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-[var(--card-hover-shadow)] transition-all duration-300">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
            {category}
          </span>
        </div>
        <button className="absolute top-3 right-3 w-8 h-8 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors">
          <Heart size={14} className="text-muted-foreground" />
        </button>
      </div>

      <div className="p-5 space-y-3">
        <h3 className="font-semibold text-lg text-card-foreground leading-snug line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

        <div className="space-y-2 pt-1">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-sm">
            <span className="font-semibold text-primary">
              ৳{raised.toLocaleString()}
            </span>
            <span className="text-muted-foreground">
              of ৳{goal.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock size={14} />
            {daysLeft} days left
          </div>
          <span className="text-sm font-medium text-primary">
            {Math.round(progress)}% funded
          </span>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
