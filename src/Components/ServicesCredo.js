function ServicesCredo() {
  let serviceData = [
    {
      icon: <i class="ri-goblet-line ri-2x"></i>,
      title: "Wedding",  
    },
    {
      icon: <i class="ri-vidicon-line ri-2x"></i>,
      title: "Events",  
    },
    {
      icon: <i class="ri-route-fill ri-2x"></i>,
      title: "Conferences", 
    },
    {
      icon: <i class="ri-arrow-turn-forward-fill ri-2x"></i>,
      title: "Culture",
    },
  ];

  return (
    <>
    <div className="bg-body-tertiary">
      <div className="container">
        <h1 className="d-flex justify-content-center pt-5 pb-5">Services</h1>

        <div className="row">
          {serviceData.map((item) => {
            return (
              <>
                <div className="col-md-6">
                  <div className="card mb-3 p-1 border-0 rounded-0">
                    <div className="row g-0">
                      <div className="col-md-2 d-flex align-items-center justify-content-center pb-5">
                        <span className="cardIcon text-white">{item.icon}</span>
                      </div>
                      <div className="col-md-10">
                        <div className="card-body">
                          <h4 className="card-title">{item.title}</h4>
                          <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Eius aperiam repudiandae quis ipsa quod,<br /> reprehenderit iusto laudantium.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
      
    </>
  );
}

export default ServicesCredo;
