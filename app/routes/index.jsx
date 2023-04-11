import HeroText from "~/components/HeroText";

export default function () {
  return (
    <>
      <HeroText
        full
        title="Hello World"
        text="Join me on my journey of learning to code using my favorite frameworks."
        cta="Read Something Cool"
        to="posts"
      />
      <HeroText
        full
        title="AI Generated Posts"
        text="Posts generated via AI from YT shorts."
        cta="Short Posts"
        to="short-posts"
      />
    </>
  );
}
