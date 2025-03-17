import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetOverlay,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { Menu } from "lucide-react";
  import { NavigationRoutes } from "./NavigationRoutes";
  import { useAuth } from "@clerk/clerk-react";
  import { NavLink } from "react-router-dom";
  import { cn } from "@/lib/utils";
  
  export const ToggleContainer = () => {
    const { userId } = useAuth();
    return (
      <Sheet >
        <SheetTrigger className="block md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetOverlay className="bg-black/50 backdrop-blur-sm" />
        <SheetContent className={cn(
          'bg-[rgba(255,255,255,0.2)] backdrop-blur-md',
          'text-white border-r border-white/10 shadow-lg',
          'flex flex-col items-start gap-6 pt-10' // spacing
        )}
        >
          <SheetHeader>
            <SheetTitle />
          </SheetHeader>
  
          <nav className="gap-6 flex flex-col items-start">
            <NavigationRoutes isMobile />
            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    "text-base text-white mt-3",
                  isActive && " font-bold"
                  )
                }
              >
                Take An Interview
              </NavLink>
            )}
          </nav>
        </SheetContent>
      </Sheet>
    );
  };