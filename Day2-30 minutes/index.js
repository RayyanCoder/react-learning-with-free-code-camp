// ReactDOM.render(<h1>assalam allykum</h1>,document.getElementById("root"));
// ReactDOM.render(<h2>my name is rayyan shaikh</h2>,document.getElementById("root"));
// ReactDOM.render(<ul><li>rayyan</li><li>faizan</li></ul>,document.getElementById("root2"));

function Navabar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    );
}

function MainContain(){
    return(<h1>I am Learning React js i think this is best course to learn react</h1>)
}

// ReactDOM.render(<Navabar/>,document.getElementById("root3"));
// ReactDOM.render(<MainContain/>,document.getElementById("root4"));

//challenge number 3

// const h1 = document.createElement("h1");
// h1.innerHTML="rayyan shaikh";
// console.log(h1.textContent);
// h1.classList.add("header");
// document.getElementById("root4").appendChild(h1);

// const element = <h1>This is jsx</h1>
// console.log(element);
// ReactDOM.render(element,document.getElementById("root4"));

const page = (<div>
  <Navabar/>
  <h1>This is Marse technology</h1>
  <ul>
    <li>Pricing</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
  <p>this is my first paragraph in react js</p>
</div>);

ReactDOM.render(page,document.getElementById("root"));

