import HeroText from "~/components/HeroText";

export default function () {
  return (
    <HeroText
      full
      title="Hello Remix"
      text="Join me on my journey of learning Remix and using it with my favorite CMS | Strapi."
      cta="Recommend Topic"
      to="posts/add-post"
    />
  );
}
