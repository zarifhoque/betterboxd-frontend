import type { StoriesResponse, Story } from "@/types/Story";
import { toast } from "sonner";

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

// In your StoryAPI file

export const searchStories = async (
  title: string
): Promise<StoriesResponse[]> => {
  try {
    const params = new URLSearchParams({
      title: title.trim(),
    });

    const response = await fetch(
      `http://localhost:3000/api/v1/stories/?${params.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to search stories: ${response.statusText}`);
    }

    const data: StoriesResponse[] = (await response.json()).data;
    return data;
  } catch (error) {
    console.error("Error searching stories:", error);
    throw error;
  }
};

export const getStoryById = async (
  id: string,
  token: string | null | undefined
): Promise<Story> => {
  if (!token) {
    toast.error("Unauthorized access", {
      description: "You must be logged in to view this story.",
    });
    throw new Error("Authentication required");
  }

  const response = await fetch(`http://localhost:3000/api/v1/stories/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Story not found");
    }
    if (response.status === 401 || response.status === 403) {
      toast.error("Session expired or invalid");
      throw new Error("Unauthorized");
    }
    throw new Error("Failed to fetch story details");
  }

  return response.json();
};
