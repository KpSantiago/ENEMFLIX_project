export interface Videos {
  id: string;
  player: {
    embedHtml: any;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    channelTitle: string;
    title: string;
    description: string;
  };
}
