
import "./ProductView.css";
import { useParams } from "react-router-dom";
import blogs from "../../data";



function ProductView() {

    const {id} = useParams()
   
    const selectedBlog = blogs.find((blogObject)=> blogObject.id == id)
      
    return(<>
    <div className="blog-card" >
        <h1 className="title-blog">{selectedBlog.title}</h1>
        <img src={selectedBlog.poster} alt="product"  className="poster"/>
        <p className="info1"> {selectedBlog.Icecream}</p> 
        <p className="info1"> {selectedBlog.content} </p>
        <p className="price"> price:   {selectedBlog.price} </p>
        </div>
        </>
    )
}

export default ProductView
