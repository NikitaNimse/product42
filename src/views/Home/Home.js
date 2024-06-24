import "./Home.css";
import blogs from "./../../data";
import Blogcard from "../../components/Productcard/Productcard"
function Home () {
    console.log(blogs)
    return (<>
     {
        blogs.map((blogObject,i)=> {
        const {
            id,
            title,
            content,
            poster,
            price,
           

        } = blogObject
        return (
           <Blogcard
           key={i}
           id={id}
           title={title}
           content={content}
           poster={ poster}
           price={price}
          
           />
        )
        })
     }
    
    </>)
}
export default Home