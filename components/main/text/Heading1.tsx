import React from 'react';

type Heading1Prop = {
  text: string;
  className?: string;
};

function Heading1(props: Heading1Prop): React.ReactNode {
  const { text, className } = props;
  return (
    <h1
      className={`text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl ${className}`}
    >
      {text}
    </h1>
  );
}

export default Heading1;
