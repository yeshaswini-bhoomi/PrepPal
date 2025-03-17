import { cn } from "@/lib/utils";

interface HeadingsProps {
  title: string;
  description?: string;
  isSubHeading?: boolean;
  className?: string;
}

export const Headings = ({
  title,
  description,
  isSubHeading = false,
  className = ""
}: HeadingsProps) => {
  return (
    <div>
      <h2
        className={cn(
          "text-2xl md:text-3xl  font-semibold font-sans",
          isSubHeading && "text-lg md:text-xl", className
        )}
      >
        {title}
      </h2>
      {description && <p className="text-sm text-gray-300">{description}</p>}
    </div>
  );
};
