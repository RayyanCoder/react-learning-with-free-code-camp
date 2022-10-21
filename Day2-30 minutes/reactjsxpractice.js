const page = (
    <nav>
        <h1>Marse technology</h1>
        <ul>
         <li>pricing</li>
         <li>About</li>
          <li>Contact Us</li>
        </ul>
    </nav>
);

const page2 =(<div>
<h1>it is using h1</h1>
<p>This is a paragraph</p>
<h3>This is h3</h3>

</div>);

//  document.getElementById("root2").append(JSON.stringify(page2));
ReactDOM.render(page2,document.getElementById("root2"));
ReactDOM.render(page,document.getElementById("root"));