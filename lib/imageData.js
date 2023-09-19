import imagesData from "../public/images.json";

export async function fetchImageData() {
  try {
    // In this case, we're simply returning the locally stored data
    return imagesData;
  } catch (error) {
    console.error("Error fetching image data:", error);
    return [];
  }
}
