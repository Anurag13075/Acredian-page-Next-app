export default function Card(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      {props.children}
    </div>
  );
}
