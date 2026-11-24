import useFetch from "../Hooks/useFetch";
import TrackCard from "../components/TrackCard";

export default function Music() {
  const { data: tracks, loading, error } = useFetch(
    "/api/tracks?populate=*&sort=releaseDate:desc"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error}</p>;

  return (
    <main>
      <h1>Music</h1>
      {tracks.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </main>
  );
}