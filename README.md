<div class="container">
  <div class="container__about">
      <h1> Hanna Tsitsenkova </h1>
      <h2> Junior Front-End Developer </h2>
  </div>
  <div class="container__other">          
      <h3> Minsk, Belarus </h3>
      <div class="container__contacts">   
        <p> +375(29)188-05-73
          <a href="https://web.telegram.org/z/">
            <img src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504941.png?token=exp=1641321592~hmac=5258700ae52ea86b6eb649d87e7b3954" class="img"alt="telegram"/>
          </a>
        </p>              
        <p> hanna.tsitsenkova@gmail.com 
          <a href="https://web.telegram.org/z/">
            <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png"class="img" alt="gmail"/>
          </a>
        </p>
      </div>
    </div>
  </div>

  <div class="container-resume">
    <h3>Development:</h3>
    <ul> 
      <li>- HTML, CSS</li>
      <li>- JavaScript ES6</li>
      <li>- SASS</li>
      <li>- Bootstrap</li>
      <li>- BEM</li>
    </ul>
    <h3>Other:</h3>
    <ul> 
      <li>- Webpack</li>
      <li>- Github</li>
      <li>- Figma</li>
    </ul>
    <h3>Communication:</h3>
    <ul> 
      <li>- Trello</li>
    </ul>
    <h3>Example of code</h3>
    ```javascript
    let function sayHi() {
      return "Hello Word!"
    }
    sayHi();
    ```
    <h3>Му progects:</h3>
    <ul  class="container-resume__progects">
      HTML + CSS
      <li><a href="https://rolling-scopes-school.github.io/hanna25-JS2020Q3/webdev/">webdev</a></li>
      HTML + CSS + JS
      <li><a href="https://rolling-scopes-school.github.io/hanna25-JS2020Q3/shelter/pages/main/main.html">shelter</a>
      </li>
      <li><a href="https://rolling-scopes-school.github.io/hanna25-JS2020Q3/calculator/">calculator</a>
      </li>
      <li><a href="https://rolling-scopes-school.github.io/hanna25-JS2020Q3/gem-puzzle/dist/index.html
          ">gem puzzle</a>
      </li>   
    </ul>
    <h3>Other about me</h3>
      <p> All projects on which I worked are in the private repository of the school where I studied. Above are links to only a small part of the projects. I graduated from The Rolling Scopes School in 2020  <a href="https://app.rs.school/certificate/o9cctjh0">(click to view certificate)</a>
      </p>
  </div>


<style type="text/css">
  .container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
  }
  .container__about {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .container__about h1 {
    margin-bottom: 0px;    
  }
  .container__about h2 {
    font-size: 22px
  }
  .container__other {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .container__contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .container__contacts p{
    margin-bottom: 0px;
    display: flex;
    align-items: start;
  }
  .container__contacts p a{
    margin-left: 5px;
    align-items: center;
    display: flex;
  }
  .img  {
    height: 20px;
    width: 20px;
  }
  ul {
    margin: 0px;
  }
  li {
    list-style-type: none;
    display: flex;
    align-items: center;
    font-size: 15px;
    color: #404040;
  }
  h3 {
    margin-top: 25px;
  }
  .container-resume {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
  }
  .container-resume__progects li {
    margin-bottom: 6px;
  }
  p {
    color: #404040;
  }

</style>