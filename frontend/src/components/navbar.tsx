import React from 'react';

interface NavBarProps {
  title: string
}

function NavBar({ title }: NavBarProps) {
  return (
    <nav className="navbar bg-body-tertiary bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">{title}</span>
      </div>
    </nav>
  )
}

export default NavBar;