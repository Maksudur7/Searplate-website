import { useEffect, useState } from "react";
import AllPostCard from "../Home file/AllPostCard";
// import useAxiosSecure from "../Praivet Route File/AxiosSecure File/useAxiosSecure";

const AviableFoods = () => {


    const [datas, setdatas] = useState([])
    const [sarchData, setSarchData] = useState([])
    useEffect(() => {

        fetch('https://searplate-network-surversite.vercel.app/addFood')
        // useAxiosSecure.get('/addFood')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const dataMap = data.filter(Element => Element.foodName.toLowerCase().includes(datas))
                setSarchData(dataMap)
            })
        // console.log(arr)
    }, [datas])

    const handelSearch = e => {
        e.preventDefault()
        console.log('data is', e.target.sarch.value)
        const searchValue = e.target.sarch.value
        setdatas(searchValue.toLowerCase())
    }
    return (
        <div className="mt-10 mx-10">

            <form onSubmit={handelSearch}>
                <div className="flex mb-5">
                    {/* <h1>{arr.length}</h1> */}
                    <div className="relative w-full">
                        <input type="search" name="sarch" id="" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." />

                        <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium h-10 text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Submit
                        </button>
                    </div>
                </div>
            </form>

            <AllPostCard sarchData={sarchData} setSarchData={setSarchData} ></AllPostCard>
        </div>
    );
};

export default AviableFoods;