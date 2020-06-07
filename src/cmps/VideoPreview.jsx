export default function VideoPreview(props) {
  const { video } = props3;
  return (
    <article
      className="video-preview"
      onClick={() => props.onSelectVideo(props.video)}
    >
      <img src={`https://robohash.org/${video.id}`} alt="" />
      <p>Vendor: {video.name}</p>
      <p>Price: {video.url}</p>

      <button onchange="changestuts"></button>
    </article>
  );
}
