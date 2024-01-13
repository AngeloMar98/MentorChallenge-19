import photosnap from "./../images/photosnap.svg";
import faceit from "./../images/faceit.svg";
import eyecam from "./../images/eyecam-co.svg";
import insure from "./../images/insure.svg";
import loop from "./../images/loop-studios.svg";
import manage from "./../images/manage.svg";
import myhome from "./../images/myhome.svg";
import account from "./../images/account.svg";
import shortly from "./../images/shortly.svg";
import theAirFilter from "./../images/the-air-filter-company.svg";

const logosMap = new Map([
  ["Photosnap", photosnap],
  ["FaceIt", faceit],
  ["Manage", manage],
  ["Account", account],
  ["Loop Studios", loop],
  ["Eyecam Co.", eyecam],
  ["The Air Filter Company", theAirFilter],
  ["Insure", insure],
  ["Shortly", shortly],
  ["MyHome", myhome],
]);

export function JobCard({ card, onAddTag }) {
  return (
    <article
      className={`rounded-md z-10 bg-white px-4 pb-4 laptop:py-4 text-[15px] border-l-[6px] ${
        card.new && card.featured ? "border-darkCyan" : "border-white"
      } card-shadow w-full max-w-[800px] mx-auto laptop:flex laptop:flex-row laptop:justify-between laptop:items-center laptop:px-4`}
    >
      <div className="flex gap-4 flex-col laptop:flex-row laptop:items-center">
        <img
          className="-translate-y-1/2 laptop:translate-y-0 w-[40px] laptop:w-[60px]"
          alt="Job company logo"
          src={logosMap.get(card.company)}
        />
        <div className="flex flex-col gap-2 laptop:gap-0 -mt-6 laptop:mt-0 ">
          <div className="flex flex-row ">
            <span className="text-darkCyan font-semibold">{card.company}</span>
            <div className="ml-4 font-semibold uppercase flex flex-row gap-2 items-center text-white text-sm">
              {card.new && (
                <span className="rounded-full bg-darkCyan text-center px-2 pt-1 pb-[2px] h-fit leading-none pointer-events-none">
                  New!
                </span>
              )}
              {card.featured && (
                <span className="rounded-full bg-darkerGrayCyan text-center px-2 pt-1 pb-[2px] h-fit leading-none pointer-events-none">
                  Featured
                </span>
              )}
            </div>
          </div>
          <div className="font-semibold text-base transition-colors duration-150 hover:cursor-pointer hover:text-darkCyan">
            {card.position}
          </div>
          <div className="text-darkGrayCyan">
            <span>{card.postedAt}</span> • <span>{card.contract}</span> •{" "}
            <span>{card.location}</span>
          </div>
        </div>
      </div>
      <hr className="my-4 laptop:hidden" />
      <div className="flex flex-row flex-wrap gap-3 font-semibold h-fit">
        <span onClick={() => onAddTag(card.role)} className="tag">
          {card.role}
        </span>
        <span onClick={() => onAddTag(card.level)} className="tag">
          {card.level}
        </span>
        {card.tools.map((tool) => (
          <span onClick={() => onAddTag(tool)} className="tag" key={tool}>
            {tool}
          </span>
        ))}
        {card.languages.map((lang) => (
          <span onClick={() => onAddTag(lang)} className="tag" key={lang}>
            {lang}
          </span>
        ))}
      </div>
    </article>
  );
}
