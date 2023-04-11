import Markdown from "~/components/Markdown";
export default function ShortPost({ data }) {
  const { title, content } = data.attributes;
  return (
    <div className="card bg-base-100">
      <div className="p-4">
        <h1 className="lg:text-4xl text-2xl font-semibold mb-6 text-primary">
          {title}
        </h1>
        <div className="p-3">
          <Markdown content={content} />
        </div>
      </div>
    </div>
  );
}
