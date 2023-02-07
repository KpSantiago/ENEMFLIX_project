interface Resolutions {
  url: string;
  width: number;
  height: number;
}

export interface Playlists {
  id: string;
  channelTitle: string;
  snippet: {
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      high: Resolutions;
      standard: Resolutions;
      maxres: Resolutions;
    };
  };
}
