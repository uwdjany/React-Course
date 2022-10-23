
import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
  const {data:blogs, isPending , error} = useFetch('http://localhost:8000/blogs')

  // const [name , setName] = useState('DJANATI');
  // const [age , setAge] = useState(23);
  //   const handleClick = () =>{
  //     setName("UWASE");
  //     setAge(50)

        
  //   }
    // const handleClickAgain = (name, e) =>{
    //     console.log("hello" + name, e.target);
    // }

    // const [blogs , setBlogs] = useState([
    //   {title:"my new website" ,body:"lorem ipsum....", author:"Djany",id:1},
    //   {title:"welcome party" ,body:"lorem ipsum....", author:"uwase",id:2},
    //   {title:"my new website" ,body:"lorem ipsum....", author:"Djany",id:3},
    // ])
   
  // const [name , setName] = useState("DJNATI")
    // const handleDelete =(id)=>{

    //   const newBlogs = blogs.filter(blog => blog.id !== id);
    //   setBlogs(newBlogs);
        
    // }

  return (
    <div className="home">
    
      {/*<p>{name} is {age} years old</p>
     <button onClick={handleClick}>Click Me</button>
  
  <button onClick={(e) =>handleClickAgain("uwase", e) }>Click Me again</button>*/}
{error && <div>{error}</div>}

  {isPending && <div>Loading....</div>}
 {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
{/*<BlogList blogs={blogs.filter((blog) => blog.author === 'Djany')} title="Djanat's Blogs" />*/}
{/*<button onClick={() => setName("uwase")}>change Name</button>
<p>{name}</p>*/}
    </div>
 
  )
}

export default Home