import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import ContentWrapper from "./ContentWrapper";

// const IconStyle = 'w-[50px] h-[50px] rounded-full bg-black flex items-center justify-center cursor-pointer duration-300 hover:text-pink shadow-on-hoverIcon'

const SocialIcon = ({ Icon, url }) => {
  return (
    <a href={url} target="__blank">
      <li className="w-[50px] h-[50px] rounded-full bg-black flex items-center justify-center cursor-pointer duration-300 hover:text-pink shadow-on-hoverIcon">
        <Icon alt={`Icon`} />
      </li>
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black3 py-[50px] text-white relative ">
      <ContentWrapper className="flex flex-col items-center">
        <ul className="list-none flex items-center justify-center gap-4 md:gap-[30px] mb-5 md:mb-[30px] ">
          <li className="cursor-pointer text-xs md:text-base hover:text-pink duration-200">
            Terms Of Use
          </li>
          <li className="cursor-pointer text-xs md:text-base hover:text-pink duration-200">
            Privacy-Policy
          </li>
          <li className="cursor-pointer text-xs md:text-base hover:text-pink duration-200">
            About
          </li>
          <li className="cursor-pointer text-xs md:text-base hover:text-pink duration-200">
            Blog
          </li>
          <li className="cursor-pointer text-xs md:text-base hover:text-pink duration-200">
            FAQ
          </li>
        </ul>

        <div className="text-center text-xs md:text-sm leading-5 opacity-50 max-w-[800px] mb-5 md:mb-[30px] ">
          <p>
            At FilmFusion, we bring movies to life! Dive into the ultimate
            cinematic experience with our comprehensive database, powered by
            TMDb. Explore trending films, discover hidden gems, and stay updated
            with the latest releases. Whether you're a casual viewer or a movie
            enthusiast, FilmFusion is your go-to platform for everything movies.
            Stay connected and follow us for your daily dose of film magic!
          </p>
        </div>

        <ul className="flex items-center justify-center gap-3 ">
          <SocialIcon
            Icon={FaGithub}
            url={"https://github.com/rupendrachoudhary25"}
          />
          <SocialIcon
            Icon={FaFacebookF}
            url={"https://www.facebook.com/rupendra.webdev"}
          />
          <SocialIcon
            Icon={FaInstagram}
            url={"https://www.instagram.com/rupendra_choudhary_"}
          />
          <SocialIcon
            Icon={FaSquareXTwitter}
            url={"https://x.com/rupendrakumar_"}
          />
          <SocialIcon
            Icon={FaLinkedin}
            url={"https://www.linkedin.com/in/rupendra-webdev"}
          />
        </ul>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
