import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ExperienceItem } from "../lib/experience-items";

export const HoverEffect = ({
  items,
  className,
}: {
  items: ExperienceItem[];
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // overlay dimensions & position
  const [overlay, setOverlay] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
      onMouseLeave={() => setOverlay(null)}
    >
      {/* moving overlay */}
      {overlay && (
        <motion.div
          className="pointer-events-none absolute bg-cyan-500/20 backdrop-blur-sm rounded-3xl"
          initial={false}
          animate={{
            left: overlay.x,
            top: overlay.y,
            width: overlay.width,
            height: overlay.height,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}

      {items.map((item) => (
        <a
          key={item.link}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block p-2 h-full w-full group"
          onMouseEnter={(e) => {
            const card = e.currentTarget as HTMLElement;
            const parent = containerRef.current!;
            const cardRect = card.getBoundingClientRect();
            const parentRect = parent.getBoundingClientRect();
            setOverlay({
              x: cardRect.left - parentRect.left,
              y: cardRect.top - parentRect.top,
              width: cardRect.width,
              height: cardRect.height,
            });
          }}
        >
          <div
            className="
    rounded-3xl 
    w-full 
    h-72             
    p-6 
    bg-gradient-to-br from-neutral-800 to-neutral-900 
    text-white 
    shadow-md 
    transition-all duration-300 ease-in-out 
    group-hover:shadow-xl group-hover:scale-[1.02] 
    border border-transparent group-hover:border-cyan-400
    relative z-10

    flex flex-col justify-start space-y-4  /* consistent spacing */
  "
          >
            {/* Top row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {item.icon}
                <span className="text-xs uppercase text-cyan-300 tracking-wide">
                  {item.company}
                </span>
              </div>
              <span className="text-xs text-gray-400">{item.date}</span>
            </div>

            {/* Role/Title */}
            <h4 className="text-lg font-semibold leading-snug">{item.title}</h4>

            {/* Description */}
            <p
              className="
      text-sm text-gray-300 leading-relaxed 
      overflow-hidden 
      /* requires Tailwind line-clamp plugin: */
      line-clamp-3
    "
            >
              {item.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};
