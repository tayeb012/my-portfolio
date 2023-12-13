import { PiStudentDuotone } from "react-icons/pi";
import { SiSololearn } from "react-icons/si";

const About = () => {
  return (
    <div className="my-20">
      <section className="my-32 text-center">
        <h5>Get To Know More</h5>
        <h2 className="text-5xl font-semibold">About Me</h2>
      </section>
      <section className="flex gap-20 items-center justify-center">
        <img
          className="w-8/12 rounded-badge"
          src="https://i.ibb.co/3mqcSsQ/IMG-1839.jpg"
          alt=""
        />
        <section className="">
          <section className="flex justify-between gap-4">
            <div className="border w-full p-10 border-black flex gap-2 flex-col justify-center items-center text-3xl rounded-badge">
              <SiSololearn />
              <h3 className="font-semibold">Acquisition</h3>
              <h4 className="text-[#0e0e0e9c]">Web Development</h4>
            </div>

            <div className="border w-full p-10 border-black flex gap-2 flex-col justify-center items-center text-3xl rounded-badge">
              <PiStudentDuotone />
              <h3 className="font-semibold">Education</h3>
              <h4 className="text-[#0e0e0e9c]">BBA [Accounting]</h4>
            </div>
          </section>
          <p className="text-lg text-[#0e0e0e9c]">
            Originally a BBA accounting student, my journey into the world of
            web development was sparked by a serendipitous encounter with a
            YouTube video. The fascinating realm of web development captured my
            interest, and I embarked on a learning journey that transformed my
            career path. Today, I am a dedicated web developer passionate about
            creating innovative and impactful digital experiences.
          </p>
        </section>
      </section>
    </div>
  );
};

export default About;
