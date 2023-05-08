import videoContent from './videoContent.json';

export type VideoContent = typeof videoContent;

export type Data = {
  recipeTitle: string;
  videoContents: VideoContent[];
};
