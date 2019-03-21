import styled from "styled-components";
import Image from "../Image";

export default Grid => styled(Grid)`
  width: 100%;
  display: grid;
  grid: repeat(auto-fit, minmax(200px, 1fr)) / repeat(
      auto-fit,
      minmax(200px, 1fr)
    );
  gap: 10px;
  padding: 10px;

  ${Image} {
    width: 100%;
  }
`;
