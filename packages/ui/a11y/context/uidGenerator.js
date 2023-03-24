const base = 36;

export default function uidGenerator() {
  let index = 0;

  const generate = () => {
    index += 1;

    return `a11y-${index.toString(base)}`;
  };

  return { generate };
}
