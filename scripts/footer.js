class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
                <style>
                    .footer-contents {
                        margin-top: 4rem;
                        padding: 3.1rem;
                        border-top: 1px solid #161a1d;
                    }

                    .food-temp-chart a {
                        margin-left: 4rem;
                        padding: 1rem;
                        text-decoration: none;
                        border-radius: 1rem;
                        font-size: 1.1rem;
                        font-weight: 500;
                        background-color: #d3d3d3;
                        color: #161a1d;
                    }

                    .food-temp-chart:hover a {
                        background-color: #161a1d;
                        color: #b1a7a6;
                    }

                    .nametag {
                        float: right;
                    }
                
                    @media screen and (max-width: 623px) {
                        .footer-contents {
                            text-align: center;
                            padding: 3.1rem 0 0;
                        }

                        .food-temp-chart {
                            margin: 1rem;
                        }

                        .food-temp-chart a {
                            margin: 1rem;
                        }

                        .nametag {
                            float: none;
                            margin-top: 5rem;
                        }
                    }
                </style>

                <footer>
                    <div class="footer-contents">
                        <div class="food-temp-chart">
                            <a href="foodtemps.html">Food Temperature Chart</a>
                        </div>
                        <div class="nametag">
                            <p>&copy 2024 Jami Vaughn</p>
                        </div>
                    </div>
                </footer>    
            `;
        }
    }

customElements.define('footer-script', Footer);