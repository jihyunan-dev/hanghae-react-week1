import styled from "styled-components";

const ContentWrapper = ({children}) => (
    <Wrapper>{children}</Wrapper>
)

export default ContentWrapper;

const Wrapper = styled.main`
    padding: 50px 20px;
`;