async function handler({ imageUrl, base64Image }) {
  if (!imageUrl && !base64Image) {
    return { error: "Must provide either imageUrl or base64Image" };
  }

  const endpoint =
    "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large";

  let imageData;
  let contentType;

  try {
    if (imageUrl) {
      const response = await fetch(imageUrl);
      const buffer = await response.arrayBuffer();
      imageData = new Uint8Array(buffer);
      contentType = response.headers.get("content-type");
    } else {
      const base64Data = base64Image.split(",")[1];
      imageData = Uint8Array.from(atob(base64Data), (c) => c.charCodeAt(0));
      contentType = base64Image.split(";")[0].split(":")[1];
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
        "Content-Type": contentType,
      },
      body: imageData,
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    return { caption: result[0].generated_text };
  } catch (error) {
    return { error: error.message };
  }
}