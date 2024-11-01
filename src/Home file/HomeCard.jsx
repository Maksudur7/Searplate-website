import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


// const arr = []
// console.log(arr)
const HomeCard = ({ cards }) => {

    const { _id, countvalue, foodName, photo, location, ExpaireTime, additionalNode, userPhoto, userName, status } = cards
    console.log(cards)

    const handelCardDettles = () => {
        const item = JSON.parse(localStorage.getItem('card'))
        if (!item) {
            localStorage.setItem('card', JSON.stringify(cards))
        }
        else {
            localStorage.setItem('card', JSON.stringify(cards))
        }
    }

   

    return (
        <div className='mt-5'>

            <Card
                className="max-w-sm"
            >
                <img className='h-52' src={photo} alt="" />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {foodName}
                </h5>
                <div className='grid grid-cols-2 justify-between items-center gap-5'>

                    <div>
                        <p><b><i>Location: {location}</i></b></p>
                        <p><b>Expaire Date: {ExpaireTime}</b></p>
                        <h3 className='mt-5'> Quantity: {countvalue}</h3>
                    </div>
                    <div >

                        <img className='h-12 w-12 rounded-full text-end' src={userPhoto} alt="" />
                        <h1>{userName}</h1>
                        <h3 className='mt-5'> status: {status}</h3>


                    </div>
                </div>
                <p>{additionalNode}</p>
                <Link to={`/cardDettals/${_id}`}> <button onClick={handelCardDettles} className='btn w-full bg-gray-300'>View Detail </button></Link>
            </Card>

        </div>
    );
};
HomeCard.propTypes = {
    cards: PropTypes.object
}

export default HomeCard;