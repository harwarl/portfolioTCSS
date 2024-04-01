import aboutSVG from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSVG} alt="ABout Svg" className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ipsum,
            aut ducimus fuga accusantium labore illum incidunt ipsam optio culpa
            placeat, quos cum cupiditate praesentium hic ut, cumque quis
            aspernatur? Omnis repudiandae error ab similique saepe animi iure
            blanditiis? Temporibus.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
