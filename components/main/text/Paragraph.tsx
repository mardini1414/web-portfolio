import React from 'react';

function Paragraph({ text }: { text: string }): React.ReactNode {
  return (
    <p className="text-black/75 text-base lg:max-w-[580px] 2xl:text-lg">
      {text}
    </p>
  );
}

export default Paragraph;
