
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTable } from 'react-table';
import Swal from 'sweetalert2';

const SimpleTable = ({ columns, data, setMyCards }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    const handelManageFoodDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
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
                fetch(` https://searplate-network-surversite.vercel.app/addFood/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(dataR => {
                        console.log(dataR)
                        if (dataR.deletedCount) {

                            const filterUiData = data.filter(Element => Element._id !== id)
                            setMyCards(filterUiData)
                        }
                    })
            }
        });
        console.log(id)

    }


    return (
        <>
            <table className='mx-10' {...getTableProps()}>
                <thead>
                    {headerGroups.map(hg => (

                        <tr className=' grid grid-cols-7' key={hg.id} {...hg.getHeaderGroupProps()}>
                            {hg.headers.slice(1).map(col => (
                                <>
                                    <th className='flex justify-center items-center p-2 h-12 border' key={col.id} {...col.getHeaderProps()}>
                                        {col.render('Header')}
                                    </th>

                                </>

                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(rows => {
                        // console.log(rows.original._id)
                        const id = rows.original._id
                        console.log(rows)
                        prepareRow(rows);
                        return (
                            <>
                                <tr className='bg-green-500 grid grid-cols-7' key={rows.id} {...rows.getRowProps()}>
                                    {rows.cells.slice(1).map(cell => {
                                        return <>
                                            <td className='flex justify-center items-center p-2  h-28 border flex-wrap ' key={cell.id} {...cell.getCellProps()}>{cell.render('Cell')}
                                            </td>


                                        </>
                                        // console.log(cell)
                                    })}

                                    <div className='flex pl-3 items-center bg-red-500  w-80 gap-5 border '>
                                        <Link to={`/manageTable/${id}`}><button className='btn'>Update</button></Link>
                                        <button onClick={() => handelManageFoodDelete(id)} className='btn'>Delete</button>
                                        <Link to={`/manageSingelFood/${id}`}><button className='btn'>Manage</button></Link>
                                    </div>
                                </tr>

                                <br />
                            </>

                        );
                    })}
                </tbody>
            </table>

        </>

    );
};

SimpleTable.propTypes = {
    columns: PropTypes.object,
    data: PropTypes.object,
    setMyCards: PropTypes.object
}

export default SimpleTable;
