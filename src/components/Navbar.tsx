function Navbar() {
  return (
      <div className="w-full"> {/* Ensuring dark background container */}
        <nav>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center relative border border-white shadow shadow-white shadow-md rounded-full w-lg lg:w-full py-2">
                
                {/* Desktop Menu */}
                <div>
                  <div className="grid grid-cols-3 lg:flex lg:flex-row gap-2">
                    
                    <a href="/" className="">
                      Home
                    </a>
                    
                    <a 
                      href="Faculties" 
                      className=""
                    >
                      Fakultas
                    </a>
                    
                    {/* Note: Kept the spelling "#Exprerience" to match your portfolio section ID */}
                    <a 
                      href="About" 
                      className=""
                    >
                      About
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
  );
}

export default Navbar