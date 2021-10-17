import './sideBar.css'
import {TrendingUp,LibraryAdd,PieChart ,Dashboard,Category, ViewList, People, SupervisedUserCircle, Receipt} from '@material-ui/icons';
import { Link } from 'react-router-dom';


function SideBar() {
    return (
        <div className="sideBar"> 
            <div className="adminAvatarWrapper d-block">
            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg" className="adminAvatar mr-2" alt="Avatar" />
            <h6 className="adminName mr-3">Araina</h6>   
            <p className="adminPosition mr-3">Admin Head</p>      
            </div>
            <div className="sideBarWrapper">
                <div className="sideBarMenu">
                    <div className="sideBarTitle">Navigation</div>
                    <ul className="sideBarList">
                        <Link to ="/" className="link">
                        <li className="sideBarListItem active"><Dashboard className="mr-2"/>Home</li>

                        </Link>
                        <li className="sideBarListItem"><TrendingUp className="mr-2"/>Sales</li>
                        <li className="sideBarListItem"><PieChart className="mr-2"/>Analytics</li>
                    </ul>
                </div>
                <div className="sideBarMenu">
                    <div className="sideBarTitle">Product</div>
                    <ul className="sideBarList">
                        <li className="sideBarListItem active"><Category className="mr-2"/>Category</li>
                        <Link style={{textDecoration: 'none'}} to = "/product-list">
                            <li className="sideBarListItem"><ViewList className="mr-2"/>Product List</li>
                        </Link>
                        <Link to={'/add-product'}>
                            <li className="sideBarListItem"><LibraryAdd className="mr-2"/>Add Product</li>
                        </Link>
                    </ul>
                </div>    
                <div className="sideBarMenu">
                    <div className="sideBarTitle">Quick Menu</div>
                    <ul className="sideBarList">
                    <Link to ="/users" className="link">
                        <li className="sideBarListItem active"><People className="mr-2"/>Users</li>
                        </Link>
                        <li className="sideBarListItem"><SupervisedUserCircle className="mr-2"/>Staff</li>
                        <li className="sideBarListItem"><Receipt className="mr-2"/>Transctions</li>
                    </ul>
                </div>             
            </div>
        </div>         
    )
}

export default SideBar
