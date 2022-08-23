export default function Image({ data }) {
  const {
    title,
    showTitle = false,
    description,
    showDescription = false,
    alt,
    height = 500,
    width = 1000,
    image,
  } = data;

// TODO: FIX PASSING SHOWTITLE AND SHOWDESCRIPTION FROM STRAPI
  return (
    <div className="my-6">
      {title && showTitle && <h2 className="text-2xl mb-3">Title: {title}</h2>}

      {image.data !== null && (
        <img
          className="rounded-xl"
          src={data.image.data.attributes.url}
          alt={alt || "No alt text was provided"}
          height={height}
          width={width}
        />
      )}

      {description && showDescription && (
        <div className="my-2">
          <p className="text-2xl">Description: {description}</p>
        </div>
      )}
    </div>
  );
}
