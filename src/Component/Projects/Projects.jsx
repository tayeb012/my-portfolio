import { Card } from "flowbite-react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionHeader from "../../CommonSection/SectionHeader";

const Projects = () => {
  return (
    <div id="project" className="my-20">
      <SectionHeader
        subTittle={`Browse My Recent`}
        tittle={`Project`}
      ></SectionHeader>

      <section className="grid justify-center lg:grid-cols-2 xl:grid-cols-3 gap-10 ">
        <Card
          className="max-w-sm"
          renderImage={() => (
            <div className="h-96 overflow-y-auto">
              <img
                src="https://i.ibb.co/Sr8cwDD/contest-craft-surge-sh-2.png"
                alt="image 1"
              />
            </div>
          )}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Content Creator Project
          </h5>
          <div className="flex justify-between">
            <Link
              to={`https://github.com/tayeb012/contest-platform-client`}
              target="_blank"
              className="btn"
            >
              <FaGithub /> View Code
            </Link>
            <Link
              to={`https://contest-craft.surge.sh/`}
              target="_blank"
              className="btn"
            >
              Live Link
            </Link>
          </div>
        </Card>
        <Card
          className="max-w-sm"
          renderImage={() => (
            <div className="h-96 overflow-y-auto">
              <img
                src="https://i.ibb.co/HqCcCg2/savorsphere-eatery-surge-sh.png"
                alt="image 1"
              />
            </div>
          )}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Restaurant Project
          </h5>
          <div className="flex justify-between">
            <Link
              to={`https://github.com/tayeb012/restaurant-management-client`}
              target="_blank"
              className="btn"
            >
              <FaGithub /> View Code
            </Link>
            <Link
              to={`https://restaurent-managment-client.netlify.app`}
              target="_blank"
              className="btn"
            >
              Live Link
            </Link>
          </div>
        </Card>
        <Card
          className="max-w-sm"
          renderImage={() => (
            <div className="h-96 overflow-y-auto">
              <img
                src="https://i.ibb.co/T4krG1J/fashion-and-apparel122-surge-sh.png"
                alt="image 1"
              />
            </div>
          )}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Chic Style Project
          </h5>
          <div className="flex justify-between">
            <Link
              to={`https://github.com/tayeb012/Fashion-and-Apparel-client`}
              className="btn"
            >
              <FaGithub /> View Code
            </Link>
            <Link
              to={`https://fashion-and-apparel122.surge.sh`}
              target="_blank"
              className="btn"
            >
              Live Link
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Projects;
