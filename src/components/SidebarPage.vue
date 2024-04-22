<template>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#" aria-controls="navbar"
        aria-expanded="false" aria-label="Toggle navigation">
        <!-- <span class="navbar-toggler-icon"></span> -->
        <i class="ri-align-justify"></i>
    </button>
    <div class="side-bar ">
        <div>
            <p @click="HomePage" class="dashboard ms-4 mb-0 mt-3  "><i class="ri-virus-line me-2 "></i>Dashboard</p>
        </div>
        <div class="accordion">
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button collapsed all-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne">
                        <i class="ri-group-fill me-2 "></i> Recruitment
                        <i class="ri-arrow-drop-down-fill fs-2 down side-margin"></i>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse "
                    aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                        <ul class=" list-unstyled nav  nav-pills  flex-column  ">
                            <li class="list-items nav-item " active-class="active" exact> <button class=" nav-link "
                                    data-bs-toggle="pill" role="tab">Posting
                                </button></li>
                            <li class="list-items nav-item " active-class="active" exact> <button class=" nav-link "
                                    data-bs-toggle="pill" role="tab">Interviews </button></li>
                            <li class="list-items nav-item " active-class="active" exact> <button class=" nav-link "
                                    data-bs-toggle="pill" role="tab">Appointment </button></li>
                            <li class="list-items nav-item " active-class="active" exact> <button class=" nav-link "
                                    data-bs-toggle="pill" role="tab">Requisition </button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed all-button " type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo">
                        <i class="ri-briefcase-fill me-2 "></i> Engagement
                        <i class="ri-arrow-drop-down-fill fs-2 down side-margin2"></i>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse "
                    aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                        <ul class="list-unstyled nav nav-pills flex-column  ">
                            <li class="list-items nav-item " active-class="active" exact> <button class=" nav-link "
                                    data-bs-toggle="pill" role="tab">Leave
                                    Requests </button> </li>

                            <li class=" nav-item   list-items" @click="AttendacePage" active-class="active" exact>
                                <button class=" nav-link  active " data-bs-toggle="pill" role="tab">Attendance</button>
                            </li>
                            <li class="list-items nav-item " active-class="active" exact> <button class=" nav-link "
                                    data-bs-toggle="pill" role="tab">
                                    Shift
                                </button> </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item  ">
                <h2 class="accordion-header " id="panelsStayOpen-headingThree">
                    <button class="accordion-button   collapsed all-button  active " type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree">
                        <i class="ri-team-line me-2 "></i> Employee Details
                        <i class="ri-arrow-drop-down-fill fs-2 down  side-margin3"></i>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse  "
                    aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body ">
                        <ul class="list-unstyled nav  nav-pills  flex-column " role="tablist">
                            <li class=" nav-item   list-items" @click="EmployeSummary" active-class="active" exact>
                                <button class=" nav-link  active " data-bs-toggle="pill" role="tab"> Employee
                                    Summary</button>
                            </li>
                            <li class="list-items nav-item " @click="EditPageVue" active-class="active" exact> <button
                                    class=" nav-link " data-bs-toggle="pill" role="tab">Onboarding</button> </li>
                            <li class="list-items nav-item" active-class="active" exact><button class=" nav-link "
                                    data-bs-toggle="pill" role="tab">Journey</button></li>
                            <li class="list-items nav-item" active-class="active" exact><button class=" nav-link "
                                    data-bs-toggle="pill" role="tab">Grievance</button></li>
                            <li class="list-items nav-item" active-class="active" exact><button class=" nav-link "
                                    data-bs-toggle="pill" role="tab">Training</button></li>
                            <li class="list-items nav-item" active-class="active" exact><button class=" nav-link "
                                    data-bs-toggle="pill" role="tab">Exit</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingfour">
                    <button class="accordion-button collapsed all-button " type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapsefour" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapsefour">
                        <i class="ri-star-line me-2 "></i> Performance
                        <i class="ri-arrow-drop-down-fill fs-2 down  side-margin4"></i>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapsefour" class="accordion-collapse collapse "
                    aria-labelledby="panelsStayOpen-headingfour">
                    <div class="accordion-body">
                        <ul class="list-unstyled nav nav-pills  flex-column  ">
                            <li class="list-items nav-item " active-class="active" exact> <button class=" nav-link "
                                    data-bs-toggle="pill" role="tab">Appraisals </button></li>
                            <li class="list-items nav-item " active-class="active" exact> <button class=" nav-link "
                                    data-bs-toggle="pill" role="tab">Promotions </button></li>
                            <li class="list-items nav-item " active-class="active" exact> <button class=" nav-link "
                                    data-bs-toggle="pill" role="tab">Ratings
                                </button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingfive">
                    <button class="accordion-button collapsed all-button " type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapsefive" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapsefive">
                        <i class="ri-money-dollar-circle-line me-2 "></i> Expenses
                        <i class="ri-arrow-drop-down-fill fs-2 down  side-margin5"></i>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapsefive" class="accordion-collapse collapse "
                    aria-labelledby="panelsStayOpen-headingfive">
                    <div class="accordion-body">
                        <ul class="list-unstyled nav nav-pills  flex-column  ">
                            <li class="list-items nav-item " active-class="active" exact> <button class=" nav-link "
                                    data-bs-toggle="pill" role="tab">Claims
                                </button></li>
                            <li class="list-items nav-item " active-class="active" exact> <button class=" nav-link "
                                    data-bs-toggle="pill" role="tab">Advances </button></li>
                            <li class="list-items nav-item " active-class="active" exact> <button class=" nav-link "
                                    data-bs-toggle="pill" role="tab">Fleet
                                </button></li>
                            <li class="list-items nav-item " active-class="active" exact> <button class=" nav-link "
                                    data-bs-toggle="pill" role="tab">Travel
                                </button></li>
                            <li class="list-items nav-item " active-class="active" exact> <button class=" nav-link "
                                    data-bs-toggle="pill" role="tab">Liabilities </button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {

    data() {
        return {

        }
    },
    components: {

    },
    methods: {

        EmployeSummary() {
            this.$router.push({
                path: '/EmployeSummary',
                query: {
                    name: 'Employee Summary'
                }
            });
            // toast.info("Employe Summary ", {
            //     toast options here
            //     timeout: 5000,
            // });
        },

        HomePage() {
            this.$router.push({
                path: '/HomePage',
                query: {
                    name: 'Home page'
                }
            })
        },
        EditPageVue() {
            this.$router.push({
                path: '/Editpage',
                query: {
                    name: 'EditPage'
                }
            })
        },
        AttendacePage() {
            this.$router.push({
                path: '/AttendacePage',
                query: {
                    name: 'AttendacePage'
                }
            })
        }
    }
}
</script>

