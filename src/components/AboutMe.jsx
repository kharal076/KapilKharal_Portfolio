export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
     <div className=".about--section--img">
  <video src="./img/Kapil_kharal1.mp4" 
      autoPlay 
      loop 
      muted 
      className="small-video"
  ></video>
</div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About Me</p>
          <h1 className="skills-section--heading"></h1>
          <p className="hero--section-description">
          Hi, I'm Kapil Kharal from Shankhamul Rd, New Baneshwor, Nepal. I am a passionate software developer and data analyst with a strong educational background in Computer Science and Information Technology
          </p>
        </div>
      </div>
    </section>
  );
}
