# Randi Clemens Professional Site
> This is the professional website for Randi Clemens MFA.

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
> Professional website for Randi Clemens. This is a react app utilizing bootstrap features and custom components to showcase Randi Clemens.

## Screenshots
![Example screenshot](./src/Assets/screen-shot.png)

## Technologies
* React
* React Bootstrap
* React Router
* React Icons
* emailjs
* Sweet Alert
* JavaScript
* HTML
* CSS

## Setup
Please follow link to website - https://manovak24.github.io/randi_clemens/

## Code Examplesimport React from 'react';


```js
import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';


function HomePage(props) {
    return(
        <div className="HomePage">
            <div className="home-text-container">
                <h1>Randi Clemens</h1>
                <p>Writer ∙ Editor ∙ Educator</p>
            </div>
            <div className="ButtonContainer">
                <Link className="HomePage-Button-Link" to="/about">About</Link>
                <Link className="HomePage-Button-Link" to="/publications">Publications</Link>
                <Link className="HomePage-Button-Link" to="/editorials">Editorial Work</Link>
                <Link className="HomePage-Button-Link" to="/freelance">Freelance</Link>
                <Link className="HomePage-Button-Link" to="/contact">Contact</Link>
            </div>
        </div>
    );
}

export default HomePage;
```

## Features
List of features ready and TODOs for future development
* Contact form email services via EmailJS
* Navagation buttons on Home Page
* Responsive design for a range of screen sizes

To-do list:
* Need to deploy on something other than GitHub Pages
* Still needs some cleaning up and a few refractors

## Status
Project is: _in progress_
> Still working with client to finalize the design and content.

## Contact
Created by [@manovak24](https://github.com/manovak24) - feel free to contact me!