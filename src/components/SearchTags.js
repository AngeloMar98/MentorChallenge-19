import { SearchTag } from "./SearchTag";

export function SearchTags({ currJobTags, onRemoveTag, onRemoveAll }) {
  return (
    <div
      className={`flex items-center justify-center px-4 mb-[-1.6rem] text-[15px] ${
        currJobTags.length <= 0 ? "opacity-0" : ""
      }`}
    >
      <div className="-translate-y-1/2 bg-white rounded-md card-shadow w-full max-w-[800px] min-h-[50px] px-4 pr-14 py-2 items-center flex flex-wrap flex-row gap-3 text-darkCyan font-semibold relative">
        {currJobTags.map((tag) => (
          <SearchTag name={tag} key={tag} onRemoveTag={onRemoveTag} />
        ))}

        <span
          className="absolute right-4 hover:underline hover:cursor-pointer"
          onClick={onRemoveAll}
        >
          Close
        </span>
      </div>
    </div>
  );
}
