import Tweet from "../components/Tweet";

export default function HomePage() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <Tweet index={i} />
      ))}
    </>
  );
}
