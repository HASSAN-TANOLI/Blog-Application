import "./post.css";

export default function Post() {
  return (
    <div className="post">
     <img className="postImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1vH-muaGfFDcV0i-DdjGLhg5vAJm7EeXD0A&usqp=CAU" alt=""/>
     
    <div className="postInfo">
      <div className="postCats">
        <span className="postCat"> Music </span>
        <span className="postCat"> Music </span>
      </div>
      
      <span className="postTitle"> Lorem, ipsum dolor sit amet  </span>
      <hr/>

      <span className="postDate"> 1 hour ago </span>

    </div>

    <p className="postDesc"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut assumenda, totam, dolorum velit nihil delectus consequatur dolore dolorem ab pariatur enim dolores ullam aperiam recusandae est quae quasi. Eum, laudantium!
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut assumenda, totam, dolorum velit nihil delectus consequatur dolore dolorem ab pariatur enim dolores ullam aperiam recusandae est quae quasi. Eum, laudantium!
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut assumenda, totam, dolorum velit nihil delectus consequatur dolore dolorem ab pariatur enim dolores ullam aperiam recusandae est quae quasi. Eum, laudantium!
    
     </p>

    </div>
  )
}
