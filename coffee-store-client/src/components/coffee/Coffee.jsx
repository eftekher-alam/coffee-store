import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const Coffee = () => {
    const [data, setData] = useState(useLoaderData());
    const handlerDeleteCoffee = (_id) => {
        // console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/deleteCoffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.deletedCount) {
                            const newData = data.filter(data => data._id != _id);
                            setData(newData);
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    });
            }
        })
    }
    return (
        <div>
            List of Coffee
            <div className="grid grid-cols-3 gap-8">
                {
                    data.map((data, index) =>
                        <div key={index} className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={data.Photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.Name}</h2>
                                <p>{data.Chef}</p>
                                <p>{data.Taste}</p>
                                <p>{data.Category}</p>
                                <p>{data.Details}</p>
                                <div className="card-actions justify-center">
                                    <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
                                        <Link to={`/updateCoffee/${data._id}`} className="btn">Update</Link>
                                        <button onClick={() => handlerDeleteCoffee(data._id)} className="btn">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div >
    );
};

export default Coffee;