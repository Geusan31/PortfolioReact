import React, {useState} from "react";
import { navLink } from "../constants";
import { Link } from "react-router-dom";
import { logo, menu, close } from '../assets';
import { useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if(scrollTop > 50) {
        setScrolled(true)
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={scrolled ? 'active' : ''}>
      <div className="logo">
        <Link to="/" onClick={() => setActive("")}>
          <img src={logo} alt="Logo" />
          <h3>Geusan | Web Developer</h3>
        </Link>
      </div>
      <ul className="list-menu">
        {
          navLink.map((nav) => {
            return (
              <li key={nav.id} className={active === nav.title ? 'active' : ''} onClick={() => setActive(nav.title)}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            )
          })
        }
      </ul>

      <div className="nav-phone">
        <img src={toggle ? close : menu} alt="" onClick={() => setToggle(!toggle)}/>

        <div className={`menu ${toggle ? 'active' : ''}`}>
          <ul>
            {
              navLink.map((nav) => {
                return (
                  <li key={nav.id} className={active === nav.title ? 'active' : ''} onClick={() => setActive(nav.title)}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;