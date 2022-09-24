import React from 'react'
import Nav from "../components/Nav";
import {Link} from "react-router-dom"


const Nopage = () => {
  return (
    <main className="nopage">
      <Nav />

      <section>
        <h1>Page not found</h1>
        <p>
          The page you're looking for does not exist or can't be found. <br /> Either
          return to our Homepage or drop us an Email if you can't find what you're looking for.
        </p>
        <div>
          <Link className="link" to="/">
            HomePage
          </Link>

          <Link className="link" to="/contact">
            Email
          </Link>

        </div>
      </section>
    </main>
  );
}

export default Nopage