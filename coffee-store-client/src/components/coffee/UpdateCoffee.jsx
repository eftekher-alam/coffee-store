import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateCoffee = () => {
    const data = useLoaderData();
    const { Name, Chef, Taste, Category, Details, Photo, Supplier } = data;
    // console.log(data);

    const handlerUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const Name = form.Name.value;
        const Chef = form.Chef.value;
        const Supplier = form.Supplier.value;
        const Taste = form.Taste.value;
        const Category = form.Category.value;
        const Details = form.Details.value;
        const Photo = form.Photo.value;

        const newCoffee = { Name, Chef, Taste, Category, Details, Photo, Supplier }

        fetch(`http://localhost:5000/updateCoffee/${data._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Data has been updated',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            });
    }

    return (
        <div>
            <div className="card w-3/5 mx-auto bg-[#F4F3F0] shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Update Coffee</h2>
                    <hr />
                    <form onSubmit={handlerUpdateCoffee}>

                        {/* form-row */}
                        <div className="flex gap-8 pb-4">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="Name" defaultValue={Name} placeholder="Americano Coffee" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Chef</span>
                                </label>
                                <input type="text" name="Chef" defaultValue={Chef} placeholder="Mr. Matin Paul" className="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>

                        {/* form-row */}
                        <div className="flex gap-8 pb-4">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Supplier</span>
                                </label>
                                <input type="text" name="Supplier" defaultValue={Supplier} placeholder="Cappu Authorizer" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Taste</span>
                                </label>
                                <input type="text" name="Taste" defaultValue={Taste} placeholder="Sweet and hot" className="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>

                        {/* form-row */}
                        <div className="flex gap-8 pb-4">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" name="Category" defaultValue={Category} placeholder="Americano" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <input type="text" name="Details" defaultValue={Details} placeholder="Espresso with hot water" className="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>

                        {/* form-row */}
                        <div className="flex gap-8 w-full pb-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="Photo" defaultValue={Photo} placeholder="www.photo.com/coffee-photo" className="input input-bordered w-full" />
                            </div>
                        </div>

                        {/* form-row */}
                        <div className="flex gap-8 w-full">
                            <div className="form-control mx-auto">
                                <button type="submit" className="btn btn-outline">Submit</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;