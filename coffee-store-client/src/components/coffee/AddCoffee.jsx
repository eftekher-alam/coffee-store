
const AddCoffee = () => {
    const handlerAddCoffee = (e) => {
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

        fetch("http://localhost:5000/addCoffee", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Data inserted successfully.");
                }
            });
    }
    return (
        <div>


            <div className="card w-3/5 mx-auto bg-[#F4F3F0] shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Add Coffee</h2>
                    <hr />
                    <form onSubmit={handlerAddCoffee}>

                        {/* form-row */}
                        <div className="flex gap-8 pb-4">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="Name" placeholder="Americano Coffee" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Chef</span>
                                </label>
                                <input type="text" name="Chef" placeholder="Mr. Matin Paul" className="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>

                        {/* form-row */}
                        <div className="flex gap-8 pb-4">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Supplier</span>
                                </label>
                                <input type="text" name="name" placeholder="Cappu Authorizer" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Taste</span>
                                </label>
                                <input type="text" name="Taste" placeholder="Sweet and hot" className="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>

                        {/* form-row */}
                        <div className="flex gap-8 pb-4">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" name="Category" placeholder="Americano" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <input type="text" name="Details" placeholder="Espresso with hot water" className="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>

                        {/* form-row */}
                        <div className="flex gap-8 w-full pb-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="Photo" placeholder="www.photo.com/coffee-photo" className="input input-bordered w-full" />
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

export default AddCoffee;