
import { Link } from "react-router-dom";
import Slider from "./Slider";
import { useEffect, useState } from "react";
import HomeCard from "./HomeCard";
import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2";



const Home = () => {
    const [datas, setdatas] = useState([])
    const [sorting, setSorting] = useState(true)
    // const datas = data.map(element => console.log(element))
    console.log(sorting)

    useEffect(() => {
        fetch(`http://localhost:5000/addFood?sort=${sorting ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => {
                setdatas(data)
                // data.forEach(Element => arr.push(Element.Second))
            })
    }, [sorting])




    return (
        <div className="md:mx-10">
            <Slider></Slider>
            {/* <button className="btn btn-neutral text-white w-full" onClick={() => setSorting(!sorting)}>
                {sorting ? ' Short last foods' : 'Short fast foods'}
            </button> */}

            <section className="mt-10 w-full">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
                    {
                        datas.slice(0, 6).map(card => <HomeCard key={card._id}

                            cards={card}></HomeCard>)
                    }

                </div>
                <div className="flex justify-center items-center">
                    <Link to={`/aviableFoods`}><button className="btn btn-outline btn-secondary  mt-10">Show All Foods</button></Link>
                </div>
            </section>
            <section>
                <HomeSection1></HomeSection1>
            </section>
            <section className="mt-10">
                <HomeSection2></HomeSection2>
            </section>
        </div>

    );
};

export default Home;