import { useContext, useEffect, useState } from "react";
import SimpleTable from "./SimpleTable";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Authintication file/AuthProvider";

//{ countvalue, foodName, location, dateTime, additionalNode, userEmail,userName }

const columns = [
    {
        Header: 'ID',
        accessor: '_id'
    },
    {
        Header: 'photo',
        accessor: row => <img className="w-12" src={row.photo} alt="" />

        // accessor: 'additionalNode'
    },
    {
        Header: 'Food Name',
        // selector: row => row.foodName
        accessor: row => row.foodName
    },
    {
        Header: 'Quantity',
        // selector: row => row.countvalue
        accessor: row => row.countvalue
    },
    {
        Header: 'Post Date',
        accessor: row => row.postTime
    },
    {
        Header: 'Expired Date',
        accessor: row => row.ExpaireTime
        // accessor: 'dateTime'
    },
    {
        Header: 'Location',
        accessor: row => row.location
        // accessor: 'dateTime'
    },
  
    

];
const TableApp = () => {
    const { users } = useContext(AuthContext)
    console.log(users.email)
    const datas = useLoaderData()
    const [myCards, setMyCards] = useState([])
    console.log(myCards)
    useEffect(() => {
        const matchEmail = datas.filter(Element => Element.userEmail === users.email)
        setMyCards(matchEmail)
    }, [datas, users.email])
    return (
        <div className="w-full mt-10 mx-auto">
            <SimpleTable columns={columns} data={myCards} setMyCards={setMyCards} />
        </div>
    );
};

export default TableApp;