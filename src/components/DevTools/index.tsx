import React from "react";
import { Song } from "../../types/song";
import { getDevConfig } from "../../helpers/todaysSolution";
import * as Styled from "./index.styled";

interface Props {
  onReroll: () => void;
  currentSolution: Song;
}

export function DevTools({ onReroll, currentSolution }: Props) {
  const devConfig = getDevConfig();
  
  console.log('[DevTools] Config check:', devConfig);
  
  if (!devConfig.devMode || !devConfig.showDevTools) {
    console.log('[DevTools] Hidden - devMode:', devConfig.devMode, 'showDevTools:', devConfig.showDevTools);
    return null;
  }

  console.log('[DevTools] Rendering!');

  return (
    <Styled.Container>
      <Styled.Panel>
        <h3>🛠️ Dev Tools</h3>
        <Styled.Info>
          <p>
            <strong>Current Song:</strong> {currentSolution.artist} -{" "}
            {currentSolution.name}
          </p>
          <p>
            <strong>YouTube ID:</strong> {currentSolution.youtubeId}
          </p>
        </Styled.Info>
        <Styled.ButtonGroup>
          <button onClick={onReroll}>🔄 Reroll Song</button>
          <a
            href={`https://youtube.com/watch?v=${currentSolution.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            🎬 Watch on YouTube
          </a>
        </Styled.ButtonGroup>
      </Styled.Panel>
    </Styled.Container>
  );
}
