import img1 from '../assets/images/img_1.jpg'
import img2 from '../assets/images/img_2.jpg'
import img3 from '../assets/images/img_3.jpg'



let card_data = ["https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200"
]

function BlogPost() {
    return (
        <>

            <section className='blog_section'>

                <div className="container">
                    <h2 className='blog_heading py-5 d-flex justify-content-center'> Blog Posts</h2>


                    <div className="row">

                        {
                            card_data.map((image) => {
                                return (
                                    <>
                                        <div className="col-md-4">
                                            <div className="card rounded-bottom-0 mb-5">
                                                <img src={image} className="card-img-top img-fluid" alt="..." />
                                                <div className="card-body">
                                                    <h4 className="card-title card-title_blog">Why Photography Is Good For Business</h4>
                                                    <p className="text-secondary">April 25, 2019</p>
                                                    <p className="card-text">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reprehenderit adipisci sed perferendis quia iure, aperiam ab?.
                                                    </p>
                                                    <a href="#" className="card_link card_link_blog">
                                                        Read More
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                    </>
                                )
                            }

                            )
                        }
                    </div>
                </div>

            </section>



        </>
    )
}

export default BlogPost;