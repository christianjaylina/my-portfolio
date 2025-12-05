# Online Portfolio Website

A modern, responsive portfolio website built with React that allows you to document educational tours, manage certificates, and showcase photo galleries.

## Features

### 🏠 Homepage / About Me
- Clean, modern landing page with hero section
- Personal introduction and background information
- Statistics showcase
- Call-to-action buttons to explore different sections

### ✈️ Educational Trip Journal
- **Add new trips** with title, date, location, description, and photos
- **Edit existing trips** with full CRUD functionality
- **Delete trips** with confirmation
- **Search and filter** trips by title, location, or description
- **Photo galleries** for each trip entry
- Responsive card-based layout

### 🏆 Certificates Management
- **Upload certificates** in image or PDF format
- **Categorize certificates** (Academic, Professional, Technical, Language, Other)
- **Grid layout** for easy browsing
- **Search and filter** by category and content
- **Full-screen viewing** with download option for PDFs
- Certificate details including issuer, dates, and credential IDs

### 📸 Photo Documentation
- **Upload multiple photos** at once
- **Organize by categories** (Travel, Education, Events, Nature, Architecture, People, Other)
- **Advanced photo viewer** with navigation
- **Search and filter** capabilities
- **Responsive masonry-style grid**
- Photo metadata including location, date, and descriptions

### 💾 Data Persistence
- **Local Storage** integration for data persistence
- **Sample data** automatically loaded on first visit
- **Import/Export** functionality (data stored as JSON)

## Tech Stack

- **React 18** with functional components and hooks
- **React Router** for navigation
- **Tailwind CSS** for styling and responsive design
- **Context API** for state management
- **Local Storage** for data persistence

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Navigation.js    # Main navigation bar
│   ├── Footer.js        # Site footer
│   ├── TripCard.js      # Trip display card
│   ├── TripModal.js     # Trip add/edit modal
│   ├── CertificateCard.js # Certificate display card
│   ├── CertificateModal.js # Certificate upload modal
│   ├── PhotoCard.js     # Photo display card
│   ├── PhotoModal.js    # Photo upload modal
│   └── PhotoViewer.js   # Full-screen photo viewer
├── pages/               # Main page components
│   ├── Home.js          # Homepage/About section
│   ├── TripJournal.js   # Trip management page
│   ├── Certificates.js  # Certificate management page
│   └── PhotoGallery.js  # Photo gallery page
├── context/             # React Context for state management
│   └── DataContext.js   # Global state management
├── data/                # Sample data and utilities
│   └── sampleData.js    # Initial sample data
└── App.js               # Main app component with routing
```

## Installation & Setup

1. **Clone or download** the project files
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm start
   ```
4. **Open your browser** to `http://localhost:3000`

## Usage Guide

### Adding Your First Trip
1. Navigate to "Trip Journal"
2. Click "Add New Trip"
3. Fill in the trip details (title, date, location, description)
4. Upload photos by selecting multiple files
5. Click "Save Trip"

### Managing Certificates
1. Go to "Certificates" page
2. Click "Add Certificate"
3. Upload your certificate (image or PDF)
4. Fill in details like title, issuer, category, dates
5. Add credential ID if available
6. Save the certificate

### Building Your Photo Gallery
1. Visit "Photo Gallery"
2. Click "Add Photos"
3. Select multiple images to upload
4. Add metadata like title, location, date, category
5. Save to add all photos to your gallery

### Customization

#### Updating Personal Information
Edit the `src/pages/Home.js` file to update:
- Personal introduction text
- Profile photo URL
- Statistics numbers
- Background information

#### Styling Customization
The project uses Tailwind CSS. Key customization points:
- Colors: Edit `tailwind.config.js` for theme colors
- Components: Modify component styles in `src/index.css`
- Layout: Adjust responsive breakpoints in individual components

#### Adding New Categories
Update category arrays in:
- `src/components/CertificateModal.js` for certificate categories
- `src/components/PhotoModal.js` for photo categories

## Data Management

### Local Storage
All data is automatically saved to browser local storage:
- `portfolio-trips`: Trip journal entries
- `portfolio-certificates`: Certificate data
- `portfolio-photos`: Photo gallery data

### Sample Data
The app includes sample data that loads automatically on first visit. To reset:
1. Clear browser local storage
2. Refresh the page

### Backup/Export Data
Data is stored as JSON in local storage. To backup:
1. Open browser developer tools
2. Go to Application/Storage tab
3. Copy the portfolio-* entries from Local Storage

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Mobile Responsive

The portfolio is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## Performance Features

- **Lazy loading** for images
- **Optimized bundle** size
- **Responsive images** with proper sizing
- **Efficient re-rendering** with React hooks

## Future Enhancements

Potential features to add:
- Cloud storage integration (Firebase, AWS S3)
- Social sharing capabilities
- Export to PDF functionality
- Advanced search with tags
- Bulk operations for photos/certificates
- Integration with external certificate verification
- Map integration for trip locations

## Contributing

Feel free to fork this project and customize it for your own portfolio needs. The code is well-documented and modular for easy modification.

## License

This project is open source and available under the MIT License.

