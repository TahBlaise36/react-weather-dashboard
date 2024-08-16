# Weather dashboard

- [visite application here](https://react-weather-dashboard-kappa.vercel.app)

## Description

This project is a software that helps users get the weather informations about any city the search for. Users are also able save their favorite cities so they can get the weather details back about that city without having to search manualy.

## Table of Contents

- [Installation](#installation)
- [Technologies](#technologies)
- [Usage](#usage)
- [Features](#features)
- [Folder/File structure](#Folder/File_structure)
- [Libraries](#libraries)

## Installation

To install this project, run the following commands:

```bash
git clone https://github.com/TahBlaise36/react-weather-dashboard.git
npm install
```

## Technologies

- React
- Vite
- Supabase
- CSS modules

## Usage

- To use this project, run:

```bash
  npm run dev
```

## Features

- Users are able to login and access the weather dashboard.

- Users are able to search for any city by typing the city name.

- User can save the current city they have searched for, by clicking the add city button.

- Users are able to view the cities they have saved in the dashboard.

- Users are able to search for any city from the saved list, by clicking on the city. This will bring back the weather details of the selected city.

- Users are able to delete some cities from thier favorite cities list.

- Users will recieve notification if the city has successfuly been added to or deleted from thier favorite cities list.

## Folder/File_structure

### ui:

- This folder contains the complex components for each features of the dashboard performing the various functionalities.

### components:

- This folder contains re-usable react components that can be used anyware within the application.

### authentication:

- This folder contains the login and sign up forms pages and also functions for authenticating users to the dashboard.

### services:

- This folder is where we interact with the superbase api performing the various CRUD operations and authentication.

### hooks:

- This folder contains re-usable hooks most especially the useWeather hook for fetching city location and weather data.

### utils:

- This folder contains re-usable functions for formating data within the application.

### assets:

- This folder contain all images in the application.

### constants:

- This folder imports all images and exports them as names.

## Libraries

1. This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
   Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

2. Other libraries

- [@supabase/supabase-js]
- [@tanstack/react-query]
- [@tanstack/react-query-devtools]
- [react-router-dom]
- [react-hot-toast]
- [eslint]
- [eslint-config-react-app]
- [eslint-plugin-react]
- [vite-plugin-eslint]
