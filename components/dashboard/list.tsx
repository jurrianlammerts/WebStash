export default function List({
  bookmarks,
}: {
  bookmarks: {
    id: string;
    title: string;
    url: string;
  }[];
}) {
  return (
    <div className="mt-8 px-5">
      <h2 className="my-2 text-sm font-medium text-gray-500">Title</h2>
      <hr />
      {bookmarks.map((bookmark) => (
        <div key={bookmark.id} className="flex justify-between">
          <a
            href={bookmark.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-baseline py-3"
          >
            <span className="truncate text-sm font-medium capitalize text-gray-700">
              {bookmark.title}
            </span>
            <span className="ml-2 truncate text-xs text-gray-400">
              {bookmark.url}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
}
