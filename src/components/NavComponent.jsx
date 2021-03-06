import favicon from '../images/favicon.png';

const NavComponent= () => {
  
  

    
    return(
        <div className="navColor">

            <h1>
     <a href={'/'} className="aTitulo">Pineapple Supermarket  </a><img scr={favicon} width="100px"/>
     </h1>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href={'/'}>Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href={'/login'}>Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href={'/user'}>User</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href={'/productos'}>Products</a>
        </li>
        </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
        
    )
}
export default NavComponent;