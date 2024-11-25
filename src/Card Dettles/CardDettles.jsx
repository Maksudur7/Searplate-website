import React, { useContext } from "react";
import { AuthContext } from "../Authintication file/AuthProvider";
import Swal from "sweetalert2";



const CardDettles = () => {
    const data = JSON.parse(localStorage.getItem('card'))
    const { _id, countvalue, foodName, photo, location, ExpaireTime, additionalNode, userEmail, userName, postTime, status } = data
    const [showModal, setShowModal] = React.useState(false);
    console.log(_id)
    const RequstDataId = _id
    const { users } = useContext(AuthContext)
    const requstEmail = users.email
    const requstName = users.displayName
    const requstPhoto = users.photoURL
    console.log(users)
    //displayName
    //photoURL

    console.log(requstEmail)
    const handelRequst = e => {
        e.preventDefault()
        console.log(e)
        const additionalNodes = e.target.additionalNode.value
        const donationMony = e.target.donationMony.value
        const requstData = { countvalue, foodName, photo, location, ExpaireTime, additionalNodes, requstEmail, userEmail, userName, donationMony, requstName, requstPhoto, RequstDataId, postTime, status }
        console.log(photo)
        console.log(additionalNodes, donationMony)

        fetch('http:https://searplate-network-surversite.vercel.app/localhost:5000/productRequst', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requstData)
        })
            .then(res => {
                console.log(res)
                setShowModal(false)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Send Your Requst",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-20">


            <img className="object-cover w-full rounded-t-lg h-96 md:h-80 md:w-[700px] md:rounded-none md:rounded-l-lg" src={photo} alt="" />
            <div className="flex justify-between w-full items-start p-10 md:h-80">
                <div className="text-start">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FoodName: <span className="text-xl font-normal">{foodName}</span></h5>
                    <p className="mb-3 font-bold  text-2xl text-gray-700 dark:text-gray-400">Quantity: <span className="text-xl font-normal">{countvalue}</span></p>
                    <p className="mb-3 font-bold  text-2xl text-gray-700 dark:text-gray-400">Expired Time: <span className="text-xl font-normal">{ExpaireTime}</span></p>
                    <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400"><i>Location:  {location}</i></p>
                    <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400"><i>status:  {status}</i></p>
                </div>
                <div className="text-end">
                    <div>
                        <h1 className="font-semibold"><i>Donar information</i></h1>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{userName}</h5>
                    </div>
                    <button onClick={() => setShowModal(true)} className="btn btn-outline btn-secondary md:mt-28 ">Request Food</button>
                </div>
            </div>

            <>
                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                        <h3 className="text-3xl font-semibold flex justify-center items-center w-full">
                                            <img className="w-96 h-52" src={photo} alt="" />
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 ">
                                        <div className="flex gap-10">
                                            <div>
                                                <p className="mb-3 font-bold  text-2xl text-gray-700 dark:text-gray-400">Food id: <span className="text-xl font-normal">{_id}</span></p>
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FoodName: <span className="text-xl font-normal">{foodName}</span></h5>
                                                <p className="mb-3 font-bold  text-2xl text-gray-700 dark:text-gray-400">Quantity: <span className="text-xl font-normal">{countvalue}</span></p>
                                                <p className="mb-3 font-bold  text-2xl text-gray-700 dark:text-gray-400">Post Date: <span className="text-xl font-normal">{postTime}</span></p>
                                            </div>
                                            <div>
                                                <p className="mb-3 font-bold  text-2xl text-gray-700 dark:text-gray-400">Expire Date: <span className="text-xl font-normal">{ExpaireTime}</span></p>
                                                <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400"><i> Pickup Location:  {location}</i></p>
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Donar Name: {userName}</h5>
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Donar email: {userEmail}</h5>
                                            </div>
                                        </div>
                                        <form onSubmit={handelRequst}>
                                            <div className="flex justify-center items-center gap-5 mt-5">
                                                {/* <textarea className="w-1/2" name="additionalNodes" id="" cols="30" placeholder="Additional Notes" rows="1" defaultValue={additionalNode} ></textarea> */}
                                                <textarea className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-1/2 bg-gray-50" placeholder="Additional Notes" defaultValue={additionalNode} name="additionalNode" id="" cols="30" rows="20"></textarea>
                                                <input className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-1/2 bg-gray-50" name="donationMony" type="text" placeholder="Donation Money" />
                                            </div>
                                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                <button
                                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Close
                                                </button>
                                                <input className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="submit" value="Requst Food" />
                                            </div>

                                        </form>
                                    </div>
                                    {/*footer*/}

                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </>
        </div >
    );
};

export default CardDettles;