import React from "react";

const Header = () => {

    // Using variables like another way to use inline styling in React
    const headerStyle = {
        padding: "20px 0",
        lineHeight: "1.5em",
    }

    return (
        <header style={headerStyle}>
            <h1
                style={{ // One curly is for JS, another one is for inline styling
                    fontSize: "6rem",
                    fontWeight: "600",
                    marginBottom: "2rem",
                    lineHeight: "1em",
                    color: "#ececec",
                    textTransform: "lowercase",
                    textAlign: "center",
                }}
            >
                todos
            </h1>
        </header>
    )
}

export default Header
