export default function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div>
      {eyebrow ? <p className="text-sm text-[var(--accent)]">{eyebrow}</p> : null}
      {title ? <h2 className="mt-2 text-3xl font-semibold">{title}</h2> : null}
      {copy ? <p className="mt-2">{copy}</p> : null}
    </div>
  );
}
