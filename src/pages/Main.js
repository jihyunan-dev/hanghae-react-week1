import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();
    const days = [
        { title: '일', grade: 1, day: 'sunday' },
        { title: '월', grade: 3, day: 'monday' },
        { title: '화', grade: 2, day: 'tuesday' },
        { title: '수', grade: 5, day: 'wednesday' },
        { title: '목', grade: 4, day: 'thursday' },
        { title: '금', grade: 4, day: 'friday' },
        { title: '토', grade: 1, day: 'saturday' },
    ];

    const getGradeView = (grade) => {
        const temp = new Array(5).fill(0);
        return (
            <GradeBox>
                {temp.map((ele, i) => (
                    <Grade key={i} active={i + 1 <= grade}></Grade>
                ))}
            </GradeBox>
        );
    };

    return (
        <Container>
            <Title>내 일주일은?</Title>
            {days.map((day, i) => (
                <DayWrapper key={`${day.title}-${i}`}>
                    <DayTitle>{day.title}</DayTitle>
                    {getGradeView(day.grade)}
                    <DetailLinkBtn onClick={() => navigate(`/detail/${day.day}`)} />
                </DayWrapper>
            ))}
        </Container>
    );
};

export default MainPage;

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 20px;
`;

const Title = styled.h1`
    margin-bottom: 12px;
    font-size: 28px;
    font-weight: bold;
`;

const DayWrapper = styled.article`
    display: flex;
    align-items: center;
    padding: 5px 0;
`;

const DayTitle = styled.h3`
    padding: 10px;
    margin-top: 3px;
    margin-right: 12px;
    font-size: 20px;
`;

const GradeBox = styled.section`
    display: flex;
`;

const Grade = styled.div`
    width: 30px;
    height: 30px;
    margin-right: 5px;
    border-radius: 50%;
    background-color: ${(props) => (props.active ? props.theme.color.main : props.theme.color.gray)};
`;

const DetailLinkBtn = styled.button`
    width: 25px;
    height: 25px;
    margin-left: 12px;
    background-color: ${(props) => props.theme.color.dark};
    clip-path: polygon(70% 50%, 0 0, 0 100%);
`;
