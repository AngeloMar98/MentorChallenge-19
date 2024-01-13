import { JobCard } from "./JobCard";

export function JobCardsList({ currJobCards, onAddTag }) {
  return (
    <ul className="px-4 py-8 flex flex-col gap-8 laptop:gap-3">
      {currJobCards.map((card) => (
        <JobCard card={card} key={card.id} onAddTag={onAddTag} />
      ))}
    </ul>
  );
}
