import useFetch from "../Hooks/useFetch";

export default function Gigs() {
  const today = new Date().toISOString();
  const { data: gigs, loading, error } = useFetch(
    `/api/gigs?filters[date][$gte]=${today}&sort=date:asc`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error}</p>;

  return (
    <main>
      <h1>Upcoming gigs</h1>
      {gigs.length === 0 && <p>No upcoming gigs yet. Check back soon!</p>}
      <ul>
        {gigs.map((gig) => (
          <li key={gig.id}>
            <strong>{gig.venue}</strong>, {gig.city} <br />
            {new Date(gig.date).toLocaleString("en-GB", {
              dateStyle: "full",
              timeStyle: "short",
            })}
            {gig.ticketLink && (
              <>
                {" "}
                <a href={gig.ticketLink} target="_blank" rel="noreferrer">
                  Tickets
                </a>
              </>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}