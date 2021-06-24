import React from "react";
import styled from "styled-components";

const Cell = styled.div`
  border: 1px solid #424242;
  border-radius: 18px;
  box-shadow: inset 0 0 1px 0 #424242, 0 0 1px 0 #424242;
  padding: 16px 32px 16px 32px;

  &:hover {
    background-color: #262626;
  }
`;

const EventRow = ({ image, title, summary, rating, date, tag }) => {
  return (
    <Cell role="table">
      {image} {title} {summary} {rating} {date} {tag}
    </Cell>
  );
};

export default EventRow;
