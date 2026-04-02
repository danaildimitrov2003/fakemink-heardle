import { songs } from "../constants";
import { Song } from "../types/song";

export function searchSong(searchTerm: string): Song[] {
  if (!searchTerm || searchTerm.trim() === "") {
    return [];
  }
  
  searchTerm = searchTerm.toLowerCase().trim();

  return songs
    .filter((song: Song) => {
      const songName = song.name.toLowerCase();
      const songArtist = song.artist.toLowerCase();

      return songArtist.includes(searchTerm) || songName.includes(searchTerm);
    })
    .sort((a, b) =>
      a.artist.toLowerCase().localeCompare(b.artist.toLocaleLowerCase())
    )
    .slice(0, 5);
}
