import ReactPlayer from "react-player";

const Frontpage = () => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        loop
        controls
        className="react-player"
        url="video/Base.mp4"
        width="100vw"
        height="100vh"
      />
        <video className="full-video" autoPlay muted loop>
          <source src="video/overlay.mp4" type="video/mp4" />
        </video>
     
    </div>
  );
};

export default Frontpage;
