class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="mani_header-section">
    <a href="/">
    <img
    src="./images/wedding-logo.png"
    style="width: 110px; height: 60px"
    />
    </a>
    <div class="mani_manu-wrapper">
      <ul>
        <li class="mani-menu"><a href="/">HOME</a></li>
        <li class="mani-menu"><a href="/about">ABOUT</a></li>
        <li class="mani-menu dropdown-item"><a href="/#">SERVICES</a>
        <i class="fa fa-angle-down"></i>
        <ul class="dropdown"></ul>
        </li>
        <li class="mani-menu dropdown-item">
          <a href="/#">DESTINATION WEDDING PLANNING</a>
          <i class="fa fa-angle-down"></i>
          <ul class="dropdown"></ul>
        </li>
        <li class="mani-menu"><a href="/contact">CONTACT US</a></li>
      </ul>
    </div>
    <div class='trigger_menu'>
    <i class="fa fa-bars menu_bar"></i>
    </div>
  </div>
    `;
  }
}
customElements.define("my-header", myHeader);
// SIDEBAR MENU
class mySidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="gmt-vertical-nav" id="sidebar_menu">
      <!-- Search -->
      <!--<div class="gmt-search form-outline px-2 pt-2">
        <input
          type="search"
          id="querySerch"
          class="form-control"
          placeholder="serch query"
          aria-label="Search"
        />
      </div>-->
      <!-- <div class="py-1 px-3 my-2 bg-light">
        <h4 class="mb-0">Dashboard</h4>
      </div> -->
      <!-- Menu list -->
      <ul class="nav flex-column mb-0 px-2 py-5 pt-lg-5">
        <li class="nav-item bg-light mb-1 rounded">
          <a href="../../index.html" class="nav-link text-dark">
            <i class="fa fa-th-large mr-3 text-primary fa-aw"></i>
            Dashboard
          </a>
        </li>
        <li class="nav-item bg-light mb-1 rounded">
          <a href="../pages/category.html" class="nav-link text-dark">
            <i class="fa fa-line-chart mr-3 text-primary fa-aw"></i>
            Category
          </a>
        </li>
        <li class="nav-item bg-light mb-1 rounded">
          <a href="../pages/application.html" class="nav-link text-dark">
            <i class="fa fa-line-chart mr-3 text-primary fa-aw"></i>
            Application
          </a>
        </li>
        <li class="nav-item bg-light mb-1 rounded">
          <a href="../pages/employee.html" class="nav-link text-dark">
            <i class="fa fa-line-chart mr-3 text-primary fa-aw"></i>
            Employee
          </a>
        </li>
      </ul>
    </div>
    `;
  }
}
customElements.define("my-sidebar", mySidebar);
