// Strip HTML tags from TVMaze summaries while preserving paragraph breaks
export function stripHtml(html) {
  if (!html) return "No description available for this title.";

  const withLineBreaks = html
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "");

  const parser = typeof DOMParser !== "undefined" ? new DOMParser() : null;
  if (parser) {
    const doc = parser.parseFromString(withLineBreaks, "text/html");
    return doc.body.textContent || "";
  }

  return withLineBreaks
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .trim();
}

// Extract 4-digit release year from date string (e.g. "2024-05-10")
export function formatYear(dateStr) {
  if (!dateStr) return "N/A";
  const match = dateStr.match(/^(\d{4})/);
  return match ? match[1] : "N/A";
}

// Format rating to a single decimal or return N/A
export function formatRating(rating) {
  if (rating === null || rating === undefined || Number.isNaN(Number(rating))) {
    return "N/A";
  }
  return Number(rating).toFixed(1);
}

export function truncateText(text, maxLength = 140) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "…";
}
