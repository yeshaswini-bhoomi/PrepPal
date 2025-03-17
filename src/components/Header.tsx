import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import Container from "./Container";
import { LogoContainer } from "./LogoContainer";
import { NavigationRoutes } from "./NavigationRoutes";
import { NavLink } from "react-router-dom";
import { ProfileContainer } from "./ProfileContainer";
import { ToggleContainer } from "./ToggleContainer";
import { useEffect, useState } from "react";

const Header = () => {
  const { userId } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to detect scroll position
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Set true if scrolled more than 50px
      } else {
        setIsScrolled(false); // Set false if scrolled back to top
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "w-full border-b border-white/10",
        "sticky top-0 z-30", // thin border for separation
        isScrolled
          ? "bg-gray-800/80 backdrop-blur-none" // When scrolled, set a gray background
          : "bg-[rgba(255,255,255,0.2)] backdrop-blur-md", // Default transparent background
        "duration-150 transition-all ease-in-out text-white"
      )}
    >
      <Container>
        <div className="flex items-center gap-4 w-full">
          {/* logo section */}
          <LogoContainer />

          {/* navigation section */}
          <nav className="hidden md:flex items-center gap-3">
            <NavigationRoutes />
            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    "text-base text-white ml-3 hover:scale-110 transform transition-all",
                    isActive && " font-bold"
                  )
                }
              >
                Take an Interview
              </NavLink>
            )}
          </nav>

          {/* profile section */}
          <div className="ml-auto flex items-center gap-6">
            {/* profile section */}
            <ProfileContainer />
            {/* mobile toggle section */}
            <ToggleContainer />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
