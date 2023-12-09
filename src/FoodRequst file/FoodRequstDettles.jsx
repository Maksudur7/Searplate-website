
import Swal from "sweetalert2";
import PropTypes from 'prop-types';


const FoodRequstDettles = ({ oneData, datas, setdata }) => {
    console.log(oneData)
    const { _id, location, ExpaireTime, postTime, userName, donationMony, status } = oneData



    const handelCancelReqst = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "This requst delete You",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                fetch(` http://localhost:5000/productRequst/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const filterData = datas.filter(Element => Element._id !== id)
                            setdata(filterData)
                        }
                    })
            }
        });
        console.log(id)

    }
    return (

        <div>
            <div className="grid grid-cols-7 mt-5">
                <h1>{userName}</h1>
                <h1 className="ml-10">{location}</h1>
                <h1>{ExpaireTime}</h1>
                <h1>{postTime}</h1>
                <h1>{donationMony}</h1>
                <h1>{status}</h1>
                <button onClick={() => handelCancelReqst(_id)} className="btn btn-outline btn-secondary">Cancel Request</button>
            </div>
        </div>
    );
};

FoodRequstDettles.propTypes = {
    oneData : PropTypes.object,
    datas : PropTypes.object,
    setdata: PropTypes.object
}

export default FoodRequstDettles;