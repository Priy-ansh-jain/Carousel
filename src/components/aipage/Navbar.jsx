import "../../../css/navbar.css"

import image1 from '../../../assets/NavImages/image1.png';
import image2 from '../../../assets/NavImages/Aspireit.png';
import image3 from '../../../assets/NavImages/Ellipse 1872.svg';
import image4 from '../../../assets/NavImages/Layila.svg';

const Navbar = () => {
  return (
    <div>
      <div className="NavBar" style={{ width: '100%', height: '100%', paddingLeft: 40, paddingRight: 40, paddingTop: 16, paddingBottom: 16, background: 'white', border: '1px #D2D2D2 solid', backdropFilter: 'blur(220px)', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
        <div className="Group1000007785" style={{ width: 130, height: 46, position: 'relative' }}>
          <div className="Rectangle7391" style={{ width: 130, height: 46, left: 0, top: 0, position: 'absolute', background: '#0F0F36', borderRadius: 15 }} />
          <div className="logo" style={{ width: 100, height: 30.22, left: 15, top: 8, position: 'absolute' }}>
            <img className="Aspireit" src={image1} />
            <img className="Group1000007770" src={image2} />
          </div>
        </div>
        <div className="SearchBar" style={{ justifyContent: 'center', alignItems: 'center', gap: 16, display: 'flex' }}>
          <div className='InputContainer' style={{ height: 56, maxWidth: 657, paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, background: '#EBEBEB', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)', borderRadius: 32, justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex' }}>
            <div className='searchBar'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M9.49996 2.75C8.16495 2.75 6.85991 3.14588 5.74989 3.88757C4.63986 4.62927 3.7747 5.68347 3.26381 6.91686C2.75292 8.15026 2.61925 9.50745 2.8797 10.8168C3.14015 12.1262 3.78302 13.3289 4.72702 14.2729C5.67102 15.2169 6.87375 15.8598 8.18311 16.1202C9.49248 16.3807 10.8497 16.247 12.0831 15.7361C13.3165 15.2252 14.3707 14.3601 15.1124 13.25C15.854 12.14 16.2499 10.835 16.2499 9.49996C16.2498 7.70979 15.5386 5.99298 14.2728 4.72714C13.0069 3.46131 11.2901 2.75011 9.49996 2.75Z" stroke="#353535" stroke-width="2" stroke-miterlimit="10" />
                <path d="M14.666 14.668L18.3327 18.3346" stroke="#353535" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
              </svg>
              <input type="text" name='searchBar' placeholder='Search' />
            </div>
          </div>
        </div>

        <div className="Frame1000008205" style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex' }}>
          <div className="Frame1000008204" style={{ paddingLeft: 16, paddingTop: 8, paddingBottom: 8, background: '#EBEBEB', boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.25)', borderRadius: 40, backdropFilter: 'blur(4px)', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex' }}>
            <div className="ButtonsNotification" style={{ width: 44, height: 44, marginRight: 16, position: 'relative' }}>
              <div className="Ellipse" style={{ width: 44, height: 44, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 9999 }} />
              <div className="IconsBell" style={{ width: 24, height: 24, left: 10, top: 10, position: 'absolute' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 6.50001C21 8.43001 19.43 10 17.5 10C15.57 10 14 8.43001 14 6.50001C14 4.57001 15.57 3.00001 17.5 3.00001C19.43 3.00001 21 4.57001 21 6.50001ZM19 11.79C18.5 11.92 18 12 17.5 12C16.0421 11.9974 14.6447 11.4171 13.6138 10.3862C12.583 9.3553 12.0026 7.95788 12 6.50001C12 5.03001 12.58 3.70001 13.5 2.71001C13.3185 2.48755 13.0897 2.30838 12.8302 2.18555C12.5707 2.06272 12.2871 1.99934 12 2.00001C10.9 2.00001 10 2.90001 10 4.00001V4.29001C7.03 5.17001 5 7.90001 5 11V17L3 19V20H21V19L19 17V11.79ZM12 23C13.11 23 14 22.11 14 21H10C10 21.5304 10.2107 22.0391 10.5858 22.4142C10.9609 22.7893 11.4696 23 12 23Z" fill="#0072DC" />
                </svg>
              </div>
            </div>
            <div className="Profile" style={{ justifyContent: 'flex-start', alignItems: 'center', display: 'flex' }}>
              <img className="AvatarPic" style={{ width: 44, height: 44, background: 'linear-gradient(0deg, white 0%, white 100%)', borderRadius: 9999 }} src={image3} />
            </div>
          </div>
          <div className="Ai" style={{ width: 60, height: 60, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
            <img className="Layila" style={{ width: 60, height: 60, background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', boxShadow: '0px 0px 8px 3px rgba(0, 0, 0, 0.35)', borderRadius: 9999 }} src={image4} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar