import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
    <li>
        <a href="https://gumroad.com/nimu">Shop</a>
      </li>
      <li>
        <a href="https://nimu.work/">Blog</a>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
