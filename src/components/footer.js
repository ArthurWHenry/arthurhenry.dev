const socials = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/arthurwhenry/',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/arthurwhenry/',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/arthurwhenry',
  },
  {
    name: 'Polywork',
    link: 'https://www.polywork.com/arthurhenry',
  },
];

const Footer = () => (
  <div className="max-w-4xl mx-auto">
    <div className="flex flex-col items-start p-3">
      <h3 className="font-semibold tracking-wide">Connect with me</h3>
      <ul className="flex justify-center items-center space-x-2 text-sm">
        {socials.map(({ name, link }) => (
          <li key={name}>
            <a className="hover:underline" href={link}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Footer;
