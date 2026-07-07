import type { Metadata } from "next";

import { ChapterNav } from "@/components/marketing/chapter-nav";
import { StickyMobileCta } from "@/components/marketing/sticky-mobile-cta";
import { CinematicHero } from "@/components/marketing/chapters/cinematic-hero";
import { FearChapter } from "@/components/marketing/chapters/fear-chapter";
import { MentorDashboard } from "@/components/marketing/chapters/mentor-dashboard";
import { MissionControl } from "@/components/marketing/chapters/mission-control";
import { JourneyRoadmap } from "@/components/marketing/chapters/journey-roadmap";
import { CampusReel } from "@/components/marketing/chapters/campus-reel";
import { StudentStories } from "@/components/marketing/chapters/student-stories";
import { FutureCta } from "@/components/marketing/chapters/future-cta";

export const metadata: Metadata = {
  title: "Cybersecurity training with a published placement rate",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <ChapterNav />
      <CinematicHero />
      <FearChapter />
      <MentorDashboard />
      <MissionControl />
      <JourneyRoadmap />
      <CampusReel />
      <StudentStories />
      <FutureCta />
      <StickyMobileCta label="Begin your path" href="/admissions" eyebrow="12 of 40 seats remaining" />
    </>
  );
}
