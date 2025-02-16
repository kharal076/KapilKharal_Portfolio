export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Kapil Kharal</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software Developer</span>{" "}
          </h1>
          <p className="hero--section-description">
          <a href="tel:+9779863487737" class="btn btn-light">+977-9863487737</a>
          <a href="mailto:kapilkharal28@gmail.com" class="btn btn-light">kapilkharal28@gmail.com</a>
          </p> 
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
  <video src="./img/Kapil_kharal1.mp4" 
      autoPlay 
      loop 
      muted 
      className="small-video"
  ></video>
</div>
    </section>
  );
}
