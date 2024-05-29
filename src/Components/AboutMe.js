import aboutMeImg from "../assets/images/credo_img_1.jpg";

function AboutMe() {
  return (
    <>
      <div className="container">
        <h2 className="pt-5">About Me</h2>
        <div className="row pt-3">
          <div className="col-md-5">
            <img className="img-fluid" src={aboutMeImg} />
          </div>
          <div className="col-md-7">
            <div className="ms-3">
              <div className="mb-4">
                <strong>Photographer</strong>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Warning example"
                  aria-valuenow={89}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-warning text-dark"
                    style={{ width: "89%" }}
                  >
                    75%
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <strong>Wedding</strong>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Warning example"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-warning text-dark"
                    style={{ width: "75%" }}
                  >
                    75%
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <strong>Events</strong>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Warning example"
                  aria-valuenow={94}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-warning text-dark"
                    style={{ width: "94%" }}
                  >
                    75%
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <strong>Conferences</strong>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Warning example"
                  aria-valuenow={94}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-warning text-dark"
                    style={{ width: "94%" }}
                  >
                    75%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-2">
          <div className="col-md-5">
            <p className="pt-3 text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              repudiandae cupiditate, aspernatur ipsa enim magnam quaerat
              pariatur vero provident necessitatibus amet saepe officiis labore.
              Provident deserunt necessitatibus expedita. Voluptate, soluta?
            </p>
            <p className="text-secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo praesentium quibusdam minus voluptatem sequi iure amet?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
