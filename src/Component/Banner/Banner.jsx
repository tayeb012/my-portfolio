import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  const myImage = `https://i.ibb.co/n7PsPSQ/TAYEB-DSC-0163.jpg`;

  const handleDownload = () => {
    const resumeUrl =
      "https://word-edit.officeapps.live.com/we/WordViewer/request.pdf?WOPIsrc=https%3A%2F%2Fwopi%2Eonedrive%2Ecom%2Fwopi%2Ffiles%2F5CFB00FC9CC244D0%211243&access_token=4wpNMqBJ02lk9kilCVvrzLsHak_CAMUzjYTB3OfjXuM028dlx4dRdDefCFt9D4qkIGVLY6jQiBSYV0IYJE8kr-7SJUhi3pVrYqn1HO_TxYgGX-aBdl9fKi4UMX67ZrY2H1S74Rd1L2lnChuaJl65Yff_fcZMdZ71j3EpW-_6W2b-mzwvY3n2v-xwawxKqaMyyWmXImhAp1YYfSamyHwz0OMTnC-z0oOg3OhOhDIbrfdgmAaoARNrQc_E-UePzwNcTApujaKz8QRDEpzcCvdWS-I7G8fT6nHUlEFetYbHvUY2BVripbOmKENwa4j15nXUQdr2uUFe0RIwgCF43-cZ9oDbGcAg5lVpSm44DM6jpRXTN0zmeKejbD8Vzfzpq1qTGG_vqzbFkyQpAFgi9BtTyn2EirJMhnWqQ0PueWLaSjSqse01IKiMpKchh_LDLuI95LCn25qVcK4nekT_GQUQ-K28-TQv9nS8mCOFN3k6sawNjXxW-400eK5XvS4MTs_GUi&access_token_ttl=1704872516953&type=downloadpdfwithoutcomments&rndm=5fe66898-15e5-4cf4-9097-5d13f8a867c1"; // Replace with the actual path to your resume file
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "tayeb_hossan_resume.pdf"; // You can customize the downloaded file name
    link.click();
  };

  return (
    <div className="py-10 sm:py-20 md:py-32">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <section className=" flex justify-center items-center ">
          <img
            className="rounded-full h-3/5 w-3/5"
            src={myImage}
            alt="myImage"
          />
        </section>
        <section className="font-semibold flex flex-col gap-2 sm:gap-6 items-center justify-center text-center">
          <h4 className="text-lg text-[#0e0e0e9c]">Hey, This is</h4>
          <h2 className="text-3xl sm:text-5xl">Tayeb Hossan</h2>
          <h3 className="text-2xl sm:text-3xl text-[#0e0e0e9c]">
            Frontend Developer
          </h3>
          <section className="flex gap-4">
            <button
              onClick={handleDownload}
              className="btn hover:border-slate-700 rounded-full border-black hover:bg-slate-700 hover:text-white"
            >
              Download Resume
            </button>
          </section>
          <section className="flex gap-4 text-5xl">
            <Link
              to={`https://github.com/tayeb012`}
              target="_blank"
              className="hover:scale-105"
            >
              <FaGithubSquare />
            </Link>
            <Link
              to={`https://www.instagram.com/____repulsion____/`}
              target="_blank"
              className="hover:scale-105"
            >
              <FaInstagramSquare />
            </Link>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Banner;
