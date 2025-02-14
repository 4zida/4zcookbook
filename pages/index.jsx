export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold">Welcome to 4Z's Cookbook</h1>
      <ul className="flex flex-col gap-4 mt-8">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/random-recipes">Random receipes</a>
        </li>
      </ul>
    </main>
  );
}
