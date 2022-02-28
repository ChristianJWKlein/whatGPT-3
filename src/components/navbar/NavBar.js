import { React, useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navBar.css';

const Menu = () => {
  return (
    <>
      <p>
        <a href='#home'>Home</a>
      </p>
      <p>
        <a href='#wgpt3'>What is GPT?</a>
      </p>
      <p>
        <a href='#possibillity'>Open AI</a>
      </p>
      <p>
        <a href='#features'>Case Studies</a>
      </p>
      <p>
        <a href='#blog'>Library</a>
      </p>
    </>
  );
};

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <section className='gpt3__navbar'>
        <section className='gpt3__navbar-links'>
          <section className='gpt3__navbar-links_logo'>
            <img src={logo} alt='logo' />
          </section>
          <section className='gpt3__navbar-links_container'>
            <Menu />
          </section>
        </section>
        <section className='gpt3__navbar-sign'>
          <p>Sign In</p>
          <button type='button'>Sign Up</button>
        </section>
        <section className='gpt3__navbar-menu'>
          {toggleMenu ? (
            <RiCloseLine
              color='#fff'
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color='#fff'
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <section className='gpt3__navbar-menu_container scale-up-center'>
              <section className='gpt3__navbar-menu_container-links'>
                <Menu />
                <section className='gpt3__navbar-menu_container-links-sign'>
                  <p>Sign In</p>
                  <button type='button'>Sign Up</button>
                </section>
              </section>
            </section>
          )}
        </section>
      </section>
    </>
  );
}
