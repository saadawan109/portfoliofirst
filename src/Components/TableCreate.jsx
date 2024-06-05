import { useState, useEffect } from "react";


const data = [
    {
      "id": 1,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      "id": 2,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
      "id": 3,
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
  ]




function TableCreate(){
    const[products,setProducts]=useState([])
    const[image,setImage]=useState("");
    const[title,setTitle]=useState("");
    const[price,setPrice]=useState("");
    const[description,setDescription]=useState("");



    const handleDelete = (productId)=>{
        const filterData = products.filter((product)=>product.id !== productId);
        setProducts(filterData)
    }

    const createProduct = ()=>{
        const newProduct = {
            id : products.length +1,
            image : image,
            title : title,
            price : price,
            description : description
        }

        const newData = [...products,newProduct];
        setProducts(newData)
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5').then((res) => {
          return res.json();
        }).then((data) => {
          setProducts(data)
        })
      }, []);

    return(
        <>
            <div className="container d-flex flex-column align-items-center">
                <h1 className="mt-5">Data Table</h1>

                <div className="row">

                    <div className="col-md-2">
                        <input onChange={(event)=> {setImage (event.target.value)}} type="text" className="form-control" placeholder="Image" value={image} />
                    </div>
                    <div className="col-md-2">
                        <input onChange={(event)=>{setTitle(event.target.value)}} type="text" className="form-control" placeholder="Title" value={title} />
                    </div>
                    <div className="col-md-2">
                        <input onChange={(event)=>{setPrice(event.target.value)}} type="text" className="form-control" placeholder="Price" value={price} />
                    </div>
                    <div className="col-md-4">
                        <input onChange={(event)=>{setDescription(event.target.value)}} type="text" className="form-control" placeholder="IDescription" value={description} />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-success" onClick={createProduct}>Add Product</button>
                    </div>
                </div>

                <div className="row">
                    <table className="table table-warning table-striped mt-3 ">
                        <thead>

                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            products.map((products) => {
                                return(
                                    <>
                                        <tr>
                                            <td><img src={products.image} alt="" className="img-fluid" height={60} width={60} /></td>
                                            <td>{products.title}</td>
                                            <td>{products.price}</td>
                                            <td>{products.description}</td>
                                            <td><button onClick={()=>{handleDelete(products.id)}} className="btn btn-danger">Delete</button></td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                        
                    </tbody>
                    </table>
                    
                </div>
            </div>

        </>
    )
}

export default TableCreate;