import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="widget">
        <h3 className="widget-title">Categories</h3>
        <ul className="category-list">
          <li>
            <a href="#">Category 1</a>
          </li>
          <li>
            <a href="#">Category 2</a>
          </li>
          <li>
            <a href="#">Category 3</a>
          </li>
          {/* Add more categories as needed */}
        </ul>
      </div>
      <div className="widget">
        <h3 className="widget-title">Recent Posts</h3>
        <ul className="post-list">
          <li>
            <a href="#">Recent Post 1</a>
          </li>
          <li>
            <a href="#">Recent Post 2</a>
          </li>
          <li>
            <a href="#">Recent Post 3</a>
          </li>
          {/* Add more recent posts as needed */}
        </ul>
      </div>
      {/* Add more sidebar widgets as needed */}
    </aside>
  );
}

export default Sidebar;
