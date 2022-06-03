import styled from "@emotion/styled";
import FluxProvider from "./FluxProvider";
import { useMemo } from "react";

const AlignToCssValue = {
  top: "flex-start",
  middle: "center",
  blttom: "flex-end",
};

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;

  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => AlignToCssValue[align]};
`;

const Row = ({ children, justify, align, gutter, ...props }) => {
  const gutterStyle = useMemo(() => {
    if (Array.isArray(gutter)) {
      const horizontalGutter = gutter[0];
      const verticalGutter = gutter[1];
      return {
        marginTop: `-${verticalGutter / 2}px`,
        marginBottom: `-${verticalGutter / 2}px`,
        marginLeft: `-${horizontalGutter / 2}px`,
        marginRight: `-${horizontalGutter / 2}px`,
      };
    }
    return {
      marginLeft: `-${gutter / 2}px`,
      marginRight: `-${gutter / 2}px`,
    };
  }, [gutter]);
  return (
    <FluxProvider Provider gutter={gutter}>
      <StyledRow
        {...props}
        align={align}
        justify={justify}
        style={{ ...gutterStyle, ...props.style }}
      />
      ;
    </FluxProvider>
  );
};

export default Row;
