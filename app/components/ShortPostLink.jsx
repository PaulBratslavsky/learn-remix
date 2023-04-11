import { useParams } from "@remix-run/react";
import { formatDate } from "~/helpers/formatDate";

export default function ShortPostLink({ data }) {
  const { title, createdAt } = data.attributes;

  const selected = useParams().slug === data.attributes.slug;

  return (
    <div
      className={`flex items-center space-x-4 py-3 mb-2 hover:bg-base-100 rounded-md px-2 ${
        selected && "bg-base-100"
      }`}
    >
  
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
