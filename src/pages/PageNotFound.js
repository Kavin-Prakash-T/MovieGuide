import { Link } from "react-router-dom"
import Pagenotfound from "../assets/pagenotfound.png"
import { useTitle } from "../hooks";

export const PageNotFound = () => {

  useTitle("Page Not Found")

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col  items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404 , Oops ! </p>
          <div className="max-w-lg">
            <img src={Pagenotfound} alt="404 Page Not Found" className="rounded" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Back to MovieGuide</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
