import { publicBaseUrl } from "@/config";

const NoIconsFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center pb-12">
      <img
        src={`${publicBaseUrl}/no-icons-found.png`}
        alt="No Icons Found"
        className="max-w-48 dark:brightness-75"
      />
      <h2 className="text-2xl font-bold mb-2 text-sky-400 dark:text-sky-600">
        No Icons Found
      </h2>
      <p className="text-lg opacity-75 max-w-[85vw] md:max-w-[600px]">
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
