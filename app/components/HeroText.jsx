import ButtonLink from "~/components/ButtonLink";

export default function HeroText({ title, text, cta, to, full }) {
  return (
    <div className={`hero rounded-xl bg-base-200 ${full && "min-h-screen"}`}>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{text}</p>
          { cta && to && <ButtonLink to={to}>{cta}</ButtonLink> }
        </div>
      </div>
    </div>
  );
}
