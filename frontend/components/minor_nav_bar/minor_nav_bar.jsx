import React from 'react';

class MinorNavBar extends React.Component {


  render() {
    return(
      <nav className="nav-minor">
        <span>Top Tracks</span>
        <section className="me-links">
          <i class="fa fa-github" aria-hidden="true"></i>
        </section>
      </nav>
    );
  }
}

export default MinorNavBar;
