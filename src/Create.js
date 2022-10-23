import React,{useState} from 'react'

const Create = () => {

    const [title , setTitle] = useState('');
    const [body , setBody] = useState('')
    const [author , setAuthor] = useState('uwase')
    const[isPending , setIsPending] = useState(false)
const handleSubmit =(e) =>{
e.preventDefault();
const blog ={title , body , author}
// console.log(blog);
setIsPending(true)
fetch('http://localhost:8000/blogs' ,{
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(blog)
}).then(() =>{
    console.log('new blog added')
    setIsPending(false);
})
}
  return (
<div className="create">
<h1>Add a New Blog</h1>
<form onSubmit={handleSubmit}>
<label>Blog title:</label>
<input type="text"
required
value={title} 
onChange={(e) => setTitle(e.target.value)}/>
<label>Blog body:</label>
<textarea
required
value={body}
onChange={(e) => setBody(e.target.value)}
></textarea>
<label>Blog author</label>
<select
value={author}
onChange={(e) => setAuthor(e.target.value)}>
<option value="uwase">uwase</option>
<option value="djanati">Djanati</option>
</select>
{!isPending && <button>Add Blog</button>}
{isPending && <button>Add Blog...</button>}
<p>{title}</p>
<p>{body}</p>
<p>{author}</p>
</form>
</div>
  )
}

export default Create