import type { StoryResponse } from "@/types/Story";

export const getTopStories = async (
  title: string,
  page = 1,
  itemsPerPage = 5
): Promise<StoryResponse[]> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");
  //   console.log(
  //     `http://localhost:3000/api/v1/stories?title=${encodeURIComponent(
  //       title
  //     )}&page=${page}&itemsPerPage=${itemsPerPage}`
  //   );
  const res = await fetch(
    `http://localhost:3000/api/v1/stories/?title=${encodeURIComponent(title)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Failed to fetch top stories");
  }

  const data = await res.json();
  return data;
};
