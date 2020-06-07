import VideoPreview from "../cmps/VideoPreview.jsx";
export default function VideoList(props) {
  return (
    <div className="video-list">
      {props.videos.map((video) => (
        <VideoPreview
          onSelectVideo={props.onSelectVideo}
          key={video.id}
          video={video}
        />
      ))}
    </div>
  );
}
