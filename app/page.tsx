import EventCard from '@/components/EventCard'
import Explorebtn from '@/components/Explorebtn'
import { IEvent } from '@/database';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const page = async () => {

  const response = await fetch(`${BASE_URL}/api/events`);
  const {events} = await response.json();
  return (
    <>
      {/* Hero: full viewport, centered content */}
      <section className="min-h-screen flex flex-col items-center justify-center relative z-10 text-center space-y-5">
        <h1 className='text-center'>The Hub for Every Event <br/> Event You Can't Miss</h1>
        <p className='mt-2'>Hackathons, MeetUps, and Conferences, All in One Place</p>

        <Explorebtn />
      </section>

  {/* Featured events start on the next viewport naturally (no mt-20 needed) */}
  <section id="events" className="py-2">
        <div className='space-y-2'>
          <h3>Featured Events</h3>
          <ul className='events'>
            {events && events.length > 0 && events.map((item : IEvent) => (
              <li key={item.title}>
                <EventCard {...item} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default page