import { EVENTS } from "@/data/mockData";
import EventDetailClient from "./EventDetailClient";

export function generateStaticParams() {
  return EVENTS.map((event) => ({
    id: event.id,
  }));
}

export default async function EventDetailPage({ params }) {
  const resolvedParams = await params;
  const event = EVENTS.find((e) => e.id === resolvedParams?.id) || EVENTS[0];
  return <EventDetailClient event={event} />;
}
