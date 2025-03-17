import { useState } from "react";
import { cn } from "@/lib/utils";
import { Volume2, VolumeX } from "lucide-react";
import { TooltipButton } from "./TooltipButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { RecordAnswer } from "./RecordAnswer";

interface QuestionSectionProps {
  questions: { question: string; answer: string }[];
}

export const QuestionSection = ({ questions }: QuestionSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWebCam, setIsWebCam] = useState(false);

  const [currentSpeech, setCurrentSpeech] =
    useState<SpeechSynthesisUtterance | null>(null);

  const handlePlayQuestion = (qst: string) => {
    if (isPlaying && currentSpeech) {
      // stop the speech if already playing
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setCurrentSpeech(null);
    } else {
      if ("speechSynthesis" in window) {
        const speech = new SpeechSynthesisUtterance(qst);
        window.speechSynthesis.speak(speech);
        setIsPlaying(true);
        setCurrentSpeech(speech);

        // handle the speech end
        speech.onend = () => {
          setIsPlaying(false);
          setCurrentSpeech(null);
        };
      }
    }
  };

  return (
    <div className="w-full min-h-96 border rounded-md p-4">
      <Tabs
        defaultValue={questions[0]?.question}
        className="w-full space-y-12"
        orientation="vertical"
      >
        <TabsList className="bg-transparent text-white w-full flex flex-wrap items-center justify-start gap-4">
          {questions?.map((tab, i) => (
            <TabsTrigger
              className={cn(
                "data-[state=active]:bg-sky-200 data-[state=active]:shadow-md text-xs px-2"
              )}
              key={tab.question}
              value={tab.question}
            >
              {`Question #${i + 1}`}
            </TabsTrigger>
          ))}
        </TabsList>

        {questions?.map((tab, i) => (
          <TabsContent key={i} value={tab.question}>
            <p className="text-base text-left tracking-wide text-neutral-100">
              {tab.question}
            </p>

            <div className="w-full flex items-center justify-end">
              <TooltipButton
                content={isPlaying ? "Stop" : "Start"}
                icon={
                  isPlaying ? (
                    <VolumeX className="min-w-5 min-h-5 text-muted-foreground" />
                  ) : (
                    <Volume2 className="min-w-5 min-h-5 text-muted-foreground" />
                  )
                }
                onClick={() => handlePlayQuestion(tab.question)}
              />
            </div>

            <RecordAnswer
              question={tab}
              isWebCam={isWebCam}
              setIsWebCam={setIsWebCam}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};