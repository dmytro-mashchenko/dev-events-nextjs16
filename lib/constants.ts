export interface EventItem {
  title: string;
  image: string; // path under public/images, e.g. "/images/nextjs-conf-2025.jpg"
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: EventItem[] = [
  {
    title: "Next.js Conf 2025",
    image: "/images/event1.png",
    slug: "nextjs-conf-2025",
    location: "Online",
    date: "Nov 12, 2025",
    time: "09:00 AM – 05:00 PM (UTC)",
  },
  {
    title: "React Summit 2026",
    image: "/images/event2.png",
    slug: "react-summit-2026",
    location: "Amsterdam, Netherlands",
    date: "Mar 10–11, 2026",
    time: "09:00 AM CET",
  },
  {
    title: "JSConf EU 2026",
    image: "/images/event3.png",
    slug: "jsconf-eu-2026",
    location: "Berlin, Germany",
    date: "Apr 15–17, 2026",
    time: "09:00 AM CEST",
  },
  {
    title: "Google I/O 2026",
    image: "/images/event4.png",
    slug: "google-io-2026",
    location: "Mountain View, CA / Online",
    date: "May 14–16, 2026",
    time: "10:00 AM PDT",
  },
  {
    title: "PyCon US 2026",
    image: "/images/event5.png",
    slug: "pycon-2026",
    location: "Salt Lake City, UT",
    date: "Apr 8–12, 2026",
    time: "All day",
  },
  {
    title: "HackMIT 2026",
    image: "/images/event6.png",
    slug: "hackmit-2026",
    location: "Cambridge, MA",
    date: "Jan 24–25, 2026",
    time: "24 hours",
  },
  {
    title: "DevOpsDays NYC 2026",
    image: "/images/event-full.png",
    slug: "devopsdays-nyc-2026",
    location: "New York, NY",
    date: "Sep 22, 2026",
    time: "08:30 AM EDT",
  },
  {
    title: "GitHub Universe 2025",
    image: "/images/event1.png",
    slug: "github-universe-2025",
    location: "San Francisco, CA / Online",
    date: "Dec 2–3, 2025",
    time: "09:00 AM PST",
  },
];
