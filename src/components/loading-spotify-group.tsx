type Props = {
  topCount: number;
};

function LoadingSpotifyGroup({ topCount }: Props) {
  return (
    <>
      {[...Array(topCount)].map((_, idx) => (
        <div key={idx} className="m-1">
          <div className="bg-gray-50 animate-pulse flex w-80 md:w-96 h-24 rounded-md items-center p-6">
            <div className="rounded-full bg-gray-300 h-10 w-10"></div>
            <div className="ml-4 flex-1 space-y-2">
              <div className="h-4 bg-gray-300 rounded w-1/4 sm:w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 sm:w-3/4"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default LoadingSpotifyGroup;
