import qs from "qs";

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } =
  process.env;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const TOP_TRACKS_ARTISTS_ENDPOINT = "https://api.spotify.com/v1/me/top";
const basicAuth = Buffer.from(
  `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
).toString("base64");

async function getAccessToken() {
  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: qs.stringify({
      grant_type: "refresh_token",
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  });

  return res.json();
}

type TypeOptions = "tracks" | "artists";

export async function getTopArtistsTracks(type: TypeOptions) {
  const { access_token } = await getAccessToken();

  console.log(
    await fetch(`https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
  );

  return fetch(`https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
}
