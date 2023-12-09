
import { useContext, useState } from "react";
import { AuthContext } from "../Authintication file/AuthProvider";
import moment from 'moment-timezone';
import Swal from "sweetalert2";


const AddFoods = () => {
    const { users } = useContext(AuthContext)
    const userPhoto = users.photoURL
    const userName = users.displayName
    const userEmail = users.email
    const [count, setcount] = useState(1)
    console.log(count)
    const handelIncreate = () => {
        if (count > 0) {
            setcount(count + 1)
        }
    }
    const handelDecrement = () => {
        if (count > 1) {
            setcount(count - 1)
        }

    }

    const handeladd = e => {
        e.preventDefault()
        const status = 'available'
        const postTime = moment().format(' h:mm:ss ')
        // console.log(arr[0])
        console.log(postTime.split(':'))
        const time = postTime.split(':')
        console.log(time[0])
        const hour = time[0] * 60 * 60
        const min = time[1] * 60
        const sec = time[2]
        const Second = hour + min + sec
        // console.log(hour, min, sec)
        // console.log(total)
        // arr.push(total)
        const countvalue = e.target.countvalue.value
        const foodName = e.target.foodName.value
        const photo = e.target.photo.value
        const location = e.target.location.value
        const ExpaireTime = e.target.dateTime.value
        const additionalNode = e.target.additionalNode.value
        const addFoods = { countvalue, foodName, photo, location, ExpaireTime, additionalNode, userPhoto, userEmail, userName, postTime, status,Second }
        console.log(countvalue, foodName, photo, location, ExpaireTime, additionalNode, userPhoto, userName, userEmail)
        fetch(' http://localhost:5000/addFood', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addFoods)
        })
        
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "New Food Added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div>


                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="text-gray-600">
                                    <p className="font-medium text-lg">Add Some New Foods</p>
                                    <p>Please fill out all the fields.</p>
                                </div>

                                <div className="lg:col-span-2">
                                    <form onSubmit={handeladd}>
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div className="md:col-span-5">
                                                <label htmlFor="full_name">Food Name</label>
                                                <input type="text" name="foodName" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                            </div>

                                            <div className="md:col-span-5">
                                                <label htmlFor="email">Food image Link</label>
                                                <input type="text" name="photo" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                            </div>

                                            <div className="md:col-span-3">
                                                <label htmlFor="address">Pickup Location</label>
                                                <input type="text" name="location" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                            </div>

                                            <div className="md:col-span-2">
                                                <label htmlFor="city">Expired Date/Time</label>
                                                <input type="datetime-local" name="dateTime" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                            </div>



                                            <div className="md:col-span-5">
                                                <label htmlFor="zipcode">Additional Notes</label>
                                                <textarea className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" name="additionalNode" id="" cols="30" rows="20"></textarea>
                                            </div>

                                            <div className="md:col-span-5">
                                                <div className="inline-flex items-center">
                                                    <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
                                                    <label htmlFor="billing_same" className="ml-2">My billing address is different than above.</label>
                                                </div>
                                            </div>

                                            <div className="md:col-span-2">
                                                <label htmlFor="soda">How many Food ?</label>
                                                <div className="h-10 w-28 bg-gray-50 flex border-gray-200 rounded justify-center items-center mt-1 ml-10">
                                                    {/* <button onClick={handelDecrement} className="btn btn-outline btn-secondary w-14 mt-1 ">-</button> */}
                                                    <input type="text" className="btn btn-outline btn-secondary w-14 mt-1 " onClick={handelDecrement} value='-' ></input>
                                                    <input type="text" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50 btn " name="countvalue" value={count} />
                                                    <input type="text" className="btn btn-outline btn-secondary w-14 mt-1 " onClick={handelIncreate} value='+' ></input>
                                                </div>
                                            </div>

                                            <div className="md:col-span-5 text-right">
                                                <div className="inline-flex items-end">
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Foods</button>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <a href="https://www.buymeacoffee.com/dgauderman" target="_blank" className="md:absolute bottom-0 right-0 p-4 float-right">
                        <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy Me A Coffee" className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white">
                    </a> */}
                </div>
            </div>
        </div>
    );
};

export default AddFoods;