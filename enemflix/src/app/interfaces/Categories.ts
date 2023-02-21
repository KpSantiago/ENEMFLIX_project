interface Resolutions {
  url: string;
  width: number;
  height: number;
}

export interface Categories {
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
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
