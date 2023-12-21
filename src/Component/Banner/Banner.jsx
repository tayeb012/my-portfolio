import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  const myImage = `https://i.ibb.co/n7PsPSQ/TAYEB-DSC-0163.jpg`;

  const handleDownload = () => {
    const resumeUrl =
      "https://word-edit.officeapps.live.com/we/WordViewer/request.pdf?WOPIsrc=https%3A%2F%2Fwopi%2Eonedrive%2Ecom%2Fwopi%2Ffiles%2F5CFB00FC9CC244D0%211243&access_token=4wTNgAhte_Tphh2YOk8XW7zd0zl7q5kMornQgkenjfFhdO2FDjPETnphO5Jb35Th-4UECs5voJwIT9RI8HdR6FSH6uNOQ63ufen9M89a4d4AC3UyJ6pSOZsrLHK2oNcwYc6K5txb-vWdrmNq8Cns8IHhdYUVqhB2NahREn-6nceKTCLwyw-00wUdhZqWTH2_pF1I-Qf6UOEi-1J5-FvIlsjI3MDXmjPpbTJ7sSjTqkv_zb5ZTzuDo6OPYTB8nIZJXEimCLa4IKygHeQv3RhXCwdfDhFArtg7fU6aalau6DD8I4N0f36uAyu08ZSNCh8FeGNvQlYTutfYHfQxviT7rNsLcD6Q8R8cTfTb7ut0Jw7FE46oGLm1ybD6bxSMa9y98Vs1RtEDaSFgFBYaqyec6raw28M9u-jTQNJukbcyVrDEGARdHkHvUaPDfsdMZ5RNsnB5YLieAu369NGpXzPXCQmxztT4tGkzyis3veTAmVUDWeUGqrR1VP9EOA7k1KqoCE&access_token_ttl=1704949437639&type=downloadpdfwithoutcomments&rndm=c1e41b83-36d8-4c55-af18-b6ddcd0d184f"; // Replace with the actual path to your resume file
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
            Junior Web Developer
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
