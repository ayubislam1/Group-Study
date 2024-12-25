import React from 'react';

const Loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full border-4 border-gray-300 border-t-blue-500 h-12 w-12" />
      </div>
    </div>
  );
};

export default Loading;


