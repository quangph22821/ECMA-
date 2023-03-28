import 'bootstrap/dist/css/bootstrap.min.css'
import { router,render } from './lib'
import ProductsPage from './products'
import ProductsAddPage from './products-add'
import ProductsUpdatePage from './products-update'

const app = document.querySelector("#app")

router.on("/products",()=>{
    render(ProductsPage,app)
})

router.on("/products/add",()=>{
    render(ProductsAddPage,app)
})

router.on("/products/update/:id",(prams)=>{
    render(function(){
        return ProductsUpdatePage(prams)
    },app)
})

router.resolve()