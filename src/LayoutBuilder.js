export function BuildLayout () {
	console.log("Build Layout Loaded");

	const body = document.body;

	const testclass = "TestClass";

	const parentDiv = document.createElement("div");
	parentDiv.classList.add("parentDiv");
	document.body.appendChild(parentDiv);

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

	const footer = document.createElement("div");
	footer.classList.add("Footer")
	footer.textContent = `This is not a real website, this is a project assignment for the Odin Project. Author: Hermloth - Webpack: ${process.env.IS_PRODUCTION} ${GLOBAL_TEST}`
	parentDiv.appendChild(footer);
}