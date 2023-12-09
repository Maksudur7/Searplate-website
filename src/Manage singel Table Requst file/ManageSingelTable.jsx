// import { useContext, useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../Authintication file/AuthProvider";


const ManageSingelTable = () => {
    const datas = useLoaderData()
    console.log(datas.photo)
    const [matchData, setMatchData] = useState([])
    console.log(datas)
    console.log(matchData)
    // useEffect(()=>{
    //     const RequstUser = matchData.filter(element => console.log(element))
    //     console.log(RequstUser)
    // },[])
    useEffect(() => {
        fetch(' http://localhost:5000/productRequst')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const matchReq = data.filter(Element => Element.userEmail === datas.userEmail)
                const requstUser = matchReq.filter(element => element.RequstDataId === datas._id)
                console.log(requstUser)
                setMatchData(requstUser)
            })
    }, [])
    return (
        <div className="flex w-full gap-10">
            <div className="w-1/2">
                <img src={datas.photo} alt="" />

            </div>
            <div>
                <h1 className="text-2xl font-bold mb-5">Requester information </h1>
                <div className="grid grid-cols-2 gap-10 ">

                    {
                        matchData.map(element => <>
                            <div className=" flex gap-5 border h-24 justify-center items-center p-3 ">
                                <div>
                                    <img className="h-12 w-12 rounded-full" src={element.requstPhoto} alt="" />
                                </div>
                                <div>
                                    <h1 key={element._id}>{element.requstName}</h1>
                                    <h1>{element.requstEmail}</h1>
                                    <h1>{element.status}</h1>
                                </div>                       {/* <h1>{element.requstPhoto}</h1> */}
                            </div>


                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageSingelTable;