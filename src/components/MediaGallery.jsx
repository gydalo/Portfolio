import React, { useState } from "react";

/**
 * MediaGallery component displays a gallery of images and videos.
 * Users can click on a thumbnail to view the media in a larger main preview.
 *
 * @component
 * @param {Object[]} media - An array of media items to display.
 * @param {string} media[].url - The URL of the media item (image or video).
 * @param {string} [media[].alt] - Optional alt text for images.
 * @param {string} media[].type - The type of media: 'image' or 'video'.
 *
 * @example
 * const media = [
 *   { url: "image1.jpg", alt: "A nice view", type: "image" },
 *   { url: "video1.mp4", type: "video" },
 * ];
 * return <MediaGallery media={media} />
 */
function MediaGallery({ media }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const isVideo = (item) => item.type === "video";

  return (
    <div className="media-gallery">
      <div className="media-main">
        {isVideo(media[selectedIndex]) ? (
          <video
            src={media[selectedIndex].url}
            controls
            className="media-main-content"
          />
        ) : (
          <img
            src={media[selectedIndex].url}
            alt={media[selectedIndex].alt || "Media"}
            className="media-main-content"
          />
        )}
      </div>
      <div className="media-thumbnails">
        {media.map((item, index) => (
          <div
            key={index}
            className={`media-thumbnail-wrapper ${
              selectedIndex === index ? "active" : ""
            }`}
            onClick={() => setSelectedIndex(index)}
          >
            {isVideo(item) ? (
              <video src={item.url} muted className="media-thumbnail" />
            ) : (
              <img
                src={item.url}
                alt={item.alt || "Thumbnail"}
                className="media-thumbnail"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MediaGallery;
