import React, { useEffect } from "react";

const AdminPanelpage = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <div className="h-screen bg-secondary-50">
      <div>
        <sidebar>
          <ul>
            <li>Dashboard</li>
            <li>Projects</li>
            <li>Chart</li>
            <li>Content Management</li>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Testimonials</li>
              <li>Contact Us</li>
            </ul>
            <li>Add Account</li>
            <li>My Profile</li>
            <li>Logout</li>
          </ul>
        </sidebar>
      </div>
    </div>
  );
};

export default AdminPanelpage;