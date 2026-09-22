const BASE_URL = "https://api.tvmaze.com";

// Fetch popular shows for the home and catalog pages
export async function fetchShows() {
  try {
    const res = await fetch(`${BASE_URL}/shows`);
    if (!res.ok) {
      throw new Error(`Failed to fetch shows (status: ${res.status})`);
    }
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error in fetchShows:", error);
    throw error;
  }
}

// Search shows by title keyword from TVMaze
export async function searchShows(query) {
  if (!query || !query.trim()) {
    return fetchShows();
  }

  try {
    const res = await fetch(`${BASE_URL}/search/shows?q=${encodeURIComponent(query.trim())}`);
    if (!res.ok) {
      throw new Error(`Failed to search shows (status: ${res.status})`);
    }
    const data = await res.json();
    if (Array.isArray(data)) {
      return data.map((item) => item.show).filter(Boolean);
    }
    return [];
  } catch (error) {
    console.error("Error in searchShows:", error);
    throw error;
  }
}

// Fetch single show details including embedded cast
export async function fetchShowById(id) {
  try {
    const res = await fetch(`${BASE_URL}/shows/${id}?embed[]=cast`);
    if (!res.ok) {
      throw new Error(`Failed to fetch show ${id} (status: ${res.status})`);
    }
    return await res.json();
  } catch (error) {
    console.error(`Error in fetchShowById for ${id}:`, error);
    throw error;
  }
}
