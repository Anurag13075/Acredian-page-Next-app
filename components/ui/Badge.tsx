export default function Badge(props: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span {...props}>
      {props.children}
    </span>
  );
}
