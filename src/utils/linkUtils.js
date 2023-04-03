import AirGuardian from "../assets/airguardian.svg";

export const navbarData = {
  logo: true,
  logoSrc: AirGuardian,
  logoLink: true,
  linkUrl: "#/",
  optionalLinkText: "AirGuardian",
  copyrightNotice: `PSkinnerTech  © 2023`,
  altText: "Logo",
  links: [
    {
      url: "#/",
      displayInNav: true,
      displayInFooter: true,
      linkText: "Home",
    },
    {
      url: "#/about",
      displayInNav: true,
      displayInFooter: true,
      linkText: "About",
    },
    {
      url: "#/map",
      displayInNav: true,
      displayInFooter: true,
      linkText: "Map",
    },
    {
      url: "#/contact",
      displayInNav: true,
      displayInFooter: true,
      linkText: "Contact",
    },
    {
      url: "#/streamrdata",
      displayInNav: true,
      displayInFooter: true,
      linkText: "Streamr Data",
    },
    {
      url: "#/notfound",
      displayInNav: false,
      displayInFooter: false,
      linkText: "",
    },
  ],
};
