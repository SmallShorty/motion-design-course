import "../styles/Page-Home.css";

export const Home = () => {
  const videoId = "vqXLGX0szIQ";

  return (
    <div className="home-page-domain">
      <div className="content-frame">
        <h1 className="header-h1">Motion Design for the Web</h1>
        <span className="author">by Envato Tuts</span>
        <p className="description">
          In this motion design tutorial, you‘ll learn how to include motion in
          your web design projects using video, CSS, JavaScript, GSAP, SVG,
          Lottie, and more. Whether you’re just starting out or you’re looking
          to level up your skills, this course will help you bring your websites
          to life.
        </p>
      </div>
      <div className="video-container">
        <iframe
          className="youtube-video"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Motion Design for the Web | FREE COURSE"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
