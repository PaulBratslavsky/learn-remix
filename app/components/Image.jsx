import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage, responsive} from '@cloudinary/react';

 // Create and configure your Cloudinary instance.
 const cld = new Cloudinary({
  cloud: { cloudName: 'dq2cllwgp' }
}); 



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

  const myImage = cld.image(image.data.attributes.provider_metadata.public_id);

  console.log(myImage, "myImage");
// TODO: FIX PASSING SHOWTITLE AND SHOWDESCRIPTION FROM STRAPI
  return (
    <div className="my-6">
      {title && showTitle && <h2 className="text-2xl mb-3">Title: {title}</h2>}

      {image.data !== null && (
        // <img
        //   className="rounded-xl"
        //   src={data.image.data.attributes.url}
        //   alt={alt || "No alt text was provided"}
        //   height={height}
        //   width={width}
        // />
        <AdvancedImage  className="rounded-xl" cldImg={myImage} plugins={[responsive({steps: 200})]}/>

      )}

      {description && showDescription && (
        <div className="my-2">
          <p className="text-2xl">Description: {description}</p>
        </div>
      )}
    </div>
  );
}
