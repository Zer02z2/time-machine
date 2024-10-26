export const Header = ({
  isFetching,
  askServer,
}: {
  isFetching: boolean
  askServer: () => void
}) => {
  return (
    <div>
      <div className="flex flex-col items-center w-full pb-8">
        <h1 className="pb-4 text-3xl font-bold text-neutral-300">
          What time is the server (UTC)?
        </h1>
        <button
          className="px-4 py-1 bg-yellow-400 rounded-full text-neutral-900"
          onClick={askServer}
          disabled={isFetching}
        >
          Ask politely
        </button>
      </div>
    </div>
  )
}
