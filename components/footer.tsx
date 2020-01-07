import styled from "@emotion/styled";

export default () => (
  <>
    <Footer>
      <span>© 2020 HelloRusk</span>
    </Footer>
    <br />
  </>
);

const Footer = styled.div`
  text-align: center;
  color: #a0a0a0;

  & span {
    margin: 10px;
    font-size: 0.9em;
  }
`;
