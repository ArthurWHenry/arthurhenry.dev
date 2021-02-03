import Layout from '@/components/layout';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import Art from '@/types/art';
import SpotifyGroup from '@/components/spotify-group';
import LoadingSpotifyGroup from '@/components/loading-spotify-group';

type Track = {
  id: string;
  title: string;
  trackUrl: string;
  artist: string;
  art: Art;
};

type Artist = {
  id: string;
  title: string;
  artistUrl: string;
  art: Art;
  genre: string;
};

const About = () => {
  const { data: tracks } = useSWR('/api/top-tracks', fetcher);
  const { data: artists } = useSWR('/api/top-artists', fetcher);

  return (
    <Layout>
      <div className="max-w-xl mx-auto p-6">
        <div className="flex flex-col justify-center items-center w-full">
          <span className="font-bold text-2xl text-gray-50 mb-3">About</span>
          <p className="font-light text-gray-300 text-center">
            Hello all, my name is Arthur Henry. Currently, I am a computer
            science student at the University of Central Florida. I mainly work
            on personal projects related to JavaScript. Building applications
            with JavaScript has allowed me to channel my artistic side through
            programming. Most projects I work on represent that side of me.
          </p>
        </div>
      </div>
      <section className="flex flex-col justify-center items-center max-w-xl mx-auto mt-6">
        <div className="flex flex-col justify-center items-center">
          <h2 className=" text-gray-50 text-2xl font-bold mb-3">Top Songs</h2>
          <div className="">
            {!tracks ? (
              <LoadingSpotifyGroup topCount={5} />
            ) : (
              <>
                {tracks?.tracks.map((track: Track) => (
                  <SpotifyGroup
                    key={track.id}
                    title={track.title}
                    text={track.artist}
                    art={track.art}
                    link={track.trackUrl}
                  />
                ))}
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-6">
          <h2 className="text-gray-50 text-2xl font-bold mb-3">Top Artists</h2>
          <div className="">
            {!artists ? (
              <LoadingSpotifyGroup topCount={5} />
            ) : (
              <>
                {artists.artists.map((artist: Artist) => (
                  <SpotifyGroup
                    key={artist.id}
                    title={artist.title}
                    text={artist.genre}
                    art={artist.art}
                    link={artist.artistUrl}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
