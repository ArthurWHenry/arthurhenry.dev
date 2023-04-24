import { memo, useEffect, useState } from "react";

// Types
type TypingTextProps = {
  strings: string[];
  typeSpeed: number;
};

const TypingText: React.FC<TypingTextProps> = ({
  strings,
  typeSpeed = 200,
}: TypingTextProps): JSX.Element => {
  const [currentString, setCurrentString] = useState(strings[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === strings.length) {
        setIndex(0);
      } else {
        setIndex(index + 1);
        setCurrentString(strings[index]);
      }
    }, typeSpeed);

    return () => {
      clearInterval(interval);
    };
  }, [index, strings, typeSpeed]);

  return (
    <div>
      <span>{currentString}</span>
    </div>
  );
};

export default memo(TypingText);
