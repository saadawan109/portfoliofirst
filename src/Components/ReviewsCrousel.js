function ReviewsCrousel() {
  return (
    <>
      <section className="reviews pb-5  ">
        <div className="container">
          <h2 className="text-white pt-5  d-flex justify-content-center">
            What Client Are Sayings
          </h2>

          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="carousel-caption d-none d-md-block">
                  <div className="d-flex flex-column align-items-center">
                    <h1 className="fw-bold pt-3 pb-3">,,</h1>
                    <p className="crousel_text w-50 fst-italic">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat repudiandae cupiditate, aspernatur ipsa enim
                      magnam quaerat pariatur vero provident necessitatibus amet
                      saepe officiis labore. Provident deserunt necessitatibus
                      expedita.
                    </p>
                    <h5 className="pt-3 pb-5 fst-italic text-white text-opacity-50">
                      Rayan Peters
                    </h5>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption d-none d-md-block">
                  <div className="d-flex flex-column align-items-center">
                    <h1 className="fw-bold pt-3 pb-3">,,</h1>
                    <p className="crousel_text w-50 fst-italic">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat repudiandae cupiditate, aspernatur ipsa enim
                      magnam quaerat pariatur vero provident necessitatibus amet
                      saepe officiis labore. Provident deserunt necessitatibus
                      expedita.
                    </p>
                    <h5 className="pt-3 pb-5 fst-italic text-white text-opacity-50">
                      Rayan Peters
                    </h5>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption d-none d-md-block">
                  <div className="d-flex flex-column align-items-center">
                    <h1 className="fw-bold pt-3 pb-3">,,</h1>
                    <p className="crousel_text w-50 fst-italic">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat repudiandae cupiditate, aspernatur ipsa enim
                      magnam quaerat pariatur vero provident necessitatibus amet
                      saepe officiis labore. Provident deserunt necessitatibus
                      expedita.
                    </p>
                    <h5 className="pt-3 pb-5 fst-italic text-white text-opacity-50">
                      Rayan Peters
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default ReviewsCrousel;
