import { Link, NavLink } from "react-router-dom";
import { Navbar } from 'flowbite-react';
import { useContext } from "react";
import { AuthContext } from "../Authintication file/AuthProvider";




const Navbars = () => {
    const { users, logOut } = useContext(AuthContext)
    console.log(users)
    return (


        <>
            <Navbar fluid rounded>
                <Navbar.Brand as={Link} href="https://flowbite-react.com">
                    <img src="data:image/jpeg;base64,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" className="mr-3 h-6 sm:h-9" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">SharePlateNetwork.com</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <NavLink to={`/`}>
                        <Navbar.Link>
                            Home
                        </Navbar.Link>
                    </NavLink>
                    <NavLink to={`/aviableFoods`}>
                        <Navbar.Link>
                            Available Foods
                        </Navbar.Link>
                    </NavLink>
                    <NavLink to={`/addfoods`}>
                        <Navbar.Link>Add Food</Navbar.Link>
                    </NavLink>
                    <NavLink to={`/managemyfoods`}>
                        <Navbar.Link>Manage My Foods</Navbar.Link>
                    </NavLink>

                    <NavLink to={`/foodRequest`}>
                        <Navbar.Link>Food Request</Navbar.Link>
                    </NavLink>

                    {
                        users ? <>
                            <div >
                                <div className="flex justify-center items-center gap-5">
                                    <button onClick={logOut}>Log Out</button>
                                    <img className="h-12 w-12 rounded-full " src={users.photoURL} alt="" />
                                </div>
                                <p>{users.displayName}</p>

                            </div>
                        </> : <NavLink to={`/login`}><Navbar.Link>login</Navbar.Link></NavLink>

                    }

                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Navbars;