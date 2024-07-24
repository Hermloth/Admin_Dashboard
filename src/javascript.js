import './style.css';
import {BuildLayout} from './LayoutBuilder'
import Icon from './view-dashboard.svg';


BuildLayout();

const sideBarIconContainer = document.querySelector(".DashboardIcon")
const sidebarIcon = document.createElement("IMG");
sidebarIcon.classList.add("Icon");
sidebarIcon.src = Icon;
sideBarIconContainer.appendChild(sidebarIcon);