<style  scoped>
.dashboard {
    color: #444;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
}

.dashboard:hover {
    background-color: rgb(236, 236, 236);
}

.side-bar {
    /* width: 251px; */
    height: 92dvh;
    position: sticky;
    top: 59px;
    z-index: 0;
    overflow: auto;
}

.side-bar::-webkit-scrollbar {
    width: 5px;
}

.side-bar::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
}


.side-bar::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
}


.accordion-item {
    border: none;
}

.accordion-item button:hover {
    background-color: rgb(236, 236, 236);
}

.all-button {
    color: #444;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}


.all-button:focus {
    border: none;
    box-shadow: none;
    background-color: white;

}

.all-button:not(.collapsed) {
    background-color: white;
    box-shadow: none;
    color: #365EFF;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

}

.list-items {
    color: #444 !important;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    cursor: pointer;
}

.nav-link {
    color: #444;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.8;
}

.accordion-body {
    padding: 0px !important;
}

.accordion-button {
    padding: 7px 5px 7px 24px;
}

.list-unstyled {
    margin: 0px 0px 0px 38px;

}


.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    color: #fff;
    background-color: #365EFF !important;
}

.accordion-button::after {
    background-image: none;

}

.side-margin {
    margin-left: 75px;
}

.side-margin2 {
    margin-left: 70px;
}

.side-margin3 {
    margin-left: 41px;
}

.side-margin4 {
    margin-left: 70px;
}

.side-margin5 {
    margin-left: 98px;
}




.accordion-button.collapsed .down {

    /* background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-caret-down-fill' viewBox='0 0 16 16'%3E%3Cpath d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z'/%3E%3C/svg%3E"); */

    transform: rotate(0deg) !important;
    transition: all 0.3s;
}

.accordion-button:not(.collapsed) .down {

    /* background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-caret-up-fill' viewBox='0 0 16 16'%3E%3Cpath d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z'/%3E%3C/svg%3E"); */
    transition: all 0.3s;

    transform: rotate(-180deg) !important;
}
</style>