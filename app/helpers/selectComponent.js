import Markdown from '~/components/Markdown';
import Code from '~/components/Code';

export function selelctComponent(components) {
  return components.map((component, index) => {
    const type = component.__component;

    switch (type) {
      case "my-components.video":
        return <h1 key={index}>will be video component</h1>

      case "my-components.markdown":
        return <Markdown key={index} content={component.content} />

      case "my-components.image":
        return <h1 key={index}>will be image component</h1>

      case "my-components.code":
        return <Code key={index} data={component} />

      default:
        return null;
    }
  });

}