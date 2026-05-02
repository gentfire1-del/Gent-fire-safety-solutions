import { TimelineEvent } from "@/types";

export const timeline: TimelineEvent[] = [
  {
    year: 1971,
    title: "Company Founded",
    description: "Established as a fire safety equipment supplier in Pakistan"
  },
  {
    year: 1985,
    title: "Expansion & Growth",
    description: "Expanded operations and started offering installation services"
  },
  {
    year: 1995,
    title: "International Partnership",
    description: "Established international partnerships for fire safety equipment distribution"
  },
  {
    year: 2000,
    title: "Turnkey Solutions",
    description: "Started providing complete turnkey fire safety solutions"
  },
  {
    year: 2010,
    title: "Technology Integration",
    description: "Integrated advanced fire alarm and detection systems"
  },
  {
    year: 2015,
    title: "Honeywell Partnership",
    description: "Partnered with Honeywell for advanced fire and security solutions"
  },
  {
    year: 2020,
    title: "Digital Transformation",
    description: "Implemented digital monitoring and IoT-enabled fire safety systems"
  },
  {
    year: 2025,
    title: "Industry Leadership",
    description: "Leading fire safety solutions provider with 50+ years of excellence"
  }
];

export function getTimeline(): TimelineEvent[] {
  return timeline;
}
