// components/ImageGrid.js (Updated)
import Image from "next/image";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export default function ImageGrid({ images, onDragEnd, searchTerm }) {
  // Check if images is defined and is an array
  if (!Array.isArray(images)) {
    return null; // Return null or some fallback UI if images are not available
  }

  // Filter images if they exist
  const filteredImages = images.filter((image) =>
    image.tags.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="image-grid" direction="horizontal">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="image-grid"
          >
            {filteredImages.map((image, index) => (
              <ImageCard key={image.id} image={image} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

function ImageCard({ image, index }) {
  return (
    <div className="image-card">
      <Image
        src={image.url}
        alt={`Image ${image.id}`}
        width={300} // Set your desired image width
        height={200} // Set your desired image height
      />
      <p>{image.tags}</p>
    </div>
  );
}
