export default function SectionHeading({ number, children, eyebrow }) {
  return (
    <div className="section-heading">
      <div className="section-heading-main">
        <span className="section-number">{number}</span>
        <h2>{children}</h2>
      </div>
      {eyebrow ? <span className="section-eyebrow">{eyebrow}</span> : null}
    </div>
  );
}
