import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <>
      <main>hello world</main>
      <Link href="/users">users</Link>
      <ProductCard />
    </>
  );
}
