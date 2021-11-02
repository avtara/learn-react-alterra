import './App.css';
import Navbar from './Navbar';
// import Background from '../../assets/img/bg-img.png';


function App() {
  
  const divStyle = {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL
      + "/assets/img/bg-img.png"})`,
    backgroundSize: 'cover'
};
return (
  <>
    <div className="cComponent" style={divStyle} >
      <Navbar />
      <div className="w-full text-gray-700 bg-transparent">
        <div
          className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="grid grid-cols-2">
            <div className="place-items-center mt-40"><img alt="avatar" className="w-3/4 rounded-full border-2"
              src="assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg" />
            </div>
            <div className="place-items-center mt-auto mb-auto">
              <h3 className="text-2xl text-black">Hi, My name is</h3>
              <h3 className="text-5xl text-black"><strong>Anne Sullivian</strong></h3>
              <h3 className="text-3xl text-black">I build things for the web</h3>
              <button
                className="p-0 w-32 h-10 mt-8 bg-yellow-600 rounded-full hover:bg-yellow-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                <a href="contact.html">
                  <p className="text-white">Get in touch</p>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
}

export default App;
