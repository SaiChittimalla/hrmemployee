<template>
    <NavPage />
    <div class=" container-fluid ">
        <div class="row">
            <div class="col-lg-2 col-md-2 col-sm-12 ">
                <div class="side-bar">

                    <SidebarPage />
                </div>
            </div>
            <div class="col-lg-10 col-md-10 col-sm-12">

                <div class="row justify-content-between  search-main ">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class=" row mt-2 ">
                            <div class="col-lg-1 col-md-1 col-sm-1 ">
                                <div class=" d-flex gap-2  ">
                                    <span @click="navigateBack"><i
                                            class="bi bi-caret-left-square icons-prev-nxt"></i></span>
                                    <span @click="navigateForward"><i
                                            class="bi bi-caret-right-square icons-prev-nxt"></i></span>
                                </div>
                            </div>
                            <div class="col-lg-5 col-md-5 col-sm-5 ">
                                <p class="tab-name">Employee Attendance</p>
                            </div>
                            <div class="col-lg-5 col-md-5 col-sm-5">
                                <div class="search-tag d-flex ">
                                    <span class="ms-3"><i class="bi bi-search icon-search"></i></span>
                                    <input type="search" class="form-control border-0 search " name="search" id="search"
                                        v-model="searchQuery" aria-describedby="helpId" placeholder=" Search Employee">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 bg-white ">
                        <div class=" row mt-2 justify-content-end  ">

                            <div v-if="showDiv" class=" col-lg-5 col-md-5 col-sm-2">
                                <div class=" row  justify-content-end ">
                                    <div class="col-lg-6 col-md-0 col-sm-0"></div>
                                    <div class="col-lg-6 col-md-12 col-sm-12">
                                        <div class="row justify-content-end  ">
                                            <div class="col-lg-6 col-md-6 col-sm-2 ">
                                                <div>
                                                    <button type="button" class="btn-lg btn-white  import">Import</button>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-2">
                                                <div>
                                                    <button type="button" class="btn-lg btn-white d-flex Filter  "><span><i
                                                                class="ri-filter-3-line"></i></span>Filter</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div v-if="!showDiv" class="col-lg-6 col-md-6 col-sm-2">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div>
                                            <select class="form-select designation  " name="" id="">
                                                <option class="designation-options" selected>Web Designer </option>
                                                <option class="designation-options" value="Web Designer">Web Designer
                                                </option>
                                                <option class="designation-options" value="Web Designer">Web Designer
                                                </option>
                                                <option class="designation-options" value="Web Designer">Web Designer
                                                </option>
                                            </select>

                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div>
                                            <select v-model="selectedMonth" @change="updateCalendar"
                                                class="calendar form-select">
                                                <option v-for="(month, index) in months" :key="index" :value="index + 1">
                                                    {{ month }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class=" col-lg-2 col-md-5 col-sm-12">
                                <div class="  ">
                                    <button type="button" class="btn-lg btn-white AddEmployee" data-bs-toggle="modal"
                                        title="Add Employee" data-placement="auto" data-toggle="popover"
                                        data-trigger="hover" data-bs-target="#staticBackdrop">Add</button>
                                </div>
                            </div>
                            <div class=" col-lg-2 col-md-2 col-sm-6">
                                <div class="  icons-div  ">
                                    <button v-if="showDiv" type="button" class="span-calendar-icon btn btn-white "
                                        @click="employeeCalendartype('calendar')"><i
                                            class="ri-calendar-event-fill calendar-icon "></i></button>
                                    <button v-if="!showDiv" type="button" class="span-calendar-icon-cal btn btn-white "
                                        @click="employeeCalendartype('calendar')"><i
                                            class="ri-calendar-event-fill calendar-icon-two "></i></button>
                                    <button v-if="showDiv" type="button " class="btn btn-white border-0 span-list-icon "
                                        @click="employeeCalendartype('list')"><i
                                            class="ri-list-check list-icon p-1 "></i></button>
                                    <button v-if="!showDiv" type="button "
                                        class="btn btn-white border-0 span-list-icon-two "
                                        @click="employeeCalendartype('list')"><i
                                            class="ri-list-check list-icon-two p-1 "></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-total">
                    <div id="carouselExample" class="carousel slide" data-bs-interval="false">
                        <div class="carousel-inner">
                            <div class="carousel-item  active ms-4 mt-1   ">
                                <div class="  row">
                                    <div class="card col-lg-2 col-md-2 col-sm-2">
                                        <div class="card-body">
                                            <div class=" d-flex justify-content-around  ">
                                                <div>
                                                    <h5 class="count">420</h5>
                                                    <p for="Employees" class="employess-label">Total
                                                        Employees</p>
                                                </div>
                                                <div class=" d-flex  align-items-center ">
                                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                            viewBox="0 0 32 32" fill="none">
                                                            <g clip-path="url(#clip0_292_615)">
                                                                <path
                                                                    d="M10.6671 14.3466H9.89373C8.8384 14.3085 7.7865 14.4877 6.80329 14.873C5.82009 15.2583 4.92657 15.8416 4.17818 16.5866L3.96484 16.8355V24.1955H7.59151V20.0178L8.0804 19.4666L8.30262 19.2089C9.45989 18.02 10.9006 17.1451 12.4893 16.6666C11.6939 16.0614 11.0666 15.2628 10.6671 14.3466Z"
                                                                    fill="#365EFF" />
                                                                <path
                                                                    d="M27.8587 16.56C27.1103 15.8149 26.2168 15.2316 25.2336 14.8463C24.2504 14.461 23.1985 14.2818 22.1432 14.32C21.8195 14.3209 21.4961 14.3387 21.1743 14.3733C20.7672 15.2328 20.1571 15.9802 19.3965 16.5511C21.0925 17.0203 22.6288 17.9421 23.8409 19.2177L24.0632 19.4666L24.5432 20.0177V24.2044H28.0454V16.8089L27.8587 16.56Z"
                                                                    fill="#365EFF" />
                                                                <path
                                                                    d="M9.8659 12.6134H10.1415C10.0134 11.514 10.2063 10.4011 10.6969 9.409C11.1874 8.41688 11.9546 7.58794 12.9059 7.02225C12.5611 6.49545 12.0853 6.06724 11.5253 5.77954C10.9652 5.49184 10.3401 5.35452 9.711 5.38103C9.08193 5.40754 8.47054 5.59697 7.93668 5.93077C7.40281 6.26456 6.96479 6.73128 6.66551 7.28523C6.36622 7.83917 6.21592 8.46135 6.22934 9.09083C6.24276 9.72031 6.41942 10.3355 6.74204 10.8762C7.06466 11.4169 7.52217 11.8645 8.06977 12.1753C8.61736 12.486 9.23628 12.6492 9.8659 12.6489V12.6134Z"
                                                                    fill="#365EFF" />
                                                                <path
                                                                    d="M21.7151 11.9467C21.7259 12.151 21.7259 12.3557 21.7151 12.56C21.8857 12.5871 22.058 12.6019 22.2307 12.6045H22.3995C23.0264 12.571 23.6339 12.3759 24.163 12.0379C24.692 11.7 25.1245 11.2309 25.4184 10.6762C25.7123 10.1215 25.8576 9.50016 25.8401 8.87266C25.8226 8.24516 25.6429 7.63288 25.3185 7.09544C24.9941 6.55799 24.5361 6.1137 23.9891 5.80581C23.442 5.49792 22.8246 5.33693 22.1968 5.33851C21.5691 5.34009 20.9524 5.50419 20.4069 5.81482C19.8614 6.12546 19.4057 6.57205 19.084 7.11112C19.8885 7.6364 20.55 8.35317 21.0093 9.19714C21.4685 10.0411 21.711 10.9859 21.7151 11.9467Z"
                                                                    fill="#365EFF" />
                                                                <path
                                                                    d="M15.8835 15.9289C18.0779 15.9289 19.8568 14.15 19.8568 11.9556C19.8568 9.76116 18.0779 7.98224 15.8835 7.98224C13.6891 7.98224 11.9102 9.76116 11.9102 11.9556C11.9102 14.15 13.6891 15.9289 15.8835 15.9289Z"
                                                                    fill="#365EFF" />
                                                                <path
                                                                    d="M16.0969 18.0445C14.9361 17.9976 13.7777 18.1861 12.6916 18.5985C11.6055 19.011 10.614 19.6389 9.77691 20.4445L9.55469 20.6934V26.32C9.55816 26.5033 9.5977 26.6841 9.67106 26.8521C9.74441 27.0201 9.85015 27.172 9.98222 27.2991C10.1143 27.4262 10.2701 27.5261 10.4408 27.593C10.6115 27.6598 10.7936 27.6924 10.9769 27.6889H21.1902C21.3735 27.6924 21.5557 27.6598 21.7264 27.593C21.897 27.5261 22.0529 27.4262 22.1849 27.2991C22.317 27.172 22.4227 27.0201 22.4961 26.8521C22.5695 26.6841 22.609 26.5033 22.6125 26.32V20.7111L22.3991 20.4445C21.5674 19.6364 20.5794 19.0067 19.4957 18.594C18.412 18.1813 17.2554 17.9943 16.0969 18.0445Z"
                                                                    fill="#365EFF" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_292_615">
                                                                    <rect width="32" height="32" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card col-lg-2 col-md-2 col-sm-2">
                                        <div class="card-body">
                                            <div class=" d-flex justify-content-around  ">
                                                <div>
                                                    <h5 class="count">230</h5>
                                                    <p for="Employees" class="employess-label">In time</p>
                                                </div>
                                                <div class=" d-flex  align-items-center ">
                                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                            viewBox="0 0 32 32" fill="none">
                                                            <path
                                                                d="M26.6673 16C26.6673 15.6464 26.5268 15.3073 26.2768 15.0572C26.0267 14.8072 25.6876 14.6667 25.334 14.6667H15.214L18.2807 11.6134C18.405 11.489 18.5036 11.3414 18.5709 11.179C18.6381 11.0166 18.6728 10.8425 18.6728 10.6667C18.6728 10.4909 18.6381 10.3168 18.5709 10.1544C18.5036 9.99192 18.405 9.84434 18.2807 9.72002C18.1563 9.5957 18.0087 9.49709 17.8463 9.42981C17.6839 9.36253 17.5098 9.3279 17.334 9.3279C17.1582 9.3279 16.9841 9.36253 16.8217 9.42981C16.6592 9.49709 16.5116 9.5957 16.3873 9.72002L11.054 15.0534C10.9326 15.1802 10.8374 15.3297 10.774 15.4934C10.6406 15.818 10.6406 16.1821 10.774 16.5067C10.8374 16.6704 10.9326 16.8199 11.054 16.9467L16.3873 22.28C16.5113 22.405 16.6587 22.5042 16.8212 22.5719C16.9837 22.6396 17.158 22.6744 17.334 22.6744C17.51 22.6744 17.6843 22.6396 17.8468 22.5719C18.0092 22.5042 18.1567 22.405 18.2807 22.28C18.4056 22.1561 18.5048 22.0086 18.5725 21.8461C18.6402 21.6836 18.675 21.5094 18.675 21.3334C18.675 21.1573 18.6402 20.9831 18.5725 20.8206C18.5048 20.6581 18.4056 20.5106 18.2807 20.3867L15.214 17.3334H25.334C25.6876 17.3334 26.0267 17.1929 26.2768 16.9428C26.5268 16.6928 26.6673 16.3536 26.6673 16ZM22.6673 2.66669H9.33398C8.27312 2.66669 7.2557 3.08811 6.50556 3.83826C5.75541 4.58841 5.33398 5.60582 5.33398 6.66669V25.3334C5.33398 26.3942 5.75541 27.4116 6.50556 28.1618C7.2557 28.9119 8.27312 29.3334 9.33398 29.3334H22.6673C23.7282 29.3334 24.7456 28.9119 25.4957 28.1618C26.2459 27.4116 26.6673 26.3942 26.6673 25.3334V21.3334C26.6673 20.9797 26.5268 20.6406 26.2768 20.3905C26.0267 20.1405 25.6876 20 25.334 20C24.9804 20 24.6412 20.1405 24.3912 20.3905C24.1411 20.6406 24.0007 20.9797 24.0007 21.3334V25.3334C24.0007 25.687 23.8602 26.0261 23.6101 26.2762C23.3601 26.5262 23.0209 26.6667 22.6673 26.6667H9.33398C8.98036 26.6667 8.64122 26.5262 8.39118 26.2762C8.14113 26.0261 8.00065 25.687 8.00065 25.3334V6.66669C8.00065 6.31306 8.14113 5.97393 8.39118 5.72388C8.64122 5.47383 8.98036 5.33335 9.33398 5.33335H22.6673C23.0209 5.33335 23.3601 5.47383 23.6101 5.72388C23.8602 5.97393 24.0007 6.31306 24.0007 6.66669V10.6667C24.0007 11.0203 24.1411 11.3594 24.3912 11.6095C24.6412 11.8595 24.9804 12 25.334 12C25.6876 12 26.0267 11.8595 26.2768 11.6095C26.5268 11.3594 26.6673 11.0203 26.6673 10.6667V6.66669C26.6673 5.60582 26.2459 4.58841 25.4957 3.83826C24.7456 3.08811 23.7282 2.66669 22.6673 2.66669Z"
                                                                fill="#10E20B" />
                                                        </svg></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card col-lg-2 col-md-2 col-sm-2">
                                        <div class="card-body">
                                            <div class=" d-flex justify-content-around  ">
                                                <div>
                                                    <h5 class="count">104</h5>
                                                    <p for="Employees" class="employess-label">Late Entry</p>
                                                </div>
                                                <div class=" d-flex  align-items-center ">
                                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                            viewBox="0 0 32 32" fill="none">
                                                            <path
                                                                d="M26.6673 16C26.6673 15.6464 26.5268 15.3073 26.2768 15.0572C26.0267 14.8072 25.6876 14.6667 25.334 14.6667H15.214L18.2807 11.6134C18.405 11.489 18.5036 11.3414 18.5709 11.179C18.6381 11.0166 18.6728 10.8425 18.6728 10.6667C18.6728 10.4909 18.6381 10.3168 18.5709 10.1544C18.5036 9.99193 18.405 9.84434 18.2807 9.72002C18.1563 9.5957 18.0087 9.49709 17.8463 9.42981C17.6839 9.36253 17.5098 9.3279 17.334 9.3279C17.1582 9.3279 16.9841 9.36253 16.8217 9.42981C16.6592 9.49709 16.5116 9.5957 16.3873 9.72002L11.054 15.0534C10.9326 15.1802 10.8374 15.3297 10.774 15.4934C10.6406 15.818 10.6406 16.1821 10.774 16.5067C10.8374 16.6704 10.9326 16.8199 11.054 16.9467L16.3873 22.28C16.5113 22.405 16.6587 22.5042 16.8212 22.5719C16.9837 22.6396 17.158 22.6744 17.334 22.6744C17.51 22.6744 17.6843 22.6396 17.8468 22.5719C18.0092 22.5042 18.1567 22.405 18.2807 22.28C18.4056 22.1561 18.5048 22.0086 18.5725 21.8461C18.6402 21.6836 18.675 21.5094 18.675 21.3334C18.675 21.1573 18.6402 20.9831 18.5725 20.8206C18.5048 20.6581 18.4056 20.5106 18.2807 20.3867L15.214 17.3334H25.334C25.6876 17.3334 26.0267 17.1929 26.2768 16.9428C26.5268 16.6928 26.6673 16.3536 26.6673 16ZM22.6673 2.66669H9.33398C8.27312 2.66669 7.2557 3.08811 6.50556 3.83826C5.75541 4.58841 5.33398 5.60582 5.33398 6.66669V25.3334C5.33398 26.3942 5.75541 27.4116 6.50556 28.1618C7.2557 28.9119 8.27312 29.3334 9.33398 29.3334H22.6673C23.7282 29.3334 24.7456 28.9119 25.4957 28.1618C26.2459 27.4116 26.6673 26.3942 26.6673 25.3334V21.3334C26.6673 20.9797 26.5268 20.6406 26.2768 20.3905C26.0267 20.1405 25.6876 20 25.334 20C24.9804 20 24.6412 20.1405 24.3912 20.3905C24.1411 20.6406 24.0007 20.9797 24.0007 21.3334V25.3334C24.0007 25.687 23.8602 26.0261 23.6101 26.2762C23.3601 26.5262 23.0209 26.6667 22.6673 26.6667H9.33398C8.98036 26.6667 8.64122 26.5262 8.39118 26.2762C8.14113 26.0261 8.00065 25.687 8.00065 25.3334V6.66669C8.00065 6.31307 8.14113 5.97393 8.39118 5.72388C8.64122 5.47383 8.98036 5.33335 9.33398 5.33335H22.6673C23.0209 5.33335 23.3601 5.47383 23.6101 5.72388C23.8602 5.97393 24.0007 6.31307 24.0007 6.66669V10.6667C24.0007 11.0203 24.1411 11.3594 24.3912 11.6095C24.6412 11.8595 24.9804 12 25.334 12C25.6876 12 26.0267 11.8595 26.2768 11.6095C26.5268 11.3594 26.6673 11.0203 26.6673 10.6667V6.66669C26.6673 5.60582 26.2459 4.58841 25.4957 3.83826C24.7456 3.08811 23.7282 2.66669 22.6673 2.66669Z"
                                                                fill="#DB4617" />
                                                        </svg></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card col-lg-2 col-md-2 col-sm-2">
                                        <div class="card-body">
                                            <div class=" d-flex justify-content-around  ">
                                                <div>
                                                    <h5 class="count">80</h5>
                                                    <p for="Employees" class="employess-label">Early Exit</p>
                                                </div>
                                                <div class=" d-flex  align-items-center ">
                                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                            viewBox="0 0 32 32" fill="none">
                                                            <path
                                                                d="M24.6667 4H8.33333C7.03833 4 6 5.18667 6 6.66667V12H8.33333V6.66667H24.6667V25.3333H8.33333V20H6V25.3333C6 26.0406 6.24583 26.7189 6.68342 27.219C7.121 27.719 7.71449 28 8.33333 28H24.6667C25.2855 28 25.879 27.719 26.3166 27.219C26.7542 26.7189 27 26.0406 27 25.3333V6.66667C27 5.95942 26.7542 5.28115 26.3166 4.78105C25.879 4.28095 25.2855 4 24.6667 4ZM14.26 20.7733L15.9167 22.6667L21.75 16L15.9167 9.33333L14.26 11.2133L17.2817 14.6667H6V17.3333H17.2817L14.26 20.7733Z"
                                                                fill="#FF8D23" />
                                                        </svg></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card col-lg-2 col-md-2 col-sm-2">
                                        <div class="card-body">
                                            <div class=" d-flex justify-content-around  ">
                                                <div>
                                                    <h5 class="count">74</h5>
                                                    <p for="Employees" class="employess-label">On Leave</p>
                                                </div>
                                                <div class=" d-flex  align-items-center ">
                                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                            viewBox="0 0 32 32" fill="none">
                                                            <path
                                                                d="M15.7735 12H17.0002V13.2267L19.3335 15.56V12H21.3335V17.56L25.3335 21.56V10.6667C25.3335 9.20002 24.1335 8.00002 22.6668 8.00002H20.0002V4.00002C20.0002 3.26669 19.4002 2.66669 18.6668 2.66669H13.3335C12.6002 2.66669 12.0002 3.26669 12.0002 4.00002V8.00002H11.7735L15.7735 12ZM14.6668 5.33335H17.3335V8.00002H14.6668V5.33335ZM28.2535 28.2534L3.74685 3.74669L1.85352 5.62669L6.69352 10.4667C6.69352 10.5334 6.66685 10.6 6.66685 10.6667V25.3334C6.66685 26.8 7.86685 28 9.33352 28C9.33352 28.7334 9.93352 29.3334 10.6668 29.3334C11.4002 29.3334 12.0002 28.7334 12.0002 28H20.0002C20.0002 28.7334 20.6002 29.3334 21.3335 29.3334C22.0668 29.3334 22.6668 28.7334 22.6668 28C23.1202 28 23.5335 27.88 23.9069 27.68L26.3735 30.1467L28.2535 28.2534ZM10.6668 24V14.44L12.6668 16.44V24H10.6668ZM15.0002 24V18.7734L17.0002 20.7734V24H15.0002ZM19.3335 24V23.1067L20.2268 24H19.3335Z"
                                                                fill="#FF2323" />
                                                        </svg></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div class="carousel-item ">
                                <div class=" ms-5  row ">
                                    <div class="card col-lg-2 col-md-2 col-sm-2">
                                        <div class="card-body">
                                            <div class=" d-flex justify-content-around  ">
                                                <div>
                                                    <h5 class="count">21</h5>
                                                    <p for="Employees" class="employess-label">On Remote</p>
                                                </div>
                                                <div class=" d-flex  align-items-center ">
                                                    <span><i class="ri-team-fill user"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card col-lg-2 col-md-2 col-sm-2">
                                        <div class="card-body">
                                            <div class=" d-flex justify-content-around  ">
                                                <div>
                                                    <h5 class="count">20</h5>
                                                    <p for="Employees" class="employess-label">Total
                                                        Employees</p>
                                                </div>
                                                <div class=" d-flex  align-items-center ">
                                                    <span><i class="ri-team-fill user"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card col-lg-2 col-md-2 col-sm-2">
                                        <div class="card-body">
                                            <div class=" d-flex justify-content-around  ">
                                                <div>
                                                    <h5 class="count">20</h5>
                                                    <p for="Employees" class="employess-label">Total
                                                        Employees</p>
                                                </div>
                                                <div class=" d-flex  align-items-center ">
                                                    <span><i class="ri-team-fill user"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card col-lg-2 col-md-2 col-sm-2">
                                        <div class="card-body">
                                            <div class=" d-flex justify-content-around  ">
                                                <div>
                                                    <h5 class="count">20</h5>
                                                    <p for="Employees" class="employess-label">Total
                                                        Employees</p>
                                                </div>
                                                <div class=" d-flex  align-items-center ">
                                                    <span><i class="ri-team-fill user"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <button v-if="!show" @click="showArrow('left')" class="carousel-control-prev btn-nxt" type="button"
                            data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span aria-hidden="true"> <i class="ri-arrow-left-s-fill arrow-icon"></i></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button v-if="show" @click="showArrow('right')" class="carousel-control-next btn-nxt" type="button"
                            data-bs-target="#carouselExample" data-bs-slide="next">
                            <span aria-hidden="true"><i class="ri-arrow-right-s-fill arrow-icon "></i></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="modal fade" id="staticBackdrop" tabindex="-1" aria-labelledby="staticBackdropLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-lg  ">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Add Attendance</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                    @click="formData = {}"></button>
                            </div>
                            <div class="modal-body">
                                <form @submit.prevent="submitForm">
                                    <div class=" row  ">
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <label for="Employee" class="form-label">Employee</label>
                                            <select class="form-select form-select-lg" name="customer" id="customer"
                                                v-model="formData.employee">
                                                <option v-for=" employee  in  employeeId " :key="employee"
                                                    :value="employee">{{
                                                        employee }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="text-danger mt-2 errsize" v-if="errors.employee_name">
                                            {{ errors.employee }}
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <label for="Employee" class="form-label">Employee Names</label>
                                            <select class="form-select form-select-lg" name="customer" id="customer"
                                                v-model="formData.employee_name">
                                                <option v-for=" employee_name  in  employeeNames " :key="employee_name"
                                                    :value="employee_name">{{
                                                        employee_name }}
                                                </option>
                                            </select>

                                        </div>
                                    </div>
                                    <div class="row  ">
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <label for="attendance_date" class="form-label">Date<span
                                                    class="text-danger">*</span></label>
                                            <input type="date" class="form-control" name="attendance_date"
                                                id="attendance_date" aria-describedby="helpId" placeholder=""
                                                v-model="formData.attendance_date">
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <label for="" class="form-label">Company<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                                                placeholder=" Enter Company" v-model="formData.company">
                                        </div>
                                    </div>
                                    <div class="row">


                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <label for="status" class="form-label">Status<span
                                                    class="text-danger">*</span></label>
                                            <select class="form-select" name="" id="" v-model="formData.status">
                                                <option selected>Select one</option>
                                                <option value="Present">Present</option>
                                                <option value="Absent">Absent</option>
                                                <option value="On Leave">On Leave</option>
                                                <option value="Half Day">Half Day </option>
                                                <option value="Work From Home">Work From Home </option>

                                            </select>
                                        </div>

                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <label for="Category" class="form-label">Category<span
                                                    class="text-danger">*</span></label>

                                            <select class="form-select form-select" name="Category" id="Category"
                                                v-model="formData.leave_type">
                                                <option selected>Select one</option>
                                                <option value="Casual Leave">Casual Leave</option>
                                                <option value="Compensatory Off">Compensatory Off</option>
                                                <option value="Leave Without Pay">Leave Without Pay</option>
                                                <option value="Privilege Leave">Privilege Leave </option>
                                                <option value="Sick Leave">Sick Leave </option>

                                            </select>
                                        </div>
                                    </div>
                                    <div class=" row ">
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <label for="Category" class="form-label">Updated Time <span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" name="Category" id="Category"
                                                aria-describedby="helpId" placeholder="" v-model="formData.working_hours">
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <label for="Department" class="form-label">Department</label>
                                            <input type="text" class="form-control" name="Department" id="Department"
                                                aria-describedby="helpId" placeholder="" v-model="formData.department">
                                        </div>
                                    </div>
                                    <div class=" row ">
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <label for="Shift" class="form-label">City</label>
                                            <select class="form-select " name="Shift" id="Shift" v-model="formData.shift">
                                                <option selected>Select one</option>
                                                <option value="A shift">A shift</option>
                                                <option value="B shift">B shift</option>

                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" @click="AddEmployee">Save
                                    changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="showDiv">
                    <div class="mt-2 table-data">
                        <table class=" table w-100 table-striped table-hover  ">
                            <thead class="head text-center ">
                                <tr>
                                    <th>S.no</th>
                                    <th>Employee Name</th>
                                    <th>Date</th>
                                    <th>Updated time</th>
                                    <th>Department</th>
                                    <th>Status</th>
                                    <th>Category</th>
                                    <th>Shift</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody class="text-center ">
                                <tr v-for=" (item, index) in  filteredData " :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td>
                                        <div v-if="!item.employee_name"> <i class="ri-subtract-line"></i></div>
                                        <div v-if="item.employee_name !== ''">{{
                                            item.employee_name }}</div>
                                    </td>
                                    <td>
                                        <div v-if="!item.attendance_date"> <i class="ri-subtract-line"></i></div>
                                        <div v-if="item.attendance_date !== ''">{{ item.attendance_date }}</div>
                                    </td>
                                    <td>
                                        <!-- <div v-if="item.working_hours !== 0"> 0</div> -->
                                        <div v-if="item.working_hours !== ''">{{ item.working_hours }}</div>

                                    </td>
                                    <td>
                                        <div v-if="!item.department"> <i class="ri-subtract-line"></i></div>
                                        <div v-if="item.department !== ''">{{ item.department }}</div>
                                    </td>
                                    <td>
                                        <div v-if="!item.status"> <i class="ri-subtract-line"></i></div>
                                        <div v-if="item.status !== ''">
                                            <span v-if="item.status == 'Present'"><i
                                                    class="bi bi-circle-fill text-success me-1 "></i></span>
                                            <span v-if="item.status == 'Absent'"><i
                                                    class="bi bi-circle-fill text-danger me-1"></i></span>

                                            {{ item.status }}
                                        </div>

                                    </td>
                                    <td>
                                        <div v-if="!item.leave_type"> <i class="ri-subtract-line"></i></div>
                                        <div v-if="item.leave_type !== ''">{{ item.leave_type }}</div>
                                    </td>
                                    <td>
                                        <div v-if="!item.shift"> <i class="ri-subtract-line"></i></div>
                                        <div v-if="item.shift !== ''">{{ item.shift }}</div>
                                    </td>

                                    <td>
                                        <div class=" d-flex  gap-2 justify-content-center  ">
                                            <span><i class="bi bi-pencil-fill cursor-pointer" title="Edit Employee"
                                                    data-bs-toggle="modal" data-bs-target="#primarydetails"
                                                    data-placement="auto" data-toggle="popover" data-trigger="hover"
                                                    @click="empdata(item.name)"></i></span>
                                            <span><i class="bi bi-exclamation-circle-fill"></i></span>
                                        </div>

                                    </td>
                                </tr>

                            </tbody>
                        </table>


                    </div>
                </div>


                <div v-if="!showDiv">
                    <div class="mt-2 table-data">


                        <table class="table w-100 table-striped table-hover">
                            <thead class="head text-center">
                                <tr>
                                    <th>Total Employee</th>
                                    <th v-for="day in daysInMonth" :key="day">
                                        <div class="d-flex flex-column">
                                            <span class="date-num">{{ day }}</span>
                                            <span class="date-week">{{ getDayName(selectedMonth, day) }}</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="text-center">
                                <tr class="data-row" v-for="(emp, empIndex) in matchedMonths" :key="empIndex">
                                    <td>{{ emp.name }}</td>
                                    <td v-for="(day, dayIndex) in daysInMonth" :key="dayIndex">
                                        <!-- Check if emp.dates array includes the current day -->
                                        <template v-if="emp.dates.includes(getDateString(selectedMonth, day))">
                                            <!-- Get the index of the matching date -->
                                            <template
                                                v-if="emp.status[emp.dates.indexOf(getDateString(selectedMonth, day))] === 'Present'">
                                                <!-- Display 'P' for Present -->
                                                <div class="present d-flex justify-content-center align-items-center"
                                                    title="Reason" data-placement="auto" data-toggle="popover"
                                                    data-trigger="hover" data-content="I am popover directive content!">
                                                    <span class="text-center">P</span>
                                                </div>
                                            </template>
                                            <template
                                                v-else-if="emp.status[emp.dates.indexOf(getDateString(selectedMonth, day))] === 'Absent'">
                                                <!-- Display 'A' for Absent -->
                                                <div class="absent d-flex justify-content-center align-items-center"
                                                    title="Reason" data-placement="auto" data-toggle="popover"
                                                    data-trigger="hover" data-content="I am popover directive content!">
                                                    <span class="text-center">A</span>
                                                </div>
                                            </template>
                                            <template
                                                v-else-if="emp.status[emp.dates.indexOf(getDateString(selectedMonth, day))] === 'On Leave'">
                                                <!-- Display 'A' for Absent -->
                                                <div class="leave d-flex justify-content-center align-items-center">
                                                    <span class="text-center">L</span>
                                                </div>
                                            </template>
                                            <template
                                                v-else-if="emp.status[emp.dates.indexOf(getDateString(selectedMonth, day))] === 'Work From Home'">
                                                <!-- Display 'A' for Absent -->
                                                <div
                                                    class="work_from_home d-flex justify-content-center align-items-center">
                                                    <span class="text-center"><i class="bi bi-circle-fill"></i></span>
                                                </div>
                                            </template>
                                            <template
                                                v-else-if="emp.status[emp.dates.indexOf(getDateString(selectedMonth, day))] === 'Half Day'">
                                                <!-- Display 'A' for Absent -->
                                                <div class="halfday d-flex justify-content-center align-items-center">
                                                    <span class="text-center"><i class="bi bi-circle-half"></i></span>
                                                </div>
                                            </template>

                                            <template v-else>
                                                <!-- Display a placeholder if the status is neither 'Present' nor 'Absent' -->
                                                <span>-</span>
                                            </template>
                                        </template>
                                        <template v-else>
                                            <!-- If no status available for the current day, display a placeholder -->
                                            <span>-</span>
                                        </template>
                                    </td>

                                </tr>
                            </tbody>
                        </table>


                    </div>

                </div>
                <div class="modal fade" id="primarydetails" tabindex="-1" aria-labelledby="primarydetailsLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-lg  modal-dialog-centered ">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="primarydetailsLabel">Edit Employee Details</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="mb-3">
                                            <label for="" class="form-label">Employee Name</label>
                                            <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                                                placeholder="" v-model="currentEmployee.employee">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="mb-3">
                                            <label for="Status" class="form-label">Status</label>
                                            <input type="text" class="form-control" name="Status" id="Status"
                                                aria-describedby="helpId" placeholder="" v-model="currentEmployee.status">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="mb-3">
                                            <label for="attendance_date" class="form-label">Date</label>
                                            <input type="text" class="form-control" name="attendance_date"
                                                id="attendance_date" aria-describedby="helpId" placeholder=""
                                                v-model="currentEmployee.attendance_date">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="mb-3">
                                            <label for="" class="form-label">Company</label>
                                            <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                                                placeholder="" v-model="currentEmployee.company">
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="mb-3">
                                            <label for="" class="form-label">Shift</label>
                                            <select class="form-select form-select-lg" name="Shift" id="Shift"
                                                v-model="currentEmployee.shift">
                                                <option selected>Select one</option>
                                                <option value="A shift">A shift</option>
                                                <option value="B shift">B shift</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6"></div>
                                </div>




                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" @click="UpdateSavings">Save
                                    changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavPage from './NavPage.vue';
import axios from 'axios';
import SidebarPage from './SidebarPage.vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

// import Datepicker from 'vuejs3-datepicker';
// import Datepicker from 'vuejs3-datepicker';

export default {
    data() {
        return {
            show: true,
            data: [],
            calendarData: [],
            searchQuery: '',
            selectedDate: null,
            selectedMonth: new Date().getMonth() + 1, // Initialize with the current month in the array of object data i want to remove duplicate ids and  i want to show only uniqueids in an array vue 3 using js array methods
            months: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
            ],
            showDiv: true,
            currentEmployee: {},
            formData: {},
            errors: {},
            employeeId: [],
            employeeNames: [],
            matchedMonths: [],
            allUniqueIds: [],
            allStatus: [],
            final: []
        }
    },
    components: {
        NavPage,
        SidebarPage,
    },
    computed: {
        filteredData() {
            return this.data.filter(item => {
                return Object.values(item).some(value => {
                    return String(value).toLowerCase().includes(this.searchQuery.toLowerCase());
                });
            });
        },
        daysInMonth() {
            const selectedYear = new Date().getFullYear(); // You may need to adjust this logic based on your requirements
            const daysInMonth = new Date(selectedYear, this.selectedMonth, 0).getDate();
            return Array.from({ length: daysInMonth }, (_, index) => index + 1);
        },
    }
    ,
    mounted() {
        this.Attendancefetch();

    },
    methods: {
        getDateString(selectedMonth, day) {
            // Assuming selectedMonth is the numeric representation of the month (1-12)
            const monthString = selectedMonth < 10 ? `0${selectedMonth}` : `${selectedMonth}`;
            const dayString = day < 10 ? `0${day}` : `${day}`;
            const year = new Date().getFullYear(); // You might want to update the year logic as per your requirement
            return `${year}-${monthString}-${dayString}`;
        },
        Attendancefetch() {
            // Make an HTTP GET request to the API endpoint
            // axios.get('http://192.168.1.194:8000/api/method/life_slimming.events.attendance_details') 
            let queryParams = { filters: [] }
            queryParams.fields = JSON.stringify(['*'])
            queryParams.limit_page_length = "None"
            queryParams.order_by = '`tabAttendance`.`attendance_date` desc'
            queryParams.filters = JSON.stringify(queryParams?.filters)
            axios.get('http://192.168.1.194:8000/api/resource/Attendance', {
                params: queryParams
            })
                .then((response) => {
                    this.data = JSON.parse(JSON.stringify(response.data.data));
                    this.employeeId = ([...new Set(this.data.map(item => item.employee))]);
                    this.employeeNames = ([...new Set(this.data.map(item => item.employee_name))]);
                    // this.data.filter((Names) => {
                    //     this.employeeNames.push(Names.employee_name)
                    // });
                    console.log(response);
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        updateCalendar() {
            this.matchedMonths = [];
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth() + 1; // Adding 1 to get the month in the format (1-12)

            let targetMonth = this.selectedMonth || currentMonth; // Use selected month if available, else default to current month

            const daysInMonth = new Date(currentYear, targetMonth, 0).getDate();

            // If the selected date is beyond the last day of the current month, adjust it
            if (this.selectedDate && this.selectedDate.getDate() > daysInMonth) {
                this.selectedDate = null;
            }

            let emps = [];
            this.final.forEach(employee => {
                employee.attendance.forEach(empMonth => {
                    const empDate = new Date(empMonth.date);
                    const empMonthValue = empDate.getMonth() + 1; // Adding 1 to match the format (1-12)

                    if (empMonthValue === targetMonth) {
                        emps.push({
                            employee: empMonth.employee,
                            date: empMonth.date,
                            status: empMonth.status
                        });
                    }
                });
            });

            // Constructing the structure similar to your desired output
            let uniqueEmployeeData = {};
            emps.forEach(emp => {
                if (!uniqueEmployeeData[emp.employee]) {
                    uniqueEmployeeData[emp.employee] = {
                        name: emp.employee,
                        dates: [],
                        status: []
                    };
                }
                uniqueEmployeeData[emp.employee].dates.push(emp.date);
                uniqueEmployeeData[emp.employee].status.push(emp.status);
            });

            this.matchedMonths = Object.values(uniqueEmployeeData);
            console.log(this.matchedMonths);
        },

        getDayName(month, day) {
            const selectedYear = new Date().getFullYear(); // You may need to adjust this logic based on your requirements 
            const date = new Date(selectedYear, month - 1, day);
            const options = { weekday: 'short' }; // Get the short name of the day (e.g., Mon, Tue, etc.)
            return new Intl.DateTimeFormat('en-US', options).format(date);
        },

        employeeCalendartype(type) {
            if (type == 'calendar') {
                this.showDiv = false

            } if (type == 'list') {
                this.showDiv = true
            }
            let queryParams = { filters: [] }
            queryParams.fields = JSON.stringify(['*'])
            queryParams.limit_page_length = "None"
            // queryParams.filters.push(['name', '=', 'HR-ATT-2023-00017'])
            // queryParams.filters.push([["employee", "=", " HR-EMP-00001"]])
            // queryParams.filters.push(["attendance_date", "Between", ["2023-10-01", "2023-10-30"]]) 
            axios.get('http://192.168.1.194:8000/api/resource/Attendance', {
                params: queryParams
            })
                .then((result) => {
                    this.calendarData = JSON.parse(JSON.stringify(result.data.data));

                    this.allUniqueIds = ([...new Set(this.calendarData.map(item => item.employee))]);

                    this.allUniqueIds.forEach(element => {
                        let newobj = {
                            employee: element,
                            attendance: [

                            ],
                        }
                        console.log(element);
                        this.calendarData.forEach(elementTwo => {
                            if (elementTwo.employee == element) {
                                newobj.name = elementTwo.employee_name
                                newobj.attendance.push({
                                    'employee': elementTwo.employee_name,
                                    'date': elementTwo.attendance_date,
                                    'status': elementTwo.status
                                })
                            }
                        })
                        this.final.push(newobj)

                    })
                    console.log(this.final);

                    this.updateCalendar(this.final);

                })
                .catch((error) => {
                    console.error(error);
                });
        },

        empdata(name) {
            this.data.filter(currentemp => {
                if (currentemp.name == name) {
                    this.currentEmployee = currentemp

                }
            })
        },
        AddEmployee() {
            console.log(this.formData);
            axios.post('http://192.168.1.194:8000/api/resource/Attendance?fields=[%22*%22]', this.formData)
                .then((response) => {
                    console.log(response);
                    this.Attendancefetch()
                });
            this.formData = {};
            toast.success("Successfully Employee Details Added ", {
                // toast options here
            });
        },
        UpdateSavings() {
            console.log(this.currentEmployee);
            axios.put('http://192.168.1.194:8000/api/resource/Attendance/' + this.currentEmployee?.name, this.currentEmployee)
                .then((response) => {
                    console.log(response);
                    console.log(this.currentEmployee);
                });
            toast.success("Successfully Employee Details Updated ", {
                // toast options here
            });
        }
        ,
        validateName() {
            if (!this.formData.employee_name) {
                this.errors.employee_name = "Enter Name"
            } else {
                delete this.errors.employee_name;
            }
        },
        showArrow(type) {
            if (type == 'right') {
                this.show = false
            } if (type == 'left') {
                this.show = true
            }

        },








    },

}

</script>

<style  scoped>
.search-tag {
    font-family: 'Poppins', sans-serif;
    border-radius: 4px;
    border: 1px solid #E9EDFF;
    background: #EBEDF2;
}

.search-main {
    background: #FFF;
    height: 56px;
    position: sticky;
    top: 59px;
    z-index: 1;
}

.icon-search {
    width: 14px;
    height: 14px;
}

.icons-prev-nxt {
    border-radius: 4px;
    border: 1px solid #f0f0f0;
    background: #EBEFF5 !important;
    width: 24px;
    height: 24px;
    cursor: pointer;
}

.search {
    background-color: transparent;
    color: #1C1B1F;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.search:focus {
    box-shadow: none;

}

.tab-name {
    color: #1C1B1F;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0px;

}

.designation {
    border-radius: 4px;
    border: 1px solid #365EFF;
    height: 32px;
    margin-right: 70px;
    font-size: 14px;
}

.designation-options {
    color: #1C1B1F;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.calendar {
    border-radius: 4px;
    border: 1px solid #365EFF;
    background: #EBEDF2;
    color: #1C1B1F;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.6;
    height: 32px;
}

.span-calendar-icon {
    width: 38px;
    height: 26px;
    flex-shrink: 0;
    border-radius: 4px;
    /* background: #365EFF; */
    color: #FFF;
    border: none;
    padding: 0;
    box-shadow: none;

}

.span-calendar-icon-cal {
    width: 38px;
    height: 26px;
    flex-shrink: 0;
    border-radius: 4px;
    background: #365EFF;
    color: #FFF;
    border: none;
    padding: 0;
    box-shadow: none;

}

.calendar-icon {
    border-radius: 4px;
    flex-shrink: 0;
    color: #444444;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    opacity: 0.5;

}

.calendar-icon-two {
    border-radius: 4px;
    flex-shrink: 0;
    color: #ffffff;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
}

.list-icon {
    border-radius: 4px;
    border: 1px solid #E0E5FB;
    background: #365EFF;
    width: 38px;
    height: 26px;
    flex-shrink: 0;
    color: white;
}

.list-icon-two {
    border-radius: 4px;
    border: 1px solid #E0E5FB;
    /* background: #365EFF; */
    /* background: #ffffff; */
    width: 38px;
    height: 26px;
    flex-shrink: 0;
    color: #444444;
}

.span-list-icon {
    box-shadow: none;
    padding: 0;

}

.span-list-icon-two {
    box-shadow: none;
    padding: 0;
}

.icons-div {
    border-radius: 4px;
    border: 1px solid #E0E5FB;
    background: #EBEDF2;
    justify-content: center;
    align-items: center;
    width: 85px;
    height: 32px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    border-radius: 4px;
    border: 1px solid #C1C1C1;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
    /* width: 266px; */
    height: 95px;
    flex-shrink: 0;
    margin-right: 15px;
}

.card:hover {
    background-color: rgb(239, 239, 239);

}

.count {
    color: #1C1B1F;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
}

.employess-label {
    color: #444;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.user {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    color: #365EFF;
}

.btn-nxt {
    border-radius: 2px 0px 0px 2px;
    border: 1px solid #E0E5FB;
    opacity: 0.95;
    background: #EBEDF2;
    width: 44px;
}

.employees-head {
    width: 286px;
    height: 42px;
    flex-shrink: 0;
    background: #EEEFFF;
}

.date-num {
    color: #1C1B1F;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.date-week {
    color: #444;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.8;
}



.arrow-icon {
    width: 18px;
    height: 18px;
    color: #365EFF;
}

.main-total {
    position: sticky;
    z-index: 0;
    /* top: 0px; */
}

.table-data {
    height: 75vh;
    overflow: auto;
    position: relative;
}

.table-data::-webkit-scrollbar {
    width: 5px;
}

.table-data::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;

}


.table-data::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
}




table {

    border-collapse: collapse;
    text-align: start;
    vertical-align: middle !important;
}

thead {
    position: sticky;
    top: -1px;
    z-index: 999;
    vertical-align: middle !important;
}

thead {
    border-radius: 4px 4px 0px 0px;
    border: 1px solid #E9EDFF !important;
    background: #DEE0FF;
    height: 52px;
}

th {
    color: #1C1B1F;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-bottom: none;
}

tbody {
    position: relative;
    z-index: 10;
}


tbody td {
    color: #444;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    height: 52px;

}

.holiday {
    width: 40px !important;
    height: 40px !important;
    flex-shrink: 0;
    border-radius: 4px;
    background: #E8E8E8;
    color: #1C1B1F;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.present {
    width: 40px !important;
    height: 40px !important;
    flex-shrink: 0;
    border-radius: 4px;
    background: #E9FDE9;
    color: #04BC00;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.absent {
    width: 40px !important;
    height: 40px !important;
    flex-shrink: 0;
    border-radius: 4px;
    border-radius: 4px;
    background: #FFDEDE;
    color: #FF2323;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.leave {
    width: 40px !important;
    height: 40px !important;
    flex-shrink: 0;
    border-radius: 4px;
    border-radius: 4px;
    background: #FFDEDE;
    color: #FF2323;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.work_from_home {
    width: 40px !important;
    height: 40px !important;
    flex-shrink: 0;
    border-radius: 4px;
    background: #D4FFFC;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    fill: #07E2D5;
    color: #07E2D5;
}

.Remote-inside {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    fill: #07E2D5;
    color: #07E2D5;
}

.Early-exit {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 4px;
    background: #FFFCE0;
}

.Early-exit-inside {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
}

.late-entry {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 4px;
    background: #FCE4DC;
}

.late-entry-inside {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
}

.halfday {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 4px;
    background: #FFE2C8;
    color: #FF8D23;
}

.halfday-inside {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
}

.cursor-pointer {
    cursor: pointer;
}

.import {
    /* width: 96px; */
    height: 32px;
    border-radius: 4px;
    border: 1px solid #E9EDFF;
    background: #EBEDF2;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1C1B1F;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.AddEmployee {
    /* width: 154px; */
    height: 32px;
    border-radius: 4px;
    border: 1px solid #E9EDFF;
    background: #EBEDF2;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1C1B1F;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.Filter {
    /* width: 108px; */
    height: 32px;
    flex-shrink: 0;
    color: #1C1B1F;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #E9EDFF;
    background: #EBEDF2;
}

.errsize {
    font-size: 12px;
}
</style>