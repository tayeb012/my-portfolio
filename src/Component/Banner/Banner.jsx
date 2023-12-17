import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  const myImage = `https://i.ibb.co/n7PsPSQ/TAYEB-DSC-0163.jpg`;

  const handleDownload = () => {
    const resumeUrl =
      "https://word-edit.officeapps.live.com/we/WordViewer/request.pdf?WOPIsrc=https%3A%2F%2Fwopi%2Eonedrive%2Ecom%2Fwopi%2Ffiles%2F5CFB00FC9CC244D0%211243&access_token=4w4mI63jxGDtoqgA5dcovF7efwQIlp_HJswvEEmce1nv-mFhYP8liD6w-hO02gQR_xXvT_RZs36TUGRf4NQGRYqJWYayLrE-JuOlJKi_he8l9eEA9CyaVuTdrEn6kkbBkTa8zEPb_2xjYxYTw_PanlzSL_hm924nfnl5rkStp0jSECaKBtR2qamX2R2ptwqdiF8La2S8PBvWoAM4bv5MKeFW35SHEUq5opf1o9O2CWGK4Agv0xZaTTYGZPn2yoddjH9xhYNNQmTp-OhQPpWuRA0h71FGSjop-QiQ2Uv0zmF-JvzjsV9UFNo6pKmaqoY3b7Nb_IYkDs9UhDc0SLorvdWYupupxW5ztI0hLaGXFgJfxP304PaP5AFfk8juf5WRy-0YbvnX5WTcFy3KnaU2n2JoUkpaWGyhNBYVLKObfq9KV1KT2JM2oKcHdVDc-PZVjDSfHbIQjkilhiscCGDcftLH8jx-Oa33hIDssGaHh4nnscZkCsiVdop_BTLsA3mYq5&access_token_ttl=1704636333195&type=downloadpdfwithoutcomments&rndm=5bfeb056-f0c5-4bdf-b107-43dafea80440"; // Replace with the actual path to your resume file
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
