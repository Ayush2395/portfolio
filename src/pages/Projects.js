import React from 'react'
import { Helmet } from 'react-helmet'

export default function Projects(props) {
    return (
        <div>
            <Helmet><title>{props.title}</title></Helmet>
            <h1>This is projects page</h1>
        </div>
    )
}
