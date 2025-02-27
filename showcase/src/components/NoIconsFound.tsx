const NoIconsFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <img
        src="/assets/no-icons-found.png"
        alt="No Icons Found"
        className="max-w-48"
      />
      <h2 className="text-2xl font-bold mb-2">No Icons Found</h2>
      <p className="text-lg">
        Looks like we don't have the icons you're looking for. You can create an{" "}
        <a
          href="https://github.com/xandemon/developer-icons/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          issue
        </a>{" "}
        to notify the developers or{" "}
        <a
          href="https://xandemon.github.io/developer-icons/docs/contributing/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          contribute
        </a>{" "}
        one yourself.
      </p>
    </div>
  );
};

export default NoIconsFound;
