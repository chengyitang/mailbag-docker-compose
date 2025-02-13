# MailBag - Email Client System

A full-stack email client application built with React, Node.js, and TypeScript, containerized with Docker.

Reproduced from [Modern Full-Stack Development Using TypeScript, React, Node.js, Webpack, and Docker](https://books.google.com/books?id=XLfZDwAAQBAJ&printsec=frontcover&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false) by Frank Zammetti.

## Overview

MailBag is a modern email client that provides:

- Email viewing and composition
- Contact management 
- IMAP/SMTP integration
- Material-UI based interface
- Containerized deployment

## Architecture

### Client (Frontend)
- React-based SPA with TypeScript
- Material-UI components
- Webpack for bundling
- Axios for API communication
- Port 3000

### Server (Backend) 
- Node.js/Express server
- IMAP/SMTP email handling
- Contact storage with NeDB
- RESTful API endpoints
- Port 8080
