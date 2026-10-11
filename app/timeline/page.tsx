import { Timeline } from "@/components/timeline/Timeline";

export const metadata = {
  title: "Timeline | Prateek Ghosh",
  description: "Education, work, projects and awards over time.",
};

export default function TimelinePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">
              Timeline
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Where I've studied, worked and what I've built along the way.
          </p>
        </header>
        <Timeline />
      </div>
    </div>
  );
}
