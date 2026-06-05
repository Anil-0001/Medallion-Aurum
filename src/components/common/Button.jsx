export default function Button({ children, href, ...props }) {
  const Comp = href ? "a" : "button";

  return (
    <Comp
      href={href}
      className="inline-flex items-center justify-center border border-[var(--border)] px-4 py-2"
      {...props}
    >
      {children}
    </Comp>
  );
}
