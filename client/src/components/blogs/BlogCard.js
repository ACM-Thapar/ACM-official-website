const BlogImage = ({ blog }) => {
  console.log('blog -', blog);
  let blogDetails = {
    image: blog.ImgURL,
    title: blog.Title,
    author: blog.WrittenBy,
  };

  console.log(blogDetails.image);
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-5 disp-flex">
      <div className="card bcard leftcardb" style={{ width: '20rem' }}>
        <a href="#" className="stretched-link cardmodallinkevent" />
        <img
          src={
            blogDetails.image === ''
              ? 'https://res.cloudinary.com/kriti711/image/upload/v1626162634/ACM%20Website/image_6_e2cfic.svg'
              : blogDetails.image
          }
          className="card-img-top bcardimg"
          alt="Blog Image"
        />
        <div className="card-body">
          <h5 className="card-title bcardtitle">{blogDetails.title}</h5>
          <p className="cardsubtext small">
            <em>
              Written By - {blogDetails.author.map((authorName) => authorName)}
            </em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogImage;
