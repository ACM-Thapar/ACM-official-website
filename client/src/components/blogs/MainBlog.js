const MainBlog = ({ data }) => {
  console.log('data - ', data);
  let RecentBlog = {
    description: data && data.Description,
    author: data && data.WrittenBy,
    title: data && data.Title,

    image: data && data.ImageURL,
  };
  console.log('Recent - ', RecentBlog);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img
            src={
              RecentBlog.image === ''
                ? 'https://res.cloudinary.com/kriti711/image/upload/v1626162634/ACM%20Website/image_6_e2cfic.svg'
                : RecentBlog.image
            }
            alt="main blog image"
            className="mainblogimg"
          />
        </div>
        <div className="col-md-8">
          <h2 className="mbtitle">{RecentBlog.title}</h2>
          <p className="latestsubtext small">
            <em>
              Written By - { RecentBlog.author && RecentBlog.author.map(authorName => authorName) } 
            </em>
          </p>
          <p className="mbtext">{RecentBlog.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MainBlog;
