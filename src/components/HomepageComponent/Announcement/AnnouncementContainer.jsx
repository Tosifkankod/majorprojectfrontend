import React from 'react';
import './AnnouncementContainer.css';
import AnnouncementItems from './AnnouncementItems';

const Announcement = () => {
  return (
    <div className="announcement_container">
      <h3>Announcement</h3>
      <div className="inside_container">
        <AnnouncementItems />
        <AnnouncementItems />
        <AnnouncementItems />
        <AnnouncementItems />
        <AnnouncementItems />
        <AnnouncementItems />
        <AnnouncementItems />
        <AnnouncementItems />
        <AnnouncementItems />
        <AnnouncementItems />
        <AnnouncementItems />
        <AnnouncementItems />
        <AnnouncementItems />
        <AnnouncementItems />
      </div>
    </div>
  )
}

export default Announcement