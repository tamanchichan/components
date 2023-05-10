function Header() {
  return (
    <>
      <div className='container flex'>
        <div className='header-title'>
          <h1>Components</h1>
        </div>
        <div className='header-menu'>
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header