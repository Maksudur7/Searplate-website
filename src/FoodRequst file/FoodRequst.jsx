import { useContext, useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Authintication file/AuthProvider";
import FoodRequstDettles from "./FoodRequstDettles";


const FoodRequst = () => {
    // const foods = useLoaderData()
    const { users } = useContext(AuthContext)
    // console.log(foods.userEmail,users.email)
    const [data, setdata] = useState([])
    console.log(data)
    useEffect(() => {
        
        fetch(`https://searplate-network-surversite.vercel.app/productRequst?email=${users?.email}`, { credentials: 'include' })
            .then(res => res.json())
            .then(foods => {
                console.log(foods)
                const matchEmail = foods.filter(Element => Element.requstEmail === users.email)
                setdata(matchEmail)
            })

    }, [users.email])
    return (
        <div className="mt-10 mx-10">
            <div className="grid grid-cols-7">
                <h1><b>Donar Name</b></h1>
                <h1 className="ml-10"><b>Pickup Location</b></h1>
                <h1><b>Expire Date</b></h1>
                <h1><b>Request Date</b></h1>
                <h1><b>Donation Amount</b></h1>
                <h1><b>Status</b></h1>

            </div>
            {
                data.map(datas => <FoodRequstDettles key={datas._id}
                    datas={data}
                    setdata={setdata}
                    oneData={datas}></FoodRequstDettles>)
            }
        </div>
    );
};

export default FoodRequst;