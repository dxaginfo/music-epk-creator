# Music EPK Creator

A web application that allows musicians and bands to create, customize, and share professional electronic press kits (EPKs).

## Overview

The Music EPK Creator is a full-stack web application designed to help artists showcase their work to venues, media outlets, and industry professionals. It provides an intuitive interface for creating customizable press kits with detailed analytics on engagement.

## Features

- **User Authentication & Profile Management**
  - Secure login and registration
  - Artist profile management
  - Support for managing multiple press kits

- **Press Kit Creation & Customization**
  - Industry-focused templates
  - Drag-and-drop content arrangement
  - Mobile-responsive design with live preview

- **Media Integration**
  - Audio track uploads and embedding
  - Video embedding from YouTube, Vimeo, etc.
  - High-resolution photo galleries
  - Secure sharing for unreleased/private tracks

- **Content Management**
  - Artist bio with formatting options
  - Press quotes and media mentions section
  - Discography listings
  - Tour dates/shows calendar
  - Achievements and awards section

- **Distribution & Sharing**
  - Shareable links with optional expiration
  - Email distribution to industry contacts
  - Downloadable PDF version
  - Social media sharing integration

- **Analytics & Tracking**
  - View tracking for press kits
  - Content engagement metrics
  - Geographic location data
  - Interaction analytics

- **Third-Party Integration**
  - Spotify, Bandcamp, SoundCloud embedding
  - Calendar services for shows/events
  - Contact forms for booking

## Technology Stack

### Frontend
- React.js with Next.js
- Redux for state management
- Material-UI components
- Styled Components for styling

### Backend
- Node.js
- Express.js
- JWT authentication
- AWS S3 for file storage

### Database
- MongoDB
- Redis for caching

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB
- Redis

### Installation

1. Clone the repository
```
git clone https://github.com/dxaginfo/music-epk-creator.git
cd music-epk-creator
```

2. Install dependencies
```
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Configure environment variables
```
# Create .env files in both server and client directories
# Example server/.env:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/music-epk
JWT_SECRET=your_jwt_secret
AWS_BUCKET_NAME=your_bucket_name
AWS_ACCESS_KEY=your_access_key
AWS_SECRET_KEY=your_secret_key

# Example client/.env:
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

4. Run the application
```
# Start backend server
cd server
npm run dev

# In a separate terminal, start frontend
cd client
npm run dev
```

5. Access the application at `http://localhost:3000`

## Project Structure

```
music-epk-creator/
├── client/                 # Frontend Next.js application
│   ├── components/         # Reusable React components
│   ├── pages/              # Next.js pages
│   ├── public/             # Static assets
│   ├── styles/             # Global styles
│   └── utils/              # Helper functions
│
├── server/                 # Backend Express.js application
│   ├── controllers/        # Route controllers
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   ├── middleware/         # Custom middleware
│   └── utils/              # Helper functions
│
├── .gitignore              # Git ignore file
├── package.json            # Project metadata
└── README.md               # Project documentation
```

## Deployment

This application can be deployed using:
- Frontend: Vercel
- Backend: Heroku or AWS Elastic Beanstalk
- Database: MongoDB Atlas
- Media Storage: AWS S3

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request