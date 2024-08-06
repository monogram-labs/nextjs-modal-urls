import Feed from "@/components/Feed";
import { mockItems } from "@/data/item";

export default function Home() {
  return (
    <main id="main-container" className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
			<Feed items={mockItems} />

      </div>
    </main>
  );
}
