import { cld } from "~/helpers/cloudinary";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import { useParams } from "@remix-run/react";
import { formatDate } from "~/helpers/formatDate";

export default function PostLink({ data }) {
  const { title, featuredImage, createdAt } = data.attributes;
  const { attributes } = featuredImage.data;

  const selected = useParams().slug === data.attributes.slug;

  const imageURL = cld.image(attributes.provider_metadata.public_id);

  return (
    <div
      className={`flex items-center space-x-4 py-3 mb-2 hover:bg-base-100 rounded-md px-2 ${
        selected && "bg-base-100"
      }`}
    >
      <div className="mr-1 w-14 h-14 flex-shrink-0 rounded-md relative">
        <img
          src={imageURL}
          className="absolute w-full h-full top-0 left-1 rounded-md object-cover"
          alt={title}
        />
        <AdvancedImage
          className="w-full h-full absolute inset-0 object-cover"
          cldImg={imageURL}
          plugins={[responsive(), placeholder()]}
          width="100%"
          height="100%"
          alt="No alt text was provided"
          g
        />
      </div>
      <div className="flex-1">
        <p
          href="timeline-group.html"
          className="text-sm font-semibold capitalize text-primary"
        >
          {title}
        </p>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500 mt-0.5">
            {formatDate(createdAt)}
          </div>
          {/* <div class="badge badge-secondary">new</div> */}
        </div>
      </div>
    </div>
  );
}
