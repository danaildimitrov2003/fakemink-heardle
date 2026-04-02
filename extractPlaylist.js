const https = require('https');
const fs = require('fs');

const API_KEY = 'AIzaSyAlgmKloPB6xVxvGs0LNaonOfwqR_9SgoA';
const PLAYLIST_ID = 'PL2A22S7Br46IhlZGamUZ9Acu8OKdLyJVC';

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function getPlaylistVideos() {
  const songs = [];
  let pageToken = '';
  let pageCount = 0;

  try {
    do {
      pageCount++;
      console.log(`Fetching page ${pageCount}...`);

      const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=50&pageToken=${pageToken}&key=${API_KEY}`;

      const response = await makeRequest(url);

      if (!response.items) {
        console.error('Error:', response.error?.message || 'Unknown error');
        break;
      }

      for (const item of response.items) {
        const snippet = item.snippet;
        const videoId = snippet.resourceId.videoId;
        const title = snippet.title;

        // Try to parse artist and song name from title
        // Most formats are "Artist - Song" or just "Song"
        let artist = 'Unknown Artist';
        let name = title;

        if (title.includes(' - ')) {
          const parts = title.split(' - ');
          artist = parts[0].trim();
          name = parts.slice(1).join(' - ').trim();
        }

        songs.push({
          artist,
          name,
          youtubeId: videoId,
        });

        console.log(`✓ Added: ${artist} - ${name}`);
      }

      pageToken = response.nextPageToken || '';
    } while (pageToken);

    console.log(`\n✅ Total songs extracted: ${songs.length}\n`);
    return songs;
  } catch (error) {
    console.error('Error fetching playlist:', error);
    process.exit(1);
  }
}

async function generateSongsFile(songs) {
  const fileContent = `export const songs = [
${songs.map((song) => `  {
    artist: "${song.artist.replace(/"/g, '\\"')}",
    name: "${song.name.replace(/"/g, '\\"')}",
    youtubeId: "${song.youtubeId}",
  },`).join('\n')}
];
`;

  const filePath = './src/constants/songs.ts';
  fs.writeFileSync(filePath, fileContent);
  console.log(`📝 Generated: ${filePath}`);
}

async function main() {
  console.log('🎵 YouTube Playlist Extractor\n');
  console.log(`Playlist ID: ${PLAYLIST_ID}\n`);

  const songs = await getPlaylistVideos();
  await generateSongsFile(songs);

  console.log('✨ Done! Your songs.ts is ready.\n');
}

main();
