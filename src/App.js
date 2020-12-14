import LocomotiveScroll from "locomotive-scroll";

const { default: Artical } = require("./components/Artical");
const { default: User } = require("./components/User");

// const scroll = new LocomotiveScroll({
//    el: document.querySelector("[data-scroll-container]"),
//    smooth: true,
// });

function App() {
   return (
      <div className="App" data-scroll-container>
         <header data-scroll-section>
            <h1>React Skeleton</h1>
         </header>
         <div className="content" data-scroll-section>
            <Artical />
            <User />
         </div>
      </div>
   );
}

export default App;
