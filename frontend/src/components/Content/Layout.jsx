import React from 'react'
import OffcanvasNavbar from './OffcanvasNavbar'
import CodingSheet from './CodingSheet';
import UpcomingContests from './UpcomingContests';
import CodingResources from './CodingResources';
import Discussion from './Discussion';
import CodingIDE from './CodingIDE';
import DiscussionThread from './DiscussionThread';
import MobileOffcanvasNavbar from './MobileOffcanvasNavbar';
import Profile from '../User/Profile';
import { useParams } from 'react-router-dom';

function CheckContentPath() {
  let { userid } = useParams();
  let path = window.location.pathname;
  console.log(userid) 

  if (path === '/coding-sheets') return <CodingSheet />;
  else if (path === '/upcoming-contests') return <UpcomingContests />
  else if (path === '/coding-resources') return <CodingResources />
  else if (path === '/discussion') return <Discussion />
  else if (path === '/coding-ide') return <CodingIDE />
  else if (path.startsWith('/discussion/interview/') || path.startsWith('/discussion/algorithms/') || path.startsWith('/discussion/development/') || path.startsWith('/discussion/miscellaneous/')) return <DiscussionThread />
  else if (userid) return <Profile userId={userid} />
}

function CheckDevice() {
  if (window.screen.width <= 1431) {
    return <MobileOffcanvasNavbar />
  }
  return <OffcanvasNavbar />
}
const Layout = () => {
  return (
    <>
      <div className="content ">
        <CheckDevice />
        <div className="main-content">
          <div className="container-fluid d-flex justify-content-center align-items-center">
            <div className="container main-container">
              {CheckContentPath()}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout;