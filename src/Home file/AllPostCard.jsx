
import HomeCard from "./HomeCard";
import PropTypes from 'prop-types';

const AllPostCard = ({ sarchData }) => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {
                sarchData.map(card => <HomeCard key={card._id} cards={card}></HomeCard>)
            }
        </div>
    );
};
AllPostCard.propTypes = {
    sarchData: PropTypes.object
}

export default AllPostCard;