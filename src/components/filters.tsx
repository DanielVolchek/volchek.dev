type Props = {
  filterList: string[];
  currentlyFiltered: string[];
  filterListStyles?: boolean;
  onReset?: () => void;
  onClick: (filter: string) => void;
};
export default function Filters({
  filterList,
  currentlyFiltered,
  onClick,
  filterListStyles,
  onReset = () => {
    throw new Error("onReset not defined");
  },
}: Props) {
  return (
    <ul
      className={`flex flex-wrap gap-1 ${
        filterListStyles ? "border-2 border-dashed border-teal-300 p-3" : ""
      }`}
    >
      {filterList.map((tag, index) => {
        return (
          <>
            <FilteredTag
              key={tag}
              tag={tag}
              currentlyFiltered={currentlyFiltered.includes(tag)}
              onClick={onClick}
            />
            {index !== filterList.length - 1 ? "," : ""}
          </>
        );
      })}
    </ul>
  );
}

const FilteredTag = ({
  tag,
  currentlyFiltered,
  onClick,
}: {
  tag: string;
  currentlyFiltered: boolean;
  onClick: (tag: string) => void;
}) => {
  const clickedTag = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onClick(tag);
  };
  return (
    <li
      className={`flex items-center ${
        currentlyFiltered ? "font-bold" : ""
      } cursor-pointer text-teal-300`}
      onClick={clickedTag}
    >
      {tag} {currentlyFiltered && <FilteredXSym onClick={clickedTag} />}
    </li>
  );
};

const FilteredXSym = ({
  onClick,
}: {
  onClick: (event: React.MouseEvent<HTMLSpanElement>) => void;
}) => {
  return (
    <span
      className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-red-700 px-2 text-white"
      onClick={onClick}
    >
      X
    </span>
  );
};
