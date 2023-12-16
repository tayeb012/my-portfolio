import { Link } from "react-router-dom";
import SectionHeader from "../../CommonSection/SectionHeader";
const Contact = () => {
  return (
    <div id="contact">
      <SectionHeader
        subTittle={`Get in Touch`}
        tittle={`Contact Me`}
      ></SectionHeader>
      <section className="flex justify-center items-center">
        <div className="border w-3/5 p-10 border-black flex gap-2 flex-col justify-center items-center md:text-2xl xl:text-3xl rounded-badge">
          <Link
            to={`mailto:tayebhoss80@gmail.com?subject=Subject%20of%20the%20Email&body=Hello%20there,%0A%0A`}
          >
            tayebhoss80@gmail.com
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;
