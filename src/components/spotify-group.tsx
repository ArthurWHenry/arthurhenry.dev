import Image from 'next/image';
import Link from 'next/link';
import Art from '@/types/art';

type Props = {
  title: string;
  text: string;
  art: Art;
  link: string;
};

function SpotifyGroup({ title, text, art, link }: Props) {
  return (
    <div className="flex justify-between items-center bg-gray-50 rounded-md w-80 md:w-96 p-6 m-1">
      <div className="flex items-center">
        <Image
          src={art.url}
          alt={`${title} art`}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="ml-4">
          <Link href={link}>
            <a className="text-sm font-bold text-gray-900 hover:underline">
              {title}
            </a>
          </Link>
          <p className="text-sm text-gray-500">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default SpotifyGroup;
