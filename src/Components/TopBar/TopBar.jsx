import './topBar.css'
import MenuIcon from '@material-ui/icons/Menu';

function TopBar() {
   
    return (
        <div className="topBar">
            <div className="topBarWrapper">
                <div className="topLeft">
                    <MenuIcon className="menuIcon"/>
                    <span className="brandLogoWrapper">
                        <small>Top</small><span className="brandLogo">Sales</span> .
                    </span>
                </div>
                <div className="topRight">
                    <div className="topBarIconsWrapper">
                    <i className="far fa-bell"></i> 
                    <span className="notificationIconBadge">5</span>
                    </div>
                    <div className="topAvatarWrapper d-flex ml-4 mr-1">
                        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg" className="avatar mr-2" alt="Avatar" />
                        <span  className="profileName mr-2">Ariana</span><span><i className="fas fa-angle-down ml-1"></i></span>
                    </div>
                    <div className="topBarIconsWrapper">
                    <i class="fas fa-globe"></i>
                    </div>
                    <div className="topBarIconsWrapper">
                    <i class="fas fa-cog"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar
