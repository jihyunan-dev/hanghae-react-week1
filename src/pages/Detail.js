import React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import ContentWrapper from '../components/ContentWrapper';
import { days } from '../model/constant/days';

const DetailPage = () => {
    const navigate = useNavigate();
    const { day } = useParams();
    const [grade, setGrade] = React.useState(Math.ceil(Math.random() * 5));

    const handleClick = (i) => {
        setGrade(i + 1);
    };

    const handleKeyDown = (e) => {
        switch (parseInt(e.key, 10)) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                setGrade(parseInt(e.key, 10));
                return;
            default:
                return;
        }
    };

    window.addEventListener('keydown', handleKeyDown);

    return (
        <ContentWrapper>
            <Container>
                <Title>{days[day]}의 점수는?</Title>
                <GradeBox>
                    {[0, 0, 0, 0, 0].map((ele, i) => (
                        <Grade key={`grade-${i}`} onClick={() => handleClick(i)} active={i + 1 <= grade} />
                    ))}
                </GradeBox>
                <SaveButton onClick={() => navigate(`/`)}>남기기</SaveButton>
            </Container>
        </ContentWrapper>
    );
};

export default DetailPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h2`
    margin-bottom: 20px;
    font-size: 20px;
`;

const GradeBox = styled.article`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`;

const Grade = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${(props) => (props.active ? props.theme.color.main : props.theme.color.gray)};
    margin-right: 5px;
    cursor: pointer;
`;

const SaveButton = styled.button`
    min-width: 150px;
    padding: 10px 20px;
    border: 2px solid ${(props) => props.theme.color.main};
`;
