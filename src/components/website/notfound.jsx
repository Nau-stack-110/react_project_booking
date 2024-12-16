import { Link } from "react-router-dom";
import io from "../../assets/404.jpg";
const Notfound = () => {
    return (
      <div>
        <section className="flex items-center h-screen bg-gray-50 dark:bg-gray-700">
          <div className="container flex flex-col items-center ">
            <div className="flex flex-col max-w-md text-center">
              <h1 className="font-semibold text-gray-700 text-[26px] gap-0">Error : 404 Not Found</h1>
              <p className="text-base font-medium text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, commodi quidem! Dolorum.</p>
              <img src={io} alt="" className="h-72 " />
              <Link
                to="/"
                className="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200"
              >
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Notfound;
  