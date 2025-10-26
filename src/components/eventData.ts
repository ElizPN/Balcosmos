export interface Event {
  date: string;
  location: string;
  venue: string;
  ticketsUrl?: string;
}

export const events: Event[] = [
  {
    date: "2024-10-26",
    location: "New York, NY",
    venue: "Brooklyn Mirage",
    ticketsUrl: "https://www.ticketmaster.com/event/12345",
  },
  {
    date: "2024-11-15",
    location: "London, UK",
    venue: "Ministry of Sound",
    ticketsUrl: "https://www.ministryofsound.com/events/2024/11/15/balcosmos-live",
  },
  {
    date: "2024-12-05",
    location: "Berlin, DE",
    venue: "Berghain",
    ticketsUrl: "https://www.residentadvisor.net/events/1234567",
  },
    {
    date: "2025-01-25",
    location: "Goa, IN",
    venue: "Hill Top",
  },
];