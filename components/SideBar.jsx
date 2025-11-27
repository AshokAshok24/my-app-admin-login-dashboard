"use client";
import { useState } from "react";
import Link from "next/link";

export default function Sidebar({ sidebarVisible }) {
    const [openMenu, setOpenMenu] = useState(null);
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
        setOpenSubMenu(null); // reset sub when switching main menu
    };

    const toggleSubMenu = (sub) => {
        setOpenSubMenu(openSubMenu === sub ? null : sub);
    };

    return (
        <>
            <aside className={`sidebar ${sidebarVisible ? 'open' : ''}`}>

                <div className="sidebar bg-dark text-white p-3" style={{ width: "250px", minHeight: "100vh" }}>


                    <div className="sidebar-logo mb-3">logo</div>

                    <ul className="list-unstyled">

                        {/* Dashboard */}
                        <li>
                            <button onClick={() => toggleMenu("dashboard")} className="d-flex align-items-center w-100 btn btn-toggle text-start">
                                <div className="icon me-2">
                                    <i className="fa-solid fa-house"></i>
                                </div>
                                <div className="label flex-grow-1">Dashboard</div>
                                <div className="arrow">
                                    <i className={`fa-solid fa-chevron-${openMenu === "dashboard" ? "down" : "right"}`}></i>
                                </div>
                            </button>
                            {openMenu === "dashboard" && (
                                <ul className="submenu list-unstyled ps-4">
                                    <li>
                                        <button onClick={() => toggleSubMenu("overview")} className="d-flex w-100 btn btn-sm text-white text-start">

                                            <div className="label flex-grow-1">Cards</div>
                                            <div className="arrow">
                                                <i className={`fa-solid fa-chevron-${openSubMenu === "overview" ? "down" : "right"}`}></i>
                                            </div>
                                        </button>
                                        {openSubMenu === "overview" && (
                                            <ul className="list-unstyled ps-4">
                                                <li><Link href="/cards" className="text-white">Cards</Link></li>
                                                <li><Link href="/templates" className="text-white">Templates</Link></li>
                                            </ul>
                                        )}
                                    </li>
                                    <li>
                                        <button onClick={() => toggleSubMenu("stats")} className="d-flex w-100 btn btn-sm text-white text-start">
                                            <div className="label flex-grow-1">Stats</div>
                                            <div className="arrow">
                                                <i className={`fa-solid fa-chevron-${openSubMenu === "stats" ? "down" : "right"}`}></i>
                                            </div>
                                        </button>
                                        {openSubMenu === "stats" && (
                                            <ul className="list-unstyled ps-4">
                                                <li><Link href="/cards" className="text-white">Weekly</Link></li>
                                                <li><Link href="/templates" className="text-white">Monthly</Link></li>
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* Reports */}
                        <li>
                            <button onClick={() => toggleMenu("reports")} className="d-flex align-items-center w-100 btn btn-toggle text-start">
                                <div className="icon me-2">
                                    <i className="fa-solid fa-chart-line"></i>
                                </div>
                                <div className="label flex-grow-1">Reports</div>
                                <div className="arrow">
                                    <i className={`fa-solid fa-chevron-${openMenu === "reports" ? "down" : "right"}`}></i>
                                </div>
                            </button>
                            {openMenu === "reports" && (
                                <ul className="submenu list-unstyled ps-4">
                                    <li>
                                        <button onClick={() => toggleSubMenu("daily")} className="d-flex w-100 btn btn-sm text-white text-start">
                                            <div className="label flex-grow-1">Daily</div>
                                            <div className="arrow">
                                                <i className={`fa-solid fa-chevron-${openSubMenu === "daily" ? "down" : "right"}`}></i>
                                            </div>
                                        </button>
                                        {openSubMenu === "daily" && (
                                            <ul className="list-unstyled ps-4">
                                                <li><Link href="/cards" className="text-white">Sales</Link></li>
                                                <li><Link href="/templates" className="text-white">Expenses</Link></li>
                                            </ul>
                                        )}
                                    </li>
                                    <li>
                                        <button onClick={() => toggleSubMenu("monthly")} className="d-flex w-100 btn btn-sm text-white text-start">
                                            <div className="label flex-grow-1">Monthly</div>
                                            <div className="arrow">
                                                <i className={`fa-solid fa-chevron-${openSubMenu === "monthly" ? "down" : "right"}`}></i>
                                            </div>
                                        </button>
                                        {openSubMenu === "monthly" && (
                                            <ul className="list-unstyled ps-4">
                                                <li><Link href="/cards" className="text-white">Profit</Link></li>
                                                <li><Link href="/templates" className="text-white">Loss</Link></li>
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                            )}
                        </li>

                    </ul>
                </div>

            </aside>




        </>

    );
}

