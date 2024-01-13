export function SearchTag({ name, onRemoveTag }) {
  return (
    <div className="search-tag flex flex-row rounded-sm w-fit h-[30px] bg-lightGrayCyan2 overflow-hidden ">
      <span className="py-1 px-2">{name}</span>
      <span
        className="bg-darkCyan transition-colors duration-150 hover:cursor-pointer hover:bg-darkerGrayCyan flex items-center justify-center py-[2px] px-2"
        onClick={() => onRemoveTag(name)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
          <path
            fill="#FFF"
            fillRule="evenodd"
            d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
          />
        </svg>
      </span>
    </div>
  );
}
