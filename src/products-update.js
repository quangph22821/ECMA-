import { router, useEffect, useState } from "./lib"


const ProductsUpdatePage = ({data:{id}}) => {
    
    const [data, setData] = useState([])
    console.log({data});

    useEffect(() => {
        fetch(`http://localhost:8000/api/products/${id}`)
            .then((response) => response.json())
            .then((data) => setData(data))
            // console.log(data);
    }, [])

    useEffect(() => {
        const form = document.querySelector("#form-update")
        const name = document.querySelector("#name")
        const price = document.querySelector("#price")
        const desc = document.querySelector("#desc")
        
        form.addEventListener("submit", function (e) {
            e.preventDefault()
            const tb = alert("Cập nhật thành công !")
            const newProducts = {
                name: name.value,
                price: price.value,
                description: desc.value
            }
            if (!tb) {
                fetch(`http://localhost:8000/api/products/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newProducts)
                }).then(() => router.navigate("/products"))
            }
        })
    })
    return /*html*/`
        <div class="container">
        <h1>UPDATE PRODUCTS</h1>
        <form action="" id="form-update">
            <div class="form-group mb-3">
                <label for="" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" value="${data.name}" required >
            </div>
            
            <div class="form-group mb-3">
                <label for="" class="form-label">Price</label>
                <input type="number" class="form-control" id="price" value="${data.price}" required min="0">
            </div>

            <div class="form-group mb-3">
                <label for="" class="form-label">Description</label>
                <input type="text" class="form-control" id="desc" value="${data.description}" required >
            </div>

            <div class="form-group">
                <button class="btn btn-primary">Update</button>
            </div>
        </form>
        </div>
  `
}

export default ProductsUpdatePage