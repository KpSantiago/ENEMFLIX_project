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
    title: string;
    thumbnails: {
      high: Resolutions;
      medium: Resolutions;
    };
    publishTime: string;
  };
}
