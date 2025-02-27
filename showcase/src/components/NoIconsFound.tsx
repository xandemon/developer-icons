import React from 'react';

const NoIconsFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <img
        src="https://www.vecteezy.com/system/resources/previews/007/104/553/non_2x/search-no-result-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
        alt="No Icons Found"
        className="w-1/2 h-auto mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">No Icons Found</h2>
      <p className="text-lg">
        Looks like we don't have the icons you're looking for. You can create an{' '}
        <a
          href="https://github.com/xandemon/developer-icons/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          issue
        </a>{' '}
        to notify the developers or{' '}
        <a
          href="https://xandemon.github.io/developer-icons/docs/contributing/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          contribute
        </a>{' '}
        one yourself.
      </p>
    </div>
  );
};

export default NoIconsFound;
