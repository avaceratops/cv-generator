import '../styles/CVHeading.scss';

export default function CVHeading({ text }) {
  const firstThreeLetters = text.slice(0, 3);
  const remainingText = text.slice(3);

  return (
    <h3 className="cv-heading">
      <span>{firstThreeLetters}</span>
      {remainingText}
    </h3>
  );
}
