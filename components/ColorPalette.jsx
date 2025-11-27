"use client";
import { useEffect, useState } from "react";

export default function ColorPalette() {
    const [open, setOpen] = useState(false);

    // Sample colors
    // const colors = ["#0d6efd", "#198754", "#dc3545", "#ffc107", "#0dcaf0"];
    // Extended color palette
    const colors = [
        // Bootstrap-style
        "#0d6efd", "#198754", "#dc3545", "#ffc107", "#0dcaf0",

        // Shades of Gray
        "#212529", "#495057", "#6c757d", "#adb5bd", "#dee2e6",

        // Pastels
        "#f8d7da", "#d1e7dd", "#cff4fc", "#fff3cd", "#e2e3e5",

        // Vibrant
        "#ff6f61", "#6f42c1", "#fd7e14", "#20c997", "#6610f2",

        // Extra accents
        "#e83e8c", "#17a2b8", "#28a745", "#343a40", "#f8f9fa",


        // ✅ GRADIENT COLORS (NEW)
        "linear-gradient(45deg, #ff9a9e, #fad0c4)",
        "linear-gradient(45deg, #a18cd1, #fbc2eb)",
        "linear-gradient(45deg, #fad0c4, #ffd1ff)",
        "linear-gradient(45deg, #ffecd2, #fcb69f)",
        "linear-gradient(45deg, #ff8177, #ff867a, #ff8c7f)",
        "linear-gradient(45deg, #7f7fd5, #86a8e7, #91eae4)",
        "linear-gradient(45deg, #43e97b, #38f9d7)",
        "linear-gradient(45deg, #fa709a, #fee140)",
        "linear-gradient(45deg, #30cfd0, #330867)",
        "linear-gradient(45deg, #f6d365, #fda085)",
        "linear-gradient(45deg, #96fbc4, #f9f586)"
    ];

    // Restore saved colors on load
    useEffect(() => {
        const savedHeader = localStorage.getItem("header-bg");
        const savedSidebar = localStorage.getItem("sidebar-bg");
        const savedMain = localStorage.getItem("main-bg");

        if (savedHeader) document.documentElement.style.setProperty("--header-bg", savedHeader);
        if (savedSidebar) document.documentElement.style.setProperty("--sidebar-bg", savedSidebar);
        if (savedMain) document.documentElement.style.setProperty("--main-bg", savedMain);
    }, []);

    // Function to update CSS variable + store in localStorage
    const changeColor = (variable, color, key) => {
        document.documentElement.style.setProperty(variable, color);
        localStorage.setItem(key, color);
    };


    // Function to update CSS variable
    // const changeColor = (variable, color) => {
    //     document.documentElement.style.setProperty(variable, color);
    // };

    return (
        <>
            {/* Floating Button */}
            <div className="color-palet" onClick={() => setOpen(!open)}>
                <i className="fa-solid fa-house"></i>
            </div>

            {/* Palette Panel */}
            <div className={`color-palet-panel ${open ? "open" : ""}`}>
                {/* Header Colors */}
                <div className="palette-section">
                    <h6 className="section-title">Header</h6>
                    <div className="color-options">
                        {colors.map((c, i) => (
                            <div
                                key={i}
                                className="color-circle"
                                style={{ background: c }}
                                onClick={() => changeColor('--header-bg', c, 'header-bg')}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Sidebar Colors */}
                <div className="palette-section">
                    <h6 className="section-title">Sidebar</h6>
                    <div className="color-options">
                        {colors.map((c, i) => (
                            <div
                                key={i}
                                className="color-circle"
                                style={{ background: c }}
                                onClick={() => changeColor('--sidebar-bg', c, 'sidebar-bg')}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Main Colors */}
                {/* <div className="palette-section">
                    <h6 className="section-title">Main</h6>
                    <div className="color-options">
                        {colors.map((c, i) => (
                            <div
                                key={i}
                                className="color-circle"
                                style={{ background: c }}
                                onClick={() => changeColor('--main-bg', c, 'main-bg')}
                            ></div>
                        ))}
                    </div>
                </div> */}
            </div>
        </>
    );
}
