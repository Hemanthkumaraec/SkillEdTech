import React, { useState } from "react";
import { IonHeader } from "@ionic/react"; // Keep IonHeader if you're building an Ionic app
import "./Header.css"; // Your custom CSS for specific branding
import logo from "../../assets/logo.png"; // Adjust path as needed

const Header: React.FC = () => {
    // State for the "Our Courses" dropdown visibility
    const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);

    // Function to toggle the "Our Courses" dropdown
    const toggleCoursesDropdown = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent default link behavior if wrapped in <a>
        setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
    };

    // Dummy course data for the dropdown
    const courses = [
        { name: "Wordpress Development", link: "wordpress-development.html" },
        { name: "Data Science", link: "data-science.html" },
        { name: "Web Development", link: "web-development.html" },
        { name: "UI/UX Design", link: "uiux-design.html" },
        { name: "Graphics Design", link: "graphics-design.html" },
        { name: "Digital Marketing", link: "digital-marketing.html" },
        { name: "Search Engine Optimization", link: "search-engine-optimization.html" },
        { name: "Apps Development", link: "apps-development.html" },
        { name: "Web Design", link: "web-design.html" },
    ];

    return (
        // IonHeader for Ionic integration, otherwise a standard <header> tag
        <IonHeader className="ion-no-border ion-no-shadow ion-no-border-top ion-no-background-color custom-ion-header">
            {/* Bootstrap's container-fluid for responsive full width */}
            <div className="container-fluid py-3 px-4 px-lg-5 header-container">
                {/* Using Bootstrap's flex utilities for header layout */}
                <div className="d-flex align-items-center justify-content-between header-inner">

                    {/* Left Section: Logo and Courses Dropdown */}
                    <div className="d-flex align-items-center header-left">
                        <div className="logo me-4"> {/* me-4 for margin-right in Bootstrap */}
                            <a href="index.html">
                                {/* Fallback placeholder image for logo if actual image fails */}
                                <img
                                    src={logo}
                                    alt="SkillEdTech Logo"
                                    className="img-fluid" // Bootstrap for responsive images
                                    style={{ height: '56px', width: 'auto' }} // Set a max height
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://placehold.co/209x56/1a174c/f0f2f5?text=Logo'; // Placeholder
                                    }}
                                />
                            </a>
                        </div>

                        {/* Courses Dropdown */}
                        {/* Added Bootstrap dropdown classes */}
                        <div
                            className="position-relative"
                            onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                            onMouseLeave={() => setIsCoursesDropdownOpen(false)}
                        >
                            <div
                                className={`dropdown custom-courses-dropdown ${isCoursesDropdownOpen ? 'show' : ''}`}
                            >
                                <button
                                    className="btn custom-dropdown-toggle d-flex align-items-center"
                                    type="button"
                                    id="coursesDropdown"
                                    aria-expanded={isCoursesDropdownOpen ? 'true' : 'false'}
                                    onClick={toggleCoursesDropdown}
                                >
                                    <i className="fas fa-th-list me-2"></i>
                                    Our Courses
                                    <i className="fas fa-chevron-down ms-2"></i>
                                </button>

                                <ul
                                    className={`dropdown-menu ${isCoursesDropdownOpen ? 'show' : ''}`}
                                    aria-labelledby="coursesDropdown"
                                >
                                    {courses.map((course, index) => (
                                        <li key={index}>
                                            <a className="dropdown-item" href={course.link}>
                                                {course.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>

                    {/* Right Section: Main Nav, Icons, CTA */}
                    <div className="d-flex align-items-center header-right">
                        {/* Main Navigation (hidden on small screens, shown on medium+) */}
                        <nav className="d-none d-lg-block me-4"> {/* d-none d-lg-block for responsive display */}
                            <ul className="navbar-nav flex-row main-nav-list"> {/* flex-row for horizontal nav */}
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Blog</a>
                                </li>
                            </ul>
                        </nav>

                        {/* Icon Buttons Section (visible on all screens) */}
                        <div className="d-flex align-items-center header-icons me-4">
                            <button className="btn icon-button" aria-label="Search">
                                <i className="fas fa-search"></i>
                            </button>
                            <button className="btn icon-button" aria-label="Notifications">
                                <i className="fas fa-bell"></i>
                                <span className="badge notification-badge">3</span> {/* Example notification count */}
                            </button>
                            <button className="btn icon-button cart-button" aria-label="Cart">
                                <i className="fas fa-shopping-cart"></i>
                                <span className="badge cart-badge">0</span>
                            </button>
                            <button className="btn icon-button" aria-label="User Profile">
                                <i className="fas fa-user-circle"></i>
                            </button>
                        </div>

                        {/* Call-to-Action Button (hidden on small screens, shown on medium+) */}
                        <a href="contact.html" className="btn custom-cta-button d-none d-md-block"> {/* d-none d-md-block for responsive display */}
                            <span>Join for Free</span>
                            <span className="btn-icon ms-2"> {/* ms-2 for margin-left */}
                                <i className="fas fa-arrow-right"></i> {/* Font Awesome arrow icon */}
                            </span>
                        </a>

                        {/* Mobile Nav Toggler (visible only on small screens) */}
                        <button
                            className="btn d-lg-none mobile-nav-toggler" // d-lg-none hides on large, shows on small
                            type="button"
                            aria-label="Toggle mobile navigation"
                        // onClick={() => /* Handle mobile nav toggle */ }
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </IonHeader>
    );
};

export default Header;
