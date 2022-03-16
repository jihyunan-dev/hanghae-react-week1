import { useParams } from 'react-router-dom';

const DetailPage = () => {
    const { day } = useParams();
    return <>{day}</>;
};

export default DetailPage;
