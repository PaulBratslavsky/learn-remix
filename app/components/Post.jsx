
import { formatDate, getImageThumbnail, selelctComponent } from "~/helpers";

export default function Post({ data }) {
  const { title, featuredImage, description, publishedAt, author, Components } =
    data.attributes;

  const { firstName, lastName, avatar } = author.data.attributes;

  const authorName = `${firstName} ${lastName}`;

  const authorImageUrl = getImageThumbnail(avatar);
  const featuredImageUrl = featuredImage.data.attributes.url;

  return (
    <div className="card bg-base-100">
      <div className="h-44 mb-4 md:h-72 overflow-hidden relative rounded-t-lg w-full">
        <img
          src={featuredImageUrl}
          alt={title}
          className="w-full h-full absolute inset-0 object-cover"
        />
      </div>
      <div className="p-4">
        <h1 className="lg:text-4xl text-2xl font-semibold mb-6 text-primary">
          {title}
        </h1>

        <div className="relative flex items-center space-x-3 py-4 border-b border-base-200">
          {authorImageUrl && (
            <img
              src={authorImageUrl}
              alt={authorName}
              className="w-10 h-10 rounded-full"
            />
          )}

          <div>
            <div className="text-info font-semibold">{authorName}</div>
            <div className="text-xs">
              Published on {formatDate(publishedAt)}
            </div>
            <div className="text-xs">
              Description: {description}
            </div>
          </div>

        </div>

        <div className="p-3">
          {Components && selelctComponent(Components)}
        </div>
      </div>
    </div>
  );
}
