class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 2rem 0;
                background-color: #f5f3f4;
                border-bottom: 1px solid #161a1d;
                }

                .title {
                    margin: 0;
                }

                .title a {
                    padding-left: 2.8rem;
                    text-transform: uppercase;
                    text-decoration: none;
                    letter-spacing: 0.1rem;
                    font-size: 2.5rem;
                    color: #161a1d;
                    cursor: pointer;
                }

                .menu {
                    margin: 0;
                    padding-right: 7rem;
                    cursor: pointer;
                }

                .menu-item {
                    display: inline-block;
                    padding: 0 2.5rem;
                    font-size: 1.4rem;
                }

                .menu-item a {
                    text-decoration: none;
                    color: #161a1d;
                }

                .dropdown-arrow {
                    border: solid #161a1d;
                    border-width: 0 0.15rem 0.15rem 0;
                    display: inline-block;
                    margin: 0 0 0.1rem 0.4rem;
                    padding: 0.3rem;
                    transform: rotate(45deg);
                    -webkit-transform: rotate(45deg);
                    z-index: 900;
                }

                .menu-item-list {
                    position: absolute;
                    padding: 0;
                }

                .menu-item-dropdown {
                    display: none;
                    position: relative;
                    background-color: #232a2e;
                    z-index: 999;
                    font-size: 1.1rem;
                }

                .menu-item-dropdown a {
                    display: block;
                    padding: 1.3rem 2rem;
                    margin: 0.3rem auto;
                    text-decoration: none;
                    color: #f5f3f4;
                }

                .menu-item:hover .menu-item-dropdown {
                    display: block;
                }

                .menu-item-dropdown:hover {
                    background-color:#d3d3d3;
                }

                .menu-item-dropdown:hover a {
                    color: #0b090a;
                }

                .dropdown-arrow:hover .menu-item-dropdown {
                    display: block;
                }
            @media screen and (max-width: 1250px) {
                .title a {
                    padding-left: 2rem;
                    font-size: 1.8rem;
                }

                .menu-item {
                    padding: 0 1rem;
                    font-size: 0.9rem;
                }

                .menu-item-dropdown {
                    font-size: 0.8rem;
                }
            @media screen and (max-width: 900px) {
                .title a {
                    padding-left: 0.8rem;
                    font-size: 1.3rem;
                }

                .menu {
                    padding-right: 3rem;
                }

                .menu-item {
                    padding: 0 0.5rem;
                    font-size: 0.8rem;
                }

                .dropdown-arrow {
                    padding: 0.2rem;
                }

                .menu-item-dropdown {
                    font-size: 0.6rem;
                }
        
            @media screen and (max-width: 623px) {
                header {
                    display: block;
                    padding: 1.5rem 0;
                }

                .title {
                    text-align: center;
                }

                .menu {
                    padding: 0;
                    text-align: center;
                }

                .menu-item {
                    padding: 0.6rem;
                    font-size: 0.8rem;
                }

                .menu-item-dropdown a {
                    text-align: left;
                    padding: 0.6rem 0.9rem;
                    font-size: 0.6rem;
                }

            </style>

            <header>
                <h1 class="title"><a href="index.html">Dustin&apos;s Kitchen</a></h1>
                <nav>
                    <ul class="menu">
                        <li class="menu-item"><a href="index.html#apps">Appetizers</a>
                            <i class="dropdown-arrow"></i>
                            <ul class="menu-item-list">
                                <li class="menu-item-dropdown"><a href="salsa.html">Salsa</a></li>
                                <li class="menu-item-dropdown"><a href="bruschetta.html">Classic Tomato Bruschetta</a></li>
                                <li class="menu-item-dropdown"><a href="wings.html">Smoked Hot Wings</a></li>
                            </ul>
                        </li>
                        <li class="menu-item"><a href="index.html#mains">Main Courses</a>
                            <i class="dropdown-arrow"></i>
                            <ul class="menu-item-list">
                                <li class="menu-item-dropdown"><a href="chili.html">Hearty Three Meat Chili</a></li>
                                <li class="menu-item-dropdown"><a href="ribs.html">Grilled Ribs</a></li>
                                <li class="menu-item-dropdown"><a href="steak.html">Reverse Seared Steak</a></li>
                            </ul>
                        </li>
                        <li class="menu-item"><a href="index.html#sides">Side Dishes</a>
                            <i class="dropdown-arrow"></i>
                            <ul class="menu-item-list">
                                <li class="menu-item-dropdown"><a href="parfait.html">Fruit and Yogurt Parfait</a></li>
                                <li class="menu-item-dropdown"><a href="potatoes.html">Twice Baked Potatoes</a></li>
                                <li class="menu-item-dropdown"><a href="caprese.html">Caprese Salad</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('header-script', Header);