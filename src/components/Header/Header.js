import React from 'react'
import "./Header.css"

export default function Header({ title }) {
    return (
        <>
            <h1 title="Header" className="header">{title}</h1>
            <h3 data-testid="titulo" className="header">Hello</h3>
            <h3 title="emilio" className="header">Hello</h3>
        </>
    )
}
