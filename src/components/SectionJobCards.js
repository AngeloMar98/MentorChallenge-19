import jobCardsData from "../data.json";
import { useState } from "react";
import { SearchTags } from "./SearchTags";
import { JobCardsList } from "./JobCardsList";

export function SectionJobCards() {
  const [currJobTags, setCurrJobTags] = useState([]);

  const currJobCards =
    currJobTags.length > 0
      ? jobCardsData.filter(
          (jobEntry) =>
            currJobTags.some((t) => jobEntry.languages.includes(t)) ||
            currJobTags.some((t) => jobEntry.tools.includes(t)) ||
            currJobTags.includes(jobEntry.level) ||
            currJobTags.includes(jobEntry.role)
        )
      : jobCardsData;

  function handleAddTag(newTag) {
    if (currJobTags.includes(newTag)) return;
    setCurrJobTags((tagsList) => [...tagsList, newTag]);
  }

  function handleRemoveTag(removedTag) {
    setCurrJobTags((tagsList) => tagsList.filter((tag) => tag !== removedTag));
  }

  function removeAllSearchTags() {
    setCurrJobTags([]);
  }

  return (
    <section>
      <SearchTags
        currJobTags={currJobTags}
        onRemoveTag={handleRemoveTag}
        onRemoveAll={removeAllSearchTags}
      />
      <JobCardsList currJobCards={currJobCards} onAddTag={handleAddTag} />
    </section>
  );
}
