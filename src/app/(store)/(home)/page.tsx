export default async function Home() {
  await new Promise((resolve) => setInterval(resolve, 2000));
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}
