import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src="https://media.istockphoto.com/photos/colorful-panoramic-mountain-view-at-sunrise-picture-id1129473522?b=1&k=20&m=1129473522&s=170667a&w=0&h=BUuwJYJXKx1nBZtKhddIFe0dfwJzeMyq7IcvSkewyOE=" alt= "" />

        <h1 className="singlePostTitle" > Lorem ipsum, dolor sit amet!
        <div className="singlePostEdit"> 
        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
        <i className="singlePostIcon fa-solid fa-trash"></i>
        </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor"> Author: <b> Hassan </b> </span>
          <span className="singlePostDate"> 1 Hour ago </span> </div>

          <p className="singlePostDesc"> 
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur alias adipisci eaque nisi tenetur. Reprehenderit eligendi sit quisquam quas hic ipsum doloribus velit placeat quis dignissimos, voluptas alias possimus autem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, quis aperiam. Harum aut officia cupiditate corrupti libero, nesciunt blanditiis accusamus cum animi quasi fuga, debitis autem nam labore reprehenderit fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse vitae aspernatur error consequuntur aliquid aperiam dolorum quasi quis enim sint quas, nam temporibus autem ex possimus alias quaerat molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolorum deleniti! Quaerat dolores corrupti omnis ea cum magnam distinctio perferendis quod eaque fugit incidunt animi aliquid, amet sequi? Quo, quibusdam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ullam nesciunt odit ad consequatur repellendus asperiores molestias earum laboriosam quasi recusandae beatae, corporis eius et voluptate accusamus molestiae itaque laborum.
          </p>

        </div>

      </div>
      
    
  )
}
