import React from 'react';

type Heading2Prop = {
  text: string;
  className?: string;
};

function Heading2(props: Heading2Prop): React.ReactNode {
  const { text, className } = props;
  return <h2 className={`text-2xl ${className}`}>{text}</h2>;
}

export default Heading2;
