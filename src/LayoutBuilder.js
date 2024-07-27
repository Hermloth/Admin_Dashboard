import HomeIcon from './assets/home.svg';
import AccountIcon from './assets/card-account-details.svg';
import MessageIcon from './assets/message.svg';
import HistoryIcon from './assets/history.svg';
import TaskIcon from './assets/note-multiple.svg';
import CommunitiesIcon from './assets/account-group.svg';
import SettingsIcon from './assets/cog.svg';
import HelpIcon from './assets/help-box.svg';
import PrivacyIcon from './assets/shield-check.svg';
import bellIcon from './assets/bell.svg';
import searchIcon from './assets/search.svg';
import {CreateDivDomElement} from './CreateDomElement'
import userAvatar from './assets/user-avatar.jpg'


export function BuildLayout () {
	console.log("Build Layout Loaded");

	const body = document.body;

	const testclass = "TestClass";

	const parentDiv = document.createElement("div");
	parentDiv.classList.add("parentDiv");
	document.body.appendChild(parentDiv);

// Build sidebar with header

	const sideBarContainer = document.createElement("div");
	sideBarContainer.classList.add("Sidebar");
	parentDiv.appendChild(sideBarContainer);

	const sideBarTitleContainer = document.createElement("div");
	sideBarTitleContainer.classList.add("TitleContainer");
	sideBarContainer.appendChild(sideBarTitleContainer);

	const sideBarIconContainer = document.createElement("div");
	sideBarIconContainer.classList.add("DashboardIcon");
	sideBarTitleContainer.appendChild(sideBarIconContainer);

	const sideBarHeadingContainer = document.createElement("div");
	sideBarHeadingContainer.classList.add("DashboardTitle");
	sideBarTitleContainer.appendChild(sideBarHeadingContainer);

	const dashboardTitle = document.createElement("h1");
	dashboardTitle.classList.add("Title");
	dashboardTitle.textContent = "Dashboard";
	sideBarHeadingContainer.appendChild(dashboardTitle);

// Build Footer

	const footer = document.createElement("div");
	footer.classList.add("Footer")
	footer.textContent = `This is not a real website, this is a project assignment for the Odin Project. Author: Hermloth - Webpack: ${process.env.IS_PRODUCTION} ${GLOBAL_TEST}`
	parentDiv.appendChild(footer);

// Build Menu Items

	const menuListContainer = document.createElement("div");
	menuListContainer.classList.add("MenuListContainer");
	const adminMenuListContainer = document.createElement("div");
	adminMenuListContainer.classList.add("MenuListContainer");
	var menuItemsText = ["Home","Profile","Message","History","Tasks","Communities"];
	var menuItemsIcons = [HomeIcon, AccountIcon,MessageIcon,HistoryIcon,TaskIcon,CommunitiesIcon];
	var adminMenuItemsText = ["Settings","Support","Privacy"];
	var adminMenuIcons = [SettingsIcon, HelpIcon, PrivacyIcon];

	for (let menuitem in menuItemsText){
		let container = document.createElement("div")
		container.classList.add("menuContainerRow");

		let menuRowIcon = document.createElement("img");
		menuRowIcon.classList.add("menuRowIcon");
		menuRowIcon.src = menuItemsIcons[menuitem];
		container.appendChild(menuRowIcon);

		let menuRowText = document.createElement("div");
		menuRowText.classList.add("menuRowText");
		menuRowText.textContent = menuItemsText[menuitem];
		container.appendChild(menuRowText);

		menuListContainer.appendChild(container);
		console.log(menuItemsText[menuitem]);
	}
	
	for (let adminMenuItem in adminMenuItemsText){
		let container = document.createElement("div");
		container.classList.add('menuContainerRow');

		let menuRowIcon = document.createElement("img");
		menuRowIcon.classList.add("menuRowIcon");
		menuRowIcon.src = adminMenuIcons[adminMenuItem];
		container.appendChild(menuRowIcon);

		let adminMenuText = document.createElement("div");
		adminMenuText.classList.add("menuRowText");
		adminMenuText.textContent = adminMenuItemsText[adminMenuItem];

		container.appendChild(adminMenuText);
		adminMenuListContainer.appendChild(container);
	}

	sideBarContainer.appendChild(menuListContainer);
	sideBarContainer.appendChild(adminMenuListContainer);
	
// Set up header
const headerFrame = document.createElement("div");
headerFrame.classList.add("HeaderContainer")
parentDiv.appendChild(headerFrame);

CreateDivDomElement("div", "HSectionA", headerFrame);
const HSectionA = document.querySelector(".HSectionA");

CreateDivDomElement("div", "HSectionB", headerFrame);
const HSectionB = document.querySelector(".HSectionB");

// Search Bar Container
CreateDivDomElement("div", "searchBarContainer", HSectionA);
const searchBarContainer = document.querySelector(".searchBarContainer");

const searchIconImage = document.createElement('img');
searchIconImage.src = searchIcon;
searchIconImage.style = "width: 25px; margin-left: 8px"
searchIconImage.classList.add("SearchBarIcon")
searchBarContainer.appendChild(searchIconImage);

const seachbar = document.createElement("input");
seachbar.classList.add("searchbar");
searchBarContainer.appendChild(seachbar);

// Notifications Container
CreateDivDomElement("div", "NotificationsContainer", HSectionA);
const notificationAndAccountContainer = document.querySelector(".NotificationsContainer");

const notificationsIcon = document.createElement("img");
notificationsIcon.src = bellIcon;
notificationsIcon.classList.add("NotificationBellIcon");
notificationAndAccountContainer.appendChild(notificationsIcon);

CreateDivDomElement("div","UserIcon",notificationAndAccountContainer);
const UserIconContainer = document.querySelector(".UserIcon");
const UserIconRight = document.createElement("img");
UserIconRight.classList.add("userIconRight")
UserIconRight.src = userAvatar;
UserIconContainer.appendChild(UserIconRight);


CreateDivDomElement("div","UserName",notificationAndAccountContainer);
const UserNameDisplay = document.querySelector(".UserName");
UserNameDisplay.textContent = "Morgan Oakley"


// Button Container
CreateDivDomElement("div", "ControlButtonContainer", HSectionB);
const ControlButtonContainer = document.querySelector(".ControlButtonContainer")

const NewButton = document.createElement("button");
NewButton.classList.add("ButtonClass");
NewButton.textContent = "New";
ControlButtonContainer.appendChild(NewButton);

const UploadButton = document.createElement("button");
UploadButton.classList.add("ButtonClass");
UploadButton.textContent = "Upload";
ControlButtonContainer.appendChild(UploadButton);

const ShareButton = document.createElement("button");
ShareButton.classList.add("ButtonClass");
ShareButton.textContent = "Share";
ControlButtonContainer.appendChild(ShareButton);

// Welcome Container
CreateDivDomElement("div", "welcomeContainer", HSectionB);
const welcomeContainer = document.querySelector(".welcomeContainer");

CreateDivDomElement("div", "UserWelcomeAvatar", welcomeContainer);
const UserWelcomeAvatar = document.querySelector(".UserWelcomeAvatar")

const UserWelcomeAvatarImg = document.createElement("img");
UserWelcomeAvatarImg.classList.add("WelcomeIcon");
UserWelcomeAvatar.appendChild(UserWelcomeAvatarImg);

UserWelcomeAvatarImg.src = userAvatar;


CreateDivDomElement("div", "UserWelcomeText1", welcomeContainer);
const UserWelcomeText1 = document.querySelector(".UserWelcomeText1");
UserWelcomeText1.textContent = "Hi there,"

CreateDivDomElement("div", "UserWelcomeText2", welcomeContainer);
const UserWelcomeText2 = document.querySelector(".UserWelcomeText2");
UserWelcomeText2.textContent = "Morgan Oakley (@morgan)"









}