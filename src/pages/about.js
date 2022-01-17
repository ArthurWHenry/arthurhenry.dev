import Layout from '../components/layout';

const books = [
  {
    title: 'The Total Money Makeover',
    author: 'Dave Ramsey',
    link: 'https://www.amazon.com/Total-Money-Makeover-Classic-Financial/dp/1595555277/ref=sr_1_1?keywords=total+money+makeover&qid=1642448144&s=books&sprefix=total+money%2Cstripbooks%2C84&sr=1-1',
  },
];

const artists = [
  {
    name: 'Angèle',
    spotifyUrl:
      'https://open.spotify.com/artist/3QVolfxko2UyCOtexhVTli?si=d9cb5b2f70e8405b',
  },
  {
    name: 'Christine and the Queens',
    spotifyUrl:
      'https://open.spotify.com/artist/04vj3iPUiVh5melWr0w3xT?si=CSQ0NSlOSzmLQA5haDA8MQ',
  },
  {
    name: 'Claire Laffut',
    spotifyUrl:
      'https://open.spotify.com/artist/69zVBf7wk5vKWsTF7zE5CC?si=d08b0c0e26a44888',
  },

  {
    name: 'Harry Styles',
    spotifyUrl:
      'https://open.spotify.com/artist/6KImCVD70vtIoJWnq6nGn3?si=15b1b0f835c14bd4',
  },
  {
    name: 'Scxtt Aye',
    spotifyUrl:
      'https://open.spotify.com/artist/2SICCedje0gdK1Y4UNbO5Q?si=2a4464c1e2864039',
  },
  {
    name: 'The Staves',
    spotifyUrl:
      'https://open.spotify.com/artist/5G49Sq5mMzAkGL4ZP6eVPY?si=e497c0f68a7b49e3',
  },
];

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <main className="p-3">
          <h1 className="font-black text-2xl sm:text-3xl">
            Getting to know a little about me
          </h1>
          <p className="leading-loose">
            As mentioned in my home page, I'm currently a software engineer at
            Nielsen. Before that, I attended the University of Central Florida
            and received my bachelor's in computer science.
            <br />
            When I'm not working or coding on my own time, I'm out trying new
            coffee shops, breweries, or just listening to music while walking
            around the lake nearby. These help me keep a good balance between
            life and work.
          </p>
        </main>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="p-3">
          <h2 className="font-bold text-xl sm:text-2xl">
            Books I'm currently reading
          </h2>
          <ul>
            {books.map(({ author, link, title }) => (
              <li key={title}>
                <span className="trakcing-wide">
                  <a
                    className="hover:underline"
                    href={link}
                    target="_blank"
                    rel="noopenner noreferrer"
                  >
                    {title}
                  </a>
                </span>
                <span className="text-gray-600 text-sm"> by {author}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="p-3">
          <h2 className="font-bold text-xl sm:text-2xl">
            Artists I currently have on rotation
          </h2>
          <ul>
            {artists.map(({ name, spotifyUrl }) => (
              <li key={name}>
                <span className="trakcing-wide">
                  <a className="hover:underline" href={spotifyUrl}>
                    {name}
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default About;
