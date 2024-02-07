import { SidebarPageMenu } from "../components/SidebarPageMenu";
export const Home = () => {
  return (
    <div className="home-page-domain">
      <SidebarPageMenu />
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
    </div>
  );
};
