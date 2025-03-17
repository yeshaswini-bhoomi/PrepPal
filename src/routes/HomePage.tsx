import Container from "@/components/Container";
import { MarqueImg } from "@/components/MarqueImg";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex-col w-full z-20 ">
      <Container>
        <div className="my-16 md:mt-8 md: pt-16 text-white h-screen">
          <h2 className="text-3xl text-center md:text-left md:text-6xl ">
            <span className=" text-outline font-extrabold md:text-8xl">
              AI Superpower
            </span>
            <span className="font-extrabold">- A better way to</span>
            <br />
            improve your interview chances and skills
          </h2>
          <p className="mt-4 text-md">
            Boost your interview skills and increase your success rate with
            AI-driven insights. Discover a smarter way to prepare, practice, and
            stand out.
          </p>

          <div className="flex w-full items-center justify-evenly md:py-20 md:items-center md:justify-end gap-12 text-white">
            <p className="text-3xl font-semibold text-gray-100 text-center">
              250k+
              <span className="block text-xl text-gray-300 font-normal">
                Offers Recieved
              </span>
            </p>
            <p className="text-3xl font-semibold text-gray-100 text-center">
              1.2M+
              <span className="block text-xl text-gray-300 font-normal">
                Interview Aced
              </span>
            </p>
          </div>
        </div>

        {/* image section */}
        <div className="w-full rounded-xl bg-gray-100 h-[400px] md:h-[580px] drop-shadow-md overflow-hidden relative">
          <img
            src="/assets/img/hero.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />

          <div className="hidden md:block absolute w-80 bottom-4 right-4 px-4 py-2 rounded-md bg-white/60 backdrop-blur-md">
            <h2 className="text-neutral-800 font-semibold">Developer</h2>
            <p className="text-sm text-gray-800">
              Unlock your career growth with tailored AI insights and focused
              interview preparation
            </p>

            <Button className="mt-3">
              Generate <Sparkles />
            </Button>
          </div>
        </div>
      </Container>

      {/* marquee section */}
      <div className=" w-full my-6">
        <Marquee pauseOnHover>
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
        </Marquee>
      </div>

      <Container className="pt-4 space-y-8 h-screen">
        <h2 className="tracking-wide text-2xl text-gray-100 font-semibold">
          Unleash your potential with personalized AI insights and targeted
          interview practice.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-8">
          <div className="col-span-1 md:col-span-3 ml-4 pl-8">
            <img
              src="/assets/img/office.jpg"
              alt=""
              className="w-auto max-h-96 rounded-md object-cover"
            />
          </div>

          <div className="col-span-1 md:col-span-2 gap-8 max-h-96 min-h-96 w-full flex flex-col items-center justify-center text-center">
            <p className="text-center text-white text-xl">
              Transform the way you prepare, gain confidence, and boost your
              chances of landing your dream job. Let AI be your edge in
              today&apos;s competitive job market.
            </p>

            <Link to={"/generate"} className="w-full">
              <Button className="w-3/4">
                Generate <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
