import { useState } from "react";
import { Link } from "@remix-run/react";

function SliderBtn({ onClick, children }) {
  return (
    <button
      className="btn btn-circle btn-sm bg-neutral text-neutral-content z-10"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function SliderText({ title, slug, description }) {
  return (
    <Link to={`/posts/${slug}`} className={`hero rounded-xl bg-base-200`}>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="py-6">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default function Slider({ data }) {
  const [selected, setSelected] = useState(0);

  function renderSlider(data, length) {
    const { title, featuredImage, slug } = data.attributes;
    const { url } = featuredImage.data.attributes;

    function moveBack(e) {
      e.stopPropagation();
      if (selected !== 0) setSelected((prevState) => prevState - 1);
      else setSelected(length - 1);
    }

    function moveForward(e) {
      e.stopPropagation();
      if (selected === length - 1) setSelected(0);
      else setSelected((prevState) => prevState + 1);
    }

    return (
      <div
        id={data.id}
        className="carousel-item relative w-full h-min hover:cursor-pointer"
      >
        <Link className="w-full" to={`/posts/${slug}`}>
          <div className='h-96  w-full bg-black'>
            <img src={url} layout="fill" alt={title} className="w-full h-full object-cover"/>
          </div>
        </Link>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
          <SliderBtn onClick={moveBack}>❮</SliderBtn>
          <SliderBtn onClick={moveForward}>❯</SliderBtn>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="carousel relative h-96 w-full rounded-2xl mb-3">
        {renderSlider(data.data[selected], data.data.length)}
      </div>
      <SliderText 
        title={data.data[selected].attributes.title} 
        slug={data.data[selected].attributes.slug}
        description={data.data[selected].attributes.description}  />
    </div>
  );
}
