import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">


            <img src="https://wallpapercave.com/wp/wp8975794.jpg" alt="" className="singlePostImg"/>
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>

            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b>Ashen</b>
                </span>
                <span className="singlePostDate">1 hour ago</span>
            </div>

            <p className="singlePostDesc"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Quam id pariatur aliquid corrupti nostrum incidunt quibusdam 
                perspiciatis omnis totam, ducimus rem provident quasi debitis, 
                voluptates eaque est impedit? Quasi, quia.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Quam id pariatur aliquid corrupti nostrum incidunt quibusdam 
                perspiciatis omnis totam, ducimus rem provident quasi debitis, 
                voluptates eaque est impedit? Quasi, quia.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Quam id pariatur aliquid corrupti nostrum incidunt quibusdam 
                perspiciatis omnis totam, ducimus rem provident quasi debitis, 
                voluptates eaque est impedit? Quasi, quia.
            
            </p>


        </div>
    </div>
  )
}
