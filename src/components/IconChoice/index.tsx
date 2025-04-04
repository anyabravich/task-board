import { labelStyles } from "../../styles/sharedStyles";
import EmojiIcon from "../EmojiIcon";
import styled from "styled-components";
import { rem } from "polished";
import { useState } from "react";
import { icons } from "./icons";

const IconChoice = () => {
  const [activeIcon, setActiveIcon] = useState(0);

  return (
    <div>
      <IconChoiceTitle>Icon</IconChoiceTitle>
      <IconChoiceIcons>
        {icons.map((icon, index) => (
          <EmojiIcon
            icon={icon}
            key={index}
            active={index === activeIcon}
            onClick={() => setActiveIcon(index)}
          />
        ))}
      </IconChoiceIcons>
    </div>
  );
};

const IconChoiceTitle = styled.p`
  ${labelStyles}
`;

const IconChoiceIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${rem(12)};
`;

export default IconChoice;
