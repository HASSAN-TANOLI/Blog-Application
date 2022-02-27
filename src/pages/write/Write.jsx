import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img className="writeImg" src="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989__480.jpg" alt="" />
      <div className="writeFormGroup">
        <label htmlFor="fileInput ">
          <i className=" writeIcon fas fa-plus"></i>
           </label>
        <input type="file" id="fileInput" style={{display: "none"}} />
        <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>


      </div>

      <div className="writeFormGroup">
        <textarea placeholder="Tell your story..." type="text" className="writeInput writeText "></textarea>

      </div>

      <button className="writeSubmit"> Publish </button>
      
    </div>
  )
}
