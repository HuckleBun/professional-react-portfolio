import React from "react";

function Footer() {
  const icons = [
    {
      name: "fab fa-github",
      url: "https://github.com/hucklebun"
    },
    {
      name: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/micah-duehring-b96997213/"
    },
    {
      name: "fab fa-stack-overflow",
      url: "https://stackoverflow.com/users/16151683/hucklebun"
    },
  ];

  return (
    <footer className="footer bg-dark">
      <div className="container px-4 px-lg-5">
        <div className=" text-center text-muted">
          {icons.map((icon) => (
            <a
              href={icon.url}
              key={icon.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`icons ${icon.name}`}></i>
            </a>
          ))}
        </div>
        <div className="small text-center text-white">
          &copy; {new Date().getFullYear()} - Made with love by Micah Duehring
        </div>
      </div>
    </footer>
  );
}

export default Footer;
