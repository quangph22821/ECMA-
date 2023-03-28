import { useState,useEffect } from "./lib"

const ProductsPage = () => {
    const [data,setdata]= useState([])
    console.log(data);
    useEffect(()=>{
            fetch("http://localhost:8000/api/products")
            .then((response) => response.json())
            .then((data)=>setdata(data))
    },[])

    
    useEffect(()=>{
        const btnxoa = document.querySelectorAll(".btn-primary")
        for(const btn of btnxoa){
                const  id = btn.dataset.id
                console.log(id);
                btn.addEventListener("click",function(e){
                        e.preventDefault()
                        const tb = window.confirm("ban muon xoa")
                        const newdata= data.filter((project)=>{
                            return project._id != id;
                        })
                        if(tb){
                            setdata (newdata)
                            fetch(`http://localhost:8000/api/products/${id}`,{
                                method:"DELETE"
                            })
                        }
                })
        }
    })

  return /*html*/`
  
     <div class="container">
        <h1 style="margin: 10px 0;text-align: center;"  >LIST PRODUCTS</h1>
        <a href="/products/add"><button class="btn btn-info">ADD PRODUCTS</button></a>
        <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price<th>
                        
                    </tr>
                </thead>
                <tbody>
                ${data.map((project,index)=>{
                    return /*html*/`
                    <tr>
                        <th>${index+1}</th>
                        <th>${project.name}</th>
                        <th>${project.description}</th>
                        <th>${project.price}</th>
                    <th>
                        <button class="btn btn-primary" data-id="${project._id}">DELETE</button>
                        <a href="/products/update/${project._id}"><button class="btn btn-success" >UPDATE</button></a>
                    </th>

                </tr>
                    `
                }).join(' ')
            }
                       
                </tbody>
        </table>

    </div>
  
  `
}

export default ProductsPage