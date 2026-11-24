import useFetch from "../Hooks/useFetch";
import TrackCard from "../components/TrackCard";

export default function Home() {
  const { data: tracks, loading, error } = useFetch(
    "/api/tracks?populate=*&filters[featured][$eq]=true"
  );

  return (
    <main>
      <h1>Welcome</h1>
      <p>Write a short bio about yourself here.</p>

      <h2>Featured track</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong: {error}</p>}
      {tracks && tracks.length > 0 && <TrackCard track={tracks[0]} />}
    </main>
  );
}