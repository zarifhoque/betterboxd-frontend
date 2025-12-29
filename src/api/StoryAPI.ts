import type { StoriesResponse } from "@/types/Story";

export const getTopStories = async (
  page: number,
  itemsPerPage: number
): Promise<StoriesResponse> => {
  const response = await fetch(
    `http://localhost:3000/api/v1/stories?page=${page}&itemsPerPage=${itemsPerPage}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch stories");
  }
  const story = await response.json();
  console.log(story);
  return story;
};

export const getStoriesCount = async (): Promise<{
  data: { count: number };
}> => {
  const response = await fetch(
    "http://localhost:3000/api/v1/stories/meta/count"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch story count");
  }

  return response.json();
};
