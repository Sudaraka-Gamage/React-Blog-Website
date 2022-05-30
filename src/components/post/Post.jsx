import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" 
            src="https://media.cntraveler.com/photos/5cb63a0bc131b962ade953ad/master/w_4000,h_2670,c_limit/Banff-Canada_GettyImages-680900749.jpg" 
            alt="" 
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Save Mother Earth...</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
        </p>
    </div>
  )
}
