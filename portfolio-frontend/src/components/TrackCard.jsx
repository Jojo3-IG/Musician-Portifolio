const API_URL = import.meta.env.VITE_API_URL;

export default function TrackCard({ track }) {
  return (
    <article>
      {track.cover && (
        <img src={`${API_URL}${track.cover.url}`} alt={track.title} width="200" />
      )}
      <h2>{track.title}</h2>
      <p>{track.description}</p>
      {track.audio && <audio controls src={`${API_URL}${track.audio.url}`} />}
    </article>
  );
}