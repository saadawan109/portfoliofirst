import { useState, useEffect } from "react";

function TableCreate() {
  const [products, setProducts] = useState([]);
  const [orderBy, setOrderBy] = useState("asc");
  const [limitBy, setLimitBy] = useState(5);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");


  const handleDelete = (productId) => {
    const filterData = products.filter((product) => product.id !== productId);
    setProducts(filterData);
  };

  const createProduct = () => {
    const newProduct = {
      id: products.length + 1,
      image: image,
      title: title,
      price: price,
      description: description,
    };

    const newData = [...products, newProduct];
    setProducts(newData);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?sort=${orderBy}&limit=${limitBy}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [orderBy, limitBy]);

  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <h1 className="mt-5">Data Table</h1>

        <div className="row">
          <div className="col-md-2">
            <input
              onChange={(event) => {
                setImage(event.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="Image"
              value={image}
            />
          </div>
          <div className="col-md-2">
            <input
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="Title"
              value={title}
            />
          </div>
          <div className="col-md-2">
            <input
              onChange={(event) => {
                setPrice(event.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="Price"
              value={price}
            />
          </div>
          <div className="col-md-4">
            <input
              onChange={(event) => {
                setDescription(event.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="IDescription"
              value={description}
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-success" onClick={createProduct}>
              Add Product
            </button>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="mt-3 d-flex justify-content-around">
            <div>
              <button
                className={`btn btn-sm me-3 ${orderBy == "asc" ? "btn-warning" : "btn-outline-warning"
                  }`}
                onClick={() => setOrderBy("ase")}
              >
                ASC
              </button>
              <button
                className={`btn btn-sm ${orderBy == "desc" ? "btn-warning" : "btn-outline-warning"
                  }`}
                onClick={() => setOrderBy("desc")}
              >
                DESC
              </button>
            </div>
            <div>
              <button
                className={`btn btn-sm me-1  ${limitBy == 5 ? "btn-success" : "btn-outline-success"
                  }`}
                onClick={() => setLimitBy(5)}
              >
                5
              </button>
              <button
                className={`btn btn-sm me-1  ${limitBy == 10 ? "btn-success" : "btn-outline-success"
                  }`}
                onClick={() => setLimitBy(10)}
              >
                10
              </button>
              <button
                className={`btn btn-sm me-1  ${limitBy == 15 ? "btn-success" : "btn-outline-success"
                  }`}
                onClick={() => setLimitBy(15)}
              >
                15
              </button>
              <button
                className={`btn btn-sm me-1  ${limitBy == 20 ? "btn-success" : "btn-outline-success"
                  }`}
                onClick={() => setLimitBy(20)}
              >
                20
              </button>
            </div>
          </div>
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
              {products.map((product) => {
                return (
                  <>
                    <tr>
                      <td>
                        <img
                          src={product.image}
                          alt=""
                          className="img-fluid"
                          height={60}
                          width={60}
                        />
                      </td>
                      <td>{product.title}</td>
                      <td>{product.price}</td>
                      <td>{product.description}</td>
                      <td>
                        <button
                          onClick={() => {
                            handleDelete(product.id);
                          }}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TableCreate;
