
import "./ProductCard.css";
import {Link} from 'react-router-dom';



function BlogCard({id,title, content,poster,price}) {
  return (
    
   
   
   <Link className="card-container" to={`/product/${id}`}>
        <img src={poster} alt="author" className="author-avtar"/>
        <h1 className="title">{title}</h1> 
        <h5 className="contentpre">{content.substring(0,80)}... </h5>
        <div className="author-card">
        <span className="price">price: {price}</span>
      </div>
         
    </Link>
   
  )
}

export default BlogCard