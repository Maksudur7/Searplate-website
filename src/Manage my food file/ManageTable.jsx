
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ManageTable = () => {
    const foods = useLoaderData()
    const { _id, additionalNode, countvalue, foodName, location, photo, ExpaireTime, status } = foods
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
        const countvalue = e.target.countvalue.value
        const foodName = e.target.foodName.value
        const photo = e.target.photo.value
        const location = e.target.location.value
        const ExpaireTime = e.target.dateTime.value
        const additionalNode = e.target.additionalNode.value
        const status = e.target.status.value
        const addFoods = { countvalue, foodName, photo, location, ExpaireTime, additionalNode, status }
        console.log(countvalue, foodName, photo, location, additionalNode)
        fetch(`https://searplate-network-surversite.vercel.app/addFood/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addFoods)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Update Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
        fetch(` https://searplate-network-surversite.vercel.app/productRequst/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addFoods)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
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
                                    <p className="font-medium text-lg">Update your Foods</p>
                                    <p>Please fill out all the fields.</p>
                                </div>

                                <div className="lg:col-span-2">
                                    <form onSubmit={handeladd}>
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div className="md:col-span-5">
                                                <label htmlFor="full_name">Food Name</label>
                                                <input type="text" name="foodName" defaultValue={foodName} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                            </div>

                                            <div className="md:col-span-5">
                                                <label htmlFor="email">Food image Link</label>
                                                <input type="text" name="photo" defaultValue={photo} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                            </div>

                                            <div className="md:col-span-3">
                                                <label htmlFor="address">Pickup Location</label>
                                                <input type="text" name="location" defaultValue={location} id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                            </div>

                                            <div className="md:col-span-2">
                                                <label htmlFor="city">Expired Date/Time</label>
                                                <input type="datetime-local" name="dateTime" defaultValue={ExpaireTime} id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                            </div>



                                            <div className="md:col-span-5">
                                                <label htmlFor="zipcode">Additional Notes</label>
                                                <textarea className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" name="additionalNode" defaultValue={additionalNode} id="" cols="30" rows="20"></textarea>
                                            </div>

                                            <div className="md:col-span-5">
                                                <div className="inline-flex items-center">
                                                    <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
                                                    <label htmlFor="billing_same" className="ml-2">My billing address is different than above.</label>
                                                </div>
                                            </div>

                                            <div className="md:col-span-2 flex w-full ">
                                                <div>
                                                    <label htmlFor="soda">How many Food ?</label>
                                                    <div className="h-10 w-28 bg-gray-50 flex border-gray-200 rounded justify-center items-center mt-1 ml-10">
                                                        <input type="text" className="btn btn-outline btn-secondary w-14 mt-1 " onClick={handelDecrement} value='-' ></input>
                                                        <input type="text" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50 btn " name="countvalue" defaultValue={countvalue} value={count} />
                                                        <input type="text" className="btn btn-outline btn-secondary w-14 mt-1 " onClick={handelIncreate} value='+' ></input>
                                                    </div>
                                                </div>
                                                <div className="md:col-span-2 ml-20 w-full">
                                                    <label htmlFor="city">status</label>
                                                    <input type="text" name="status" defaultValue={status} id="city" className="h-10 border mt-1 rounded px-4 w-40 bg-gray-50" placeholder="" />
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
                </div>
            </div>
        </div>
    );
};

export default ManageTable;