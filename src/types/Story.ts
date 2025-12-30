export interface Story {
  storyId: string;
  userId: string;
  title: string;
  body: string;
  updatedAt: string | Date;
  username: string | null;
  categoryNames: string[];
  aiSummary?: string;
}

export interface StoriesResponse {
  success: boolean;
  data: Story[];
  message: string;
}

export interface ReviewCardProps {
  story: Story;
  index?: number;
}
