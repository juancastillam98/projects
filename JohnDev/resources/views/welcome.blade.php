<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{asset('css/styles.css')}}">
    <link rel="stylesheet" href="{{asset('js/app.js')}}">
    <!--     scrll reveal -->
    <script src="https://unpkg.com/scrollreveal"></script>
    <title>Portfolio</title>
</head>

<body>

    <!--Header design-->
    <header class="header">
        <a href="#" class="logo">Portfolio</a>
        <!--Hamburger svg-->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" id="menu-svg">
            <path fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd" />
        </svg>
        <!--Close svg-->
        <svg id="close-menu-svg" width="64px" height="64px" viewBox="0 0 16 16"
            xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#"
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" version="1.1"
            id="svg8" fill="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <metadata id="metadata5">
                    <rdf:rdf>
                        <cc:work>
                            <dc:format>image/svg+xml</dc:format>
                            <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type>
                            <dc:title></dc:title>
                            <dc:date>2021</dc:date>
                            <dc:creator>
                                <cc:agent>
                                    <dc:title>Timothée Giet</dc:title>
                                </cc:agent>
                            </dc:creator>
                            <cc:license rdf:resource="http://creativecommons.org/licenses/by-sa/4.0/"></cc:license>
                        </cc:work>
                        <cc:license rdf:about="http://creativecommons.org/licenses/by-sa/4.0/">
                            <cc:permits rdf:resource="http://creativecommons.org/ns#Reproduction"></cc:permits>
                            <cc:permits rdf:resource="http://creativecommons.org/ns#Distribution"></cc:permits>
                            <cc:requires rdf:resource="http://creativecommons.org/ns#Notice"></cc:requires>
                            <cc:requires rdf:resource="http://creativecommons.org/ns#Attribution"></cc:requires>
                            <cc:permits rdf:resource="http://creativecommons.org/ns#DerivativeWorks"></cc:permits>
                            <cc:requires rdf:resource="http://creativecommons.org/ns#ShareAlike"></cc:requires>
                        </cc:license>
                    </rdf:rdf>
                </metadata>
                <rect transform="rotate(45)" ry="0" y="-1" x="4.3137083" height="2" width="14" id="rect1006"
                    style="opacity:1;vector-effect:none;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:4;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:3.20000005;stroke-opacity:1">
                </rect>
                <rect transform="rotate(-45)" ry="0" y="10.313708" x="-7" height="2" width="14" id="rect1006-5"
                    style="opacity:1;vector-effect:none;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:4;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:3.20000005;stroke-opacity:1">
                </rect>
            </g>
        </svg>

        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    <!--home section design-->
    <section class="home" id="home">
        <div class="home-content">
            <h3>Hello, It's Me</h3>
            <h1>Juan Castilla</h1>
            <h3>And I'm a <span class="multiple-text"></span></h3>
            <p>With +3 years of experience in website development, my focus is on exceeding client expectations by deliveringcreative and high-quality solutions. I am an entrepreneur, constantly seeking growth and self-improvement. I am ready to contribute my experience and passion to the team.</p>
            <!--TODO: poner enlace whatsapp-->
            <div class="social-media">
                <a href="#">
                    <svg id ="svg-linkedin" width="64px" height="64px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>linkedin [#8956f1]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -7479.000000)" fill="#8956f1"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" id="linkedin-[#8956f1]"> </path> </g> </g> </g> </g>
                    </svg>
                </a>
                <a href="#">
                    <svg width="64px" height="64px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>instagram [#167]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)" fill="#8956f1"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#167]"> </path> </g> </g> </g> </g>
                    </svg>
                </a>
            </div>
            <a href="/download-cv" class="btn">Download CV</a>
        </div>
        <div class="home-img">
            <img src="{{asset('storage/images/foto_perfil_1.avif')}}" alt="">
        </div>
    </section>
    <!--about section design-->
    <section class="about" id="about">
        <div class="about-img">
            <img src="{{asset('storage/images/foto_perfil_1.avif')}}" alt="Juan Castilla">
        </div>
        <div class="about-content">
            <h2 class="heading">About <span>Me</span></h2>
            <h3>Fullstack Developer</h3>
            <p>I am Juan Castilla Mariscal, a passionate web developer with a persistent attitude and a strong commitment to achieving my goals. I strive constantly to overcome challenges and excel in my career. My current objective is to become a full-stack web development professional specializing in Laravel and React.js. </p>
            <p>With previous experience as a Freelance web developer in WordPress, I have created highly functional and attractive websites. However, my focus goes beyond just developing websites. I also have a passion for analyzing websites for improvements, adding functionality, and providing a critical business perspective. </p> 
           <p> My goal is to offer the best possible solution to my clients, actively involving myself in their business and offering ideas that drive their growth and success. I maintain a spirit of continuous learning to stay updated with the latest technologies and trends in the web development field, enabling me to deliver innovative and effective solutions. </p>
            <p>I am excited to explore new job opportunities that allow me to further develop my skills and contribute to the success of challenging projects.</p>
            <a href="#" class="btn">Read More</a>
        </div>
    </section>
    <!--Services section design-->
    <section class="services" id="services">
        <h2 class="heading">Our <span>Services</span></h2>
        <div class="services-container">
            <div class="services-box">
                <svg width="64px" height="64px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#8956f1">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>code</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="icon" fill="#8956f1" transform="translate(37.333333, 128.141872)"> <path d="M111.084954,16.7215774 L141.254831,46.8914721 L60.356556,127.806522 L141.254831,208.721577 L111.084954,238.891472 L7.10542736e-15,127.806522 L111.084954,16.7215774 Z M326.063211,16.758697 L295.893333,46.9285921 L376.791607,127.843642 L295.893333,208.758697 L326.063211,238.928592 L437.148163,127.843642 L326.063211,16.758697 Z M231.145356,3.69482223e-12 L272.358192,11.0429459 L206.100516,258.319957 L164.887681,247.277012 L231.145356,3.69482223e-12 Z" id="Combined-Shape"> </path> </g> </g> </g>
                </svg>
                <h3>Web Devlopment</h3>
                <p>I am a full stack web developer specializing in Laravel for the backend and experience in JavaScript and HTML for the frontend. I am constantly updating myself on the latest technologies and web development trends to provide innovative results.</p>
                <a href="#" class="btn"> Read More</a>
            </div>
            <div class="services-box">
                <svg fill="#8956f1" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.996 511.996" xml:space="preserve">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M244.606,137.494c-26.153,0-47.432,21.278-47.432,47.431c0,26.153,21.278,47.432,47.432,47.432 c26.154,0,47.431-21.278,47.431-47.432C292.036,158.77,270.759,137.494,244.606,137.494z M244.606,214.877 c-16.515,0-29.953-13.437-29.953-29.953c0-16.516,13.437-29.952,29.953-29.952c16.515,0,29.952,13.437,29.952,29.952 C274.557,201.44,261.12,214.877,244.606,214.877z"></path> </g> </g> <g> <g> <path d="M452.072,123.043c-17.141,0-31.087,13.946-31.087,31.087c0,17.141,13.946,31.087,31.087,31.087 s31.087-13.946,31.087-31.087C483.158,136.989,469.212,123.043,452.072,123.043z M452.072,167.738 c-7.503,0-13.608-6.105-13.608-13.608s6.104-13.608,13.608-13.608s13.608,6.105,13.608,13.608 C465.679,161.634,459.575,167.738,452.072,167.738z"></path> </g> </g> <g> <g> <path d="M476.794,39.399l-127.09-0.005c-19.411,0-35.203,15.797-35.203,35.214v40.122h-52.404c-0.012,0-0.022-0.001-0.034-0.001 H71.242c-0.022,0-0.044,0.001-0.068,0.001H37.35C16.755,114.73,0,131.486,0,152.08v224.414c0,20.595,16.755,37.35,37.35,37.35 h133.817l-11.799,47.928c-0.01,0.041-0.014,0.083-0.023,0.124c-0.048,0.21-0.086,0.423-0.119,0.639 c-0.016,0.104-0.035,0.207-0.048,0.312c-0.024,0.207-0.035,0.418-0.044,0.632c-0.005,0.107-0.015,0.216-0.016,0.324 c0,0.021-0.003,0.041-0.003,0.061c0,0.261,0.016,0.519,0.038,0.774c0.003,0.033,0.001,0.066,0.005,0.099 c0.031,0.32,0.083,0.636,0.148,0.946c0.008,0.04,0.021,0.078,0.03,0.119c0.061,0.267,0.132,0.53,0.216,0.787 c0.024,0.073,0.054,0.146,0.08,0.219c0.079,0.22,0.164,0.437,0.26,0.649c0.04,0.087,0.083,0.174,0.126,0.26 c0.096,0.193,0.197,0.383,0.305,0.568c0.054,0.091,0.107,0.181,0.164,0.27c0.114,0.179,0.237,0.352,0.364,0.522 c0.043,0.058,0.079,0.121,0.125,0.179c0.02,0.024,0.043,0.047,0.063,0.071c0.154,0.192,0.317,0.374,0.486,0.552 c0.045,0.048,0.086,0.099,0.133,0.146c0.217,0.218,0.444,0.423,0.683,0.616c0.063,0.051,0.129,0.096,0.193,0.146 c0.182,0.14,0.367,0.275,0.559,0.401c0.083,0.054,0.169,0.103,0.254,0.154c0.183,0.111,0.369,0.217,0.562,0.313 c0.089,0.045,0.178,0.087,0.268,0.129c0.197,0.092,0.396,0.175,0.601,0.252c0.09,0.034,0.179,0.068,0.269,0.099 c0.212,0.072,0.428,0.133,0.646,0.189c0.089,0.023,0.175,0.049,0.263,0.068c0.231,0.051,0.465,0.09,0.703,0.121 c0.079,0.01,0.157,0.027,0.238,0.036c0.315,0.034,0.634,0.055,0.957,0.055h105.359h69.171c4.828,0,8.74-3.913,8.74-8.74 c0-4.826-3.912-8.739-8.74-8.739h-58.021l10.161-41.278l152.849-0.005c18.427,0,33.42-14.986,33.42-33.408v-75.6 c17.535-1.994,31.204-16.913,31.204-34.972V74.605C512,55.191,496.206,39.399,476.794,39.399z M359.942,74.605 c0-9.774,7.952-17.726,17.727-17.726h99.125c9.775-0.001,17.727,7.951,17.727,17.726v10.303H359.942V74.605z M359.941,102.385 H494.52v138.593h-4.179l-43.979-48.396c-1.657-1.822-4.006-2.862-6.468-2.862s-4.811,1.039-6.468,2.862l-12.486,13.738 l-31.006-34.107c-1.656-1.821-4.005-2.861-6.467-2.861c-2.461,0-4.81,1.039-6.466,2.862l-17.059,18.768V102.385z M466.723,240.978 h-14.276l-19.695-21.664l7.142-7.859L466.723,240.978z M359.943,216.271l0.347,0.315l23.179-25.501l45.358,49.893h-68.884V216.271 z M331.98,74.609c0-8.911,6.609-16.288,15.175-17.53c-2.978,5.166-4.693,11.147-4.693,17.527V269.86 c0,6.375,1.712,12.355,4.688,17.518c-8.564-1.245-15.171-8.615-15.171-17.518V74.609z M55.301,311.432l70.306-72.26 l93.467,102.804H55.301V311.432z M202.523,297.776l20.999-23.107l61.163,67.305h-41.991v0.001L202.523,297.776z M41.875,396.364 H37.35c-10.957,0.001-19.871-8.913-19.871-19.87V152.08c0-10.957,8.914-19.871,19.871-19.871h4.525 c-2.583,4.74-4.053,10.172-4.053,15.938V380.43C37.822,386.196,39.291,391.625,41.875,396.364z M266.364,455.122h-87.358 l10.161-41.278h87.358L266.364,455.122z M463.317,380.432c0,8.783-7.151,15.929-15.941,15.929H71.242 c-8.79,0-15.941-7.145-15.941-15.929v-20.977h408.016V380.432z M463.317,341.976H308.303l-78.312-86.178 c-1.657-1.822-4.005-2.862-6.468-2.862c-2.462,0-4.811,1.039-6.467,2.862l-26.344,28.987l-58.423-64.245 c-1.622-1.783-3.908-2.818-6.318-2.858c-2.434-0.008-4.731,0.916-6.411,2.644l-64.258,66.043V148.148 c0-8.778,7.133-15.92,15.907-15.938h243.293V269.86c0,19.41,15.792,35.202,35.203,35.202l113.613,0.003V341.976z M494.521,269.859 c0,9.775-7.952,17.727-17.727,17.727l-99.193-0.003c-9.744-0.037-17.66-7.972-17.66-17.724v-11.402h134.579V269.859z"></path> </g> </g> </g>
                </svg>
                <h3>Web Design</h3>
                <p>I am a creative and passionate web designer with experience in creating attractive and functional visual interfaces. My approach is focused on understanding the client's needs and objectives in order to design solutions that effectively convey their brand identity. My goal is to provide visually stunning designs that improve usability and user satisfaction.</p>
                <a href="#" class="btn"> Read More</a>
            </div>
            <div class="services-box">
                <svg fill="#8956f1" height="64px" width="64px" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0">
                    </g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M23.4,13.3C23,13.1,22.4,13,22,13.2l-1,0.4v-12C21,0.7,20.3,0,19.5,0h-2C16.7,0,16,0.7,16,1.5V3h-2.5C12.7,3,12,3.7,12,4.5 V8H9.5C8.7,8,8,8.7,8,9.5v5.2l-3,0.7v-0.3c0-0.6-0.3-1.1-0.8-1.3L3,13.2C2.8,12.5,2.2,12,1.5,12h-1C0.2,12,0,12.2,0,12.5v11 C0,23.8,0.2,24,0.5,24h1c0.7,0,1.3-0.5,1.5-1.2l1.2-0.6C4.6,22,4.9,21.5,5,21l4.8,2.8c0.2,0.1,0.5,0.2,0.8,0.2 c0.2,0,0.5-0.1,0.7-0.2l12-6.4c0.5-0.3,0.8-0.8,0.8-1.3v-1.5C24,14.1,23.8,13.6,23.4,13.3z M2,22.5C2,22.8,1.8,23,1.5,23H1V13h0.5 C1.8,13,2,13.2,2,13.5V22.5z M4,20.9c0,0.2-0.1,0.4-0.3,0.4L3,21.7v-7.4l0.7,0.4C3.9,14.8,4,14.9,4,15.1V20.9z M17,1.5 C17,1.2,17.2,1,17.5,1h2C19.8,1,20,1.2,20,1.5v12.4L17,15V1.5z M13,4.5C13,4.2,13.2,4,13.5,4H16v11.4l-1.4,0.5l-0.3-1.1 c-0.2-0.6-0.7-1-1.2-1.1V4.5z M9,9.5C9,9.2,9.2,9,9.5,9H12v4.8l-3,0.7V9.5z M23,16c0,0.2-0.1,0.4-0.3,0.4l-12,6.5 c-0.1,0.1-0.3,0.1-0.5,0L5,19.9v-3.5l7.7-1.7c0.3-0.1,0.5,0.1,0.6,0.4l0.5,1.6c0,0.1,0,0.3,0,0.4c-0.1,0.1-0.2,0.2-0.3,0.2l-3,0.7 c-0.3,0.1-0.4,0.3-0.4,0.6c0.1,0.2,0.3,0.4,0.5,0.4c0,0,0.1,0,0.1,0l3-0.7c0.4-0.1,0.7-0.4,0.9-0.7c0.1-0.2,0.2-0.4,0.2-0.6l7.6-2.8 c0.2-0.1,0.3,0,0.5,0.1c0.1,0.1,0.2,0.2,0.2,0.4V16z"></path> </g>
                </svg>
                <h3>Digital Marketing</h3>
                <p>As a freelancer, I offer my services as a web developer and SEO expert. I use my knowledge in website optimization, keyword research and link building techniques to improve organic search engine rankings. My goal is to increase online visibility and generate qualified traffic to maximize my clients' online impact and success.</p>
                <a href="#" class="btn"> Read More</a>
            </div>
        </div>
    </section>
    <!--Services section design-->
    <section class="portfolio" id="portfolio">
        <h2 class="heading">Latest <span>Project</span></h2>
        <div class="portfolio-container">
            <div class="portfolio-box">
                <img src="{{asset('storage/images/proyecto_echo.avif')}}" alt="Búsqueda de empleo ECHO">
                <div class="portfolio-layer">
                    <h4>Job finder ECHO</h4>
                    <p>The job search platform that will revolutionize your tech career! Find top opportunities 
                        and prestigious companies in the industry. Join us and take your career to new heights!</p>
                    <a href="https://proyectoecho.johndev.dev/">
                        <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" stroke="#0ef">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M7.7574 10.5858L4.92897 13.4142C3.7574 14.5858 3.7574 16.4853 4.92897 17.6569L6.34319 19.0711C7.51476 20.2427 9.41425 20.2427 10.5858 19.0711L13.4143 16.2427M9.87873 14.1214L14.1214 9.87873M10.5858 7.7574L13.4142 4.92897C14.5858 3.7574 16.4853 3.7574 17.6569 4.92897L19.0711 6.34319C20.2427 7.51476 20.2427 9.41425 19.0711 10.5858L16.2427 13.4143"
                                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
{{--       <div class="portfolio-box">
                <img src="{{asset('storage/images/proyecto_echo.avif')}}" alt="Búsqueda de empleo ECHO">
                <div class="portfolio-layer">
                    <h4>Web desing ECHO</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui atque sunt praesentium vel amet
                        saepe, earum est cupiditate, quod maxime excepturi enim magni itaque ad autem, expedita ducimus
                        vero molestiae?</p>
                    <a href="#">
                        <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" stroke="#0ef">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M7.7574 10.5858L4.92897 13.4142C3.7574 14.5858 3.7574 16.4853 4.92897 17.6569L6.34319 19.0711C7.51476 20.2427 9.41425 20.2427 10.5858 19.0711L13.4143 16.2427M9.87873 14.1214L14.1214 9.87873M10.5858 7.7574L13.4142 4.92897C14.5858 3.7574 16.4853 3.7574 17.6569 4.92897L19.0711 6.34319C20.2427 7.51476 20.2427 9.41425 19.0711 10.5858L16.2427 13.4143"
                                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="portfolio-box">
                <img src="{{asset('storage/images/proyecto_echo.avif')}}" alt="Búsqueda de empleo ECHO">
                <div class="portfolio-layer">
                    <h4>Web desing ECHO</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui atque sunt praesentium vel amet
                        saepe, earum est cupiditate, quod maxime excepturi enim magni itaque ad autem, expedita ducimus
                        vero molestiae?</p>
                    <a href="#">
                        <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" stroke="#0ef">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M7.7574 10.5858L4.92897 13.4142C3.7574 14.5858 3.7574 16.4853 4.92897 17.6569L6.34319 19.0711C7.51476 20.2427 9.41425 20.2427 10.5858 19.0711L13.4143 16.2427M9.87873 14.1214L14.1214 9.87873M10.5858 7.7574L13.4142 4.92897C14.5858 3.7574 16.4853 3.7574 17.6569 4.92897L19.0711 6.34319C20.2427 7.51476 20.2427 9.41425 19.0711 10.5858L16.2427 13.4143"
                                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </g>
                        </svg>
                    </a>
                </div>
            </div> --}}
        </div>
    </section>
    <!--contact section design-->
    <section class="contact" id="contact">
        <h2 class="heading">Contact <span>Me!</span></h2>
        <form action="{{ route('sendMail') }}" method="POST">
            @csrf
            <div class="input-box">
                <input type="text" name="name" placeholder="Full Name">
                <input type="email" name="email" placeholder="Email Address">
            </div>
            <div class="input-box">
                <input type="text" name="phone" placeholder="phone Number">
                <input type="text" name="subject" placeholder="Email Subject">
            </div>
            <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message" class="btn">
        </form>
    </section>

    <!--footer design -->
    <footer class="footer">
        <div class="footer-text">
            <p>Copyright &copy; 2023 by Juan Castilla | All Rights Reserved.</p>
        </div>
        <div class="footer-svgTop">
            <a href="#home">
                <svg fill="#323946" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 8 8"
                    enable-background="new 0 0 8 8" xml:space="preserve">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <rect x="0.016" y="1.68" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 6.2428 2.2389)"
                            width="5.283" height="1.466"></rect>
                        <rect x="3.161" y="1.604" width="1.683" height="6.375"></rect>
                        <rect x="2.709" y="1.674" transform="matrix(0.7073 0.7069 -0.7069 0.7073 3.2674 -3.0786)"
                            width="5.284" height="1.465"></rect>
                    </g>
                </svg>
            </a>
        </div>
    </footer>


    <!-- typed js-->
    <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>

    <script src="./js/app.js"></script>


</body>

</html>