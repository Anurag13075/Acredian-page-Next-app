export default function SectionHeader(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <header {...props}>
      {props.children}
    </header>
  );
}
