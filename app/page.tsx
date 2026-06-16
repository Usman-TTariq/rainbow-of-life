import { AboutAuthor } from "./components/about-author";
import { Hero } from "./components/hero";
import { Media } from "./components/media";
import { MyBooks } from "./components/my-books";
import { Newsletter } from "./components/newsletter";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <AboutAuthor />
      <MyBooks />
      <Media />
      <Newsletter />
    </main>
  );
}
