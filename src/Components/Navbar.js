function Navbar() {


    let navHeading = ['Home','About','Service','Credo','Photography','Blog','Contact']



  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto gap-4 pt-2">

                {
                    navHeading.map((element) => {
                        return(
                            <>
                                <li className="nav-item">
                                    {
                                        (element == 'Credo') ?  <a className="navbar-brand text-white" href="#">{element}</a>:<a className="nav-link text-white" aria-current="page" href="#">{element}</a>
                                    }
                                </li>
                            </>
                        )
                    })
                }

              
                
              
              
            
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
