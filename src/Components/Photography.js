import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import img1 from "../assets/images/img_1.jpg";
import img2 from "../assets/images/img_2.jpg";
import img3 from "../assets/images/img_3.jpg";
import img4 from "../assets/images/img_4.jpg";
import img5 from "../assets/images/img_5.jpg";
import img6 from "../assets/images/img_6.jpg";
import img7 from "../assets/images/img_7.jpg";
import img8 from "../assets/images/img_8.jpg";
import img9 from "../assets/images/img_9.jpg";
import img10 from "../assets/images/img_10.jpg";

function Photography() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <>
      <div className="container">
        <h2 className="pt-5 pb-5 d-flex justify-content-center">
          My Photography
        </h2>
        <div className="row">
          <div className="col-md-4">
            <LightGallery
              onInit={onInit}
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
            >
              <a href={img1}>
                <img
                  alt="img1"
                  src={img1}
                  className="img-fluid mb-3 rounded-1"
                />
              </a>
              <a href={img2}>
                <img
                  alt="img2"
                  src={img2}
                  className="img-fluid mb-3 rounded-1"
                />
              </a>
              <a href={img3}>
                <img
                  alt="img1"
                  src={img3}
                  className="img-fluid mb-3 rounded-1"
                />
              </a>
              <a href={img4}>
                <img
                  alt="img2"
                  src={img4}
                  className="img-fluid mb-3 rounded-1"
                />
              </a>
            </LightGallery>
          </div>
          <div className="col-md-4">
            <LightGallery
              onInit={onInit}
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
            >
              <a href={img5}>
                <img
                  alt="img1"
                  src={img5}
                  className="img-fluid mb-3 rounded-1"
                />
              </a>
              <a href={img6}>
                <img
                  alt="img2"
                  src={img6}
                  className="img-fluid mb-3 rounded-1"
                />
              </a>
              <a href={img7}>
                <img
                  alt="img1"
                  src={img7}
                  className="img-fluid mb-3 rounded-1"
                />
              </a>
            </LightGallery>
          </div>
          <div className="col-md-4">
            <LightGallery
              onInit={onInit}
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
            >
              <a href={img8}>
                <img
                  alt="img1"
                  src={img8}
                  className="img-fluid mb-3 rounded-1"
                />
              </a>
              <a href={img9}>
                <img
                  alt="img2"
                  src={img9}
                  className="img-fluid mb-3 rounded-1"
                />
              </a>
              <a href={img10}>
                <img
                  alt="img1"
                  src={img10}
                  className="img-fluid mb-3 rounded-1"
                />
              </a>
            </LightGallery>
          </div>
        </div>
      </div>
    </>
  );
}

export default Photography;
