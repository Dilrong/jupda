import React from "react";
import styled from "styled-components";
import EventRow from "./EventRow";

const StyledTableBorder = styled.div`
  margin: 8px 0;
  padding: 16px;
  border-radius: 18px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
`;

const EventTable = () => {
  return (
    <StyledTableBorder>
      TODO: Active | Ended
      <EventRow title="테스트1" />
    </StyledTableBorder>
  );
};

export default EventTable;
