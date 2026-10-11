"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Briefcase,
  ChevronDown,
  ExternalLink,
  FolderGit2,
  GraduationCap,
  ArrowDownUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import events from "@/config/timeline.json";

export type TimelineEvent = {
  id: string;
  date: string; // YYYY-MM, used for sorting
  dateLabel: string;
  category: "Education" | "Work" | "Project" | "Award";
  title: string;
  org: string;
  summary: string;
  details: string[];
  tags: string[];
  link?: { name: string; url: string };
  upcoming?: boolean;
};

const ALL_EVENTS = events as TimelineEvent[];
const CATEGORIES = ["All", "Work", "Education", "Project", "Award"] as const;
type Filter = (typeof CATEGORIES)[number];

const categoryStyle: Record<
  TimelineEvent["category"],
  { icon: typeof Briefcase; dot: string; badge: string }
> = {
  Work: {
    icon: Briefcase,
    dot: "bg-blue-600 dark:bg-blue-500",
    badge: "bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  },
  Education: {
    icon: GraduationCap,
    dot: "bg-emerald-600 dark:bg-emerald-500",
    badge: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  },
  Project: {
    icon: FolderGit2,
    dot: "bg-purple-600 dark:bg-purple-500",
    badge: "bg-purple-50 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  },
  Award: {
    icon: Award,
    dot: "bg-amber-500 dark:bg-amber-400",
    badge: "bg-amber-50 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  },
};

export function Timeline() {
  const [filter, setFilter] = useState<Filter>("All");
  const [newestFirst, setNewestFirst] = useState(true);
  const [open, setOpen] = useState<Set<string>>(new Set());

  const visible = useMemo(() => {
    const list = ALL_EVENTS.filter((e) => filter === "All" || e.category === filter);
    // Stable sort by date; ties keep file order (reversed for newest-first).
    const indexed = list.map((e, i) => ({ e, i }));
    indexed.sort((a, b) =>
      a.e.date === b.e.date ? a.i - b.i : a.e.date < b.e.date ? -1 : 1
    );
    const sorted = indexed.map((x) => x.e);
    return newestFirst ? sorted.reverse() : sorted;
  }, [filter, newestFirst]);

  const expandable = visible.filter((e) => e.details.length > 0);
  const allOpen = expandable.length > 0 && expandable.every((e) => open.has(e.id));

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const toggleAll = () =>
    setOpen(allOpen ? new Set() : new Set(expandable.map((e) => e.id)));

  let lastYear = "";

  return (
    <div data-testid="timeline">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <div
          role="group"
          aria-label="Filter by category"
          className="flex flex-wrap gap-2"
        >
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              data-testid={`timeline-filter-${c.toLowerCase()}`}
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium border transition-colors",
                filter === c
                  ? "bg-gray-900 text-white border-gray-900 dark:bg-gray-100 dark:text-gray-900 dark:border-gray-100"
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-400 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:hover:border-gray-500"
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            data-testid="timeline-sort"
            onClick={() => setNewestFirst((v) => !v)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <ArrowDownUp className="w-4 h-4" />
            {newestFirst ? "Newest first" : "Oldest first"}
          </button>
          <button
            type="button"
            data-testid="timeline-expand-all"
            onClick={toggleAll}
            disabled={expandable.length === 0}
            className="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-40 transition-colors"
          >
            {allOpen ? "Collapse all" : "Expand all"}
          </button>
        </div>
      </div>

      <p data-testid="timeline-count" className="sr-only" aria-live="polite">
        Showing {visible.length} events
      </p>

      {visible.length === 0 ? (
        <p data-testid="timeline-empty" className="text-gray-500">
          Nothing here yet.
        </p>
      ) : (
        <ol className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3">
          {visible.map((e) => {
            const year = e.date.slice(0, 4);
            const showYear = year !== lastYear;
            lastYear = year;
            const style = categoryStyle[e.category];
            const Icon = style.icon;
            const isOpen = open.has(e.id);
            const hasDetails = e.details.length > 0;

            return (
              <li key={e.id} className="mb-8 ml-8 last:mb-0">
                {showYear && (
                  <div
                    data-testid="timeline-year"
                    className="mb-4 text-sm font-bold tracking-widest text-gray-400 dark:text-gray-500"
                  >
                    {year}
                  </div>
                )}
                <div className="relative">
                <span
                  className={cn(
                    "absolute -left-[45px] top-6 flex items-center justify-center w-6 h-6 rounded-full ring-4 ring-gray-50 dark:ring-gray-900",
                    style.dot,
                    e.upcoming && "opacity-50"
                  )}
                  aria-hidden
                >
                  <Icon className="w-3.5 h-3.5 text-white" />
                </span>

                <article
                  data-testid="timeline-card"
                  data-event-id={e.id}
                  data-category={e.category}
                  className={cn(
                    "bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 md:p-6 transition-shadow hover:shadow-lg",
                    e.upcoming && "border-dashed"
                  )}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      data-testid="timeline-card-category"
                      className={cn("text-xs font-semibold px-2.5 py-0.5 rounded-full", style.badge)}
                    >
                      {e.category}
                    </span>
                    <time
                      data-testid="timeline-card-date"
                      dateTime={e.date}
                      className="text-sm text-gray-500 dark:text-gray-400"
                    >
                      {e.dateLabel}
                    </time>
                  </div>

                  <h3
                    data-testid="timeline-card-title"
                    className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100"
                  >
                    {e.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{e.org}</p>
                  <p
                    data-testid="timeline-card-summary"
                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {e.summary}
                  </p>

                  <AnimatePresence initial={false}>
                    {hasDetails && isOpen && (
                      <motion.div
                        id={`details-${e.id}`}
                        data-testid="timeline-card-details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-700 dark:text-gray-300">
                          {e.details.map((d) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {e.tags.map((t) => (
                            <span
                              key={t}
                              data-testid="timeline-card-tag"
                              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {(hasDetails || e.link) && (
                    <div className="flex items-center gap-4 mt-4">
                      {hasDetails && (
                        <button
                          type="button"
                          data-testid="timeline-card-toggle"
                          aria-expanded={isOpen}
                          aria-controls={`details-${e.id}`}
                          onClick={() => toggle(e.id)}
                          className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {isOpen ? "Show less" : "Show more"}
                          <ChevronDown
                            className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")}
                          />
                        </button>
                      )}
                      {e.link && (
                        <a
                          href={e.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-testid="timeline-card-link"
                          className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {e.link.name}
                        </a>
                      )}
                    </div>
                  )}
                </article>
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}
