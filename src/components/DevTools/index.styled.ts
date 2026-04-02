import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

export const Panel = styled.div`
  background: #1a1a1a;
  border: 2px solid #4CAF50;
  border-radius: 8px;
  padding: 15px;
  max-width: 300px;
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
  color: #fff;
  font-family: monospace;
  font-size: 12px;

  h3 {
    margin: 0 0 10px 0;
    color: #4CAF50;
  }
`;

export const Info = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;

  p {
    margin: 5px 0;
    word-break: break-all;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  button,
  a {
    flex: 1;
    min-width: 80px;
    padding: 8px 12px;
    background: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 11px;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    transition: background 0.2s;

    &:hover {
      background: #45a049;
    }
  }
`;
