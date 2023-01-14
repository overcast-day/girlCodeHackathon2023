import React from 'react'

export function LoadingPage() {
    return <div className="LoadingPage">
        <div className="loading">
            <div style={{ "--c": 0 }}></div>
            <div style={{ "--c": 1 }}></div>
            <div style={{ "--c": 2 }}></div>
            <div style={{ "--c": 3 }}></div>
            <div style={{ "--c": 4 }}></div>
            <div style={{ "--c": 5 }}></div>
            <div style={{ "--c": 6 }}></div>
            <div style={{ "--c": 7 }}></div>
        </div>
        <div className="text">Searching. Give us a sec&#8230;</div>
    </div>
}
