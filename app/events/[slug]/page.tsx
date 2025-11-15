import BookEvent from "@/components/BookEvent";
import EventCard from "@/components/EventCard";
import { IEvent } from "@/database";
import { getSimilarEventsBySlug } from "@/lib/actions/event.actions";
import { cacheLife } from "next/cache";
import Image from "next/image";
import { notFound } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventDetailsItem = ({
  icon,
  alt,
  label,
}: {
  icon: string;
  alt: string;
  label: string;
}) => (
  <div className="flex gap-2 items-center">
    <Image src={icon} alt={alt} width={17} height={17} />
    <p>{label}</p>
  </div>
);

const EventAgenda = ({ agendaItems }: { agendaItems: string[] }) => (
  <div className="agenda">
    <h2>Agenda</h2>
    <ul>
      {agendaItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const EventTags = ({ tags }: { tags: string[] }) => (
  <div className="flex gap-1.5 flex-wrap">
    {tags.map((tag) => (
      <div className="pill" key={tag}>
        {tag}
      </div>
    ))}
  </div>
);

const EventDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  "use cache";
  cacheLife("hours");
  const { slug } = await params;

  const response = await fetch(`${BASE_URL}/api/events/${slug}`);
  const {
    event: {
      title,
      description,
      image,
      overview,
      date,
      time,
      location,
      mode,
      agenda,
      audience,
      tags,
      organizer,
      _id,
    },
  }: { event: IEvent } = await response.json();

  if (!description) return notFound();

  const bookings = 10;

  const similarEvents: IEvent[] = await getSimilarEventsBySlug(slug);

  console.log("HERE");
  console.log(similarEvents);

  return (
    <section id="event">
      <div className="header">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="details">
        <div className="content">
          <Image
            className="banner"
            src={image}
            alt="Event banner"
            width={800}
            height={800}
          />

          <section className="flex flex-col gap-2">
            <h2>Overview</h2>
            <p>{overview}</p>
          </section>

          <section className="flex flex-col gap-2">
            <h2>Details</h2>
            <EventDetailsItem icon="/icons/calendar.svg" alt="calendar" label={date} />
            <EventDetailsItem icon="/icons/clock.svg" alt="clock" label={time} />
            <EventDetailsItem icon="/icons/pin.svg" alt="pin" label={location} />
            <EventDetailsItem icon="/icons/mode.svg" alt="mode" label={mode} />
            <EventDetailsItem
              icon="/icons/audience.svg"
              alt="audience"
              label={audience}
            />
          </section>

          <EventAgenda agendaItems={agenda} />

          <section className="flex flex-col gap-2">
            <h2>Organiser</h2>
            <p>{organizer}</p>
          </section>

          <EventTags tags={tags} />
        </div>

        <aside className="booking">
          <div className="signup-card">
            <h2>Book your spot</h2>
            {bookings > 0 ? (
              <p className="text-sm">
                Join {bookings} people who have alreay booked their spot
              </p>
            ) : (
              <p className="text-sm">Be the first to book your spot</p>
            )}

            <BookEvent eventId={_id} slug={slug} />
          </div>
        </aside>
      </div>

      <div className="flex w-full flex-col gap-4 pt-20">
        <h2>Similar Events</h2>
        <div className="events">
          {similarEvents.length > 0 &&
            similarEvents.map((similarEvent: IEvent) => (
              <EventCard {...similarEvent} key={similarEvent._id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
