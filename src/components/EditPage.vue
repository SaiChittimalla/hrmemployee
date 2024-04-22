<template>
    <NavPage />
    <div class=" container-fluid ">
        <div class="row">
            <div class="col-lg-2 col-md-2 col-sm-12">
                <SidebarPage />
            </div>
            <div class="col-lg-10 col-md-10 col-sm-12">
                <div>
                    <div class=" d-flex justify-content-between  search-main ">
                        <div class=" d-flex mt-2 ">
                            <div class=" d-flex ">
                                <span class="m-1"><i class="bi bi-caret-left-square icons-prev-nxt"></i></span>
                                <span class="m-1"><i class="bi bi-caret-right-square icons-prev-nxt"></i></span>
                            </div>
                            <div class="m-2">
                                <p class="tab-name">Tab name</p>
                            </div>
                            <div class="ms-5">
                                <div class="search-tag d-flex ">
                                    <span class="ms-3"><i class="bi bi-search icon-search"></i></span>
                                    <input type="search" class="form-control border-0 search " name="search" id="search"
                                        v-model="searchQuery" aria-describedby="helpId"
                                        placeholder=" Search for Information">
                                </div>
                            </div>
                        </div>
                        <div class=" d-flex ">
                            <div class="m-1">
                                <button type="button" class="btn btn-white export">Export</button>
                            </div>
                            <div class="my-1 ms-1  me-3 ">
                                <button type="button" class="btn btn-white create " data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop">+ Create Shift</button>
                            </div>


                        </div>


                    </div>
                    <div>
                        <div class="profile d-flex gap-5 align-items-center   justify-content-around ">
                            <div>
                                <img src="../assets/Rectangle.jpg" alt="" class="imge-responsive  ">
                            </div>
                            <div class=" d-flex align-items-center     gap-2  ">
                                <div>
                                    <i class="ri-user-fill all-icons"></i>
                                </div>
                                <div>
                                    <p class="details">Sizu Hains</p>
                                    <p class="details-label">Name</p>
                                </div>
                            </div>
                            <div class=" d-flex align-items-center  gap-2  ">
                                <div>
                                    <i class="ri-mail-fill all-icons"></i>
                                </div>
                                <div>
                                    <p class="details">sizu.h@gmail.com</p>
                                    <p class="details-label">Email</p>
                                </div>
                            </div>
                            <div class=" d-flex align-items-center   gap-2  ">
                                <div>
                                    <i class="ri-phone-fill all-icons"></i>

                                </div>
                                <div>
                                    <p class="details">+91-9797979797</p>
                                    <p class="details-label">Mobile</p>
                                </div>
                            </div>
                            <div class=" d-flex align-items-center  gap-2  ">
                                <div>
                                    <i class="ri-user-settings-line all-icons"></i>
                                </div>
                                <div>
                                    <p class="details">Team Leader</p>
                                    <p class="details-label">Designation</p>
                                </div>
                            </div>
                            <div class=" d-flex align-items-center   ">

                                <div class=" d-flex gap-2  active-state ">
                                    <span><i class="bi bi-circle-fill text-white active-icon ms-2 "></i></span>
                                    <p class="details active-state">Active</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-personal-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-personal" type="button" role="tab" aria-controls="pills-personal"
                                    aria-selected="true">Personal</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-attendance-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-attendance" type="button" role="tab"
                                    aria-controls="pills-attendance" aria-selected="false">Attendance</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-job-details-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-job-details" type="button" role="tab"
                                    aria-controls="pills-job-details" aria-selected="false">Job Details</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-documents-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-documents" type="button" role="tab"
                                    aria-controls="pills-documents" aria-selected="false">Documents</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-time-line-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-time-line" type="button" role="tab"
                                    aria-controls="pills-time-line" aria-selected="false">Time Line</button>
                            </li>

                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-personal" role="tabpanel"
                                aria-labelledby="pills-personal-tab" tabindex="0">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="row">
                                            <div class="col-12 mb-4 ">
                                                <div class="card ">
                                                    <div class=" card-header ">
                                                        <div class=" d-flex justify-content-between  ">
                                                            <div class=" d-flex gap-2  ">
                                                                <span><i class="ri-user-fill"></i></span>
                                                                <p>Primary Details</p>
                                                            </div>
                                                            <div>
                                                                <span><i class="ri-pencil-fill text-primary"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-body">
                                                        <form>
                                                            <div class="inside-p ">
                                                                <div class=" d-flex justify-content-between mb-4 ">
                                                                    <div>
                                                                        <p>Sizu Hains</p>
                                                                        <label for="">Full Name</label>
                                                                    </div>
                                                                    <div class=" text-end ">
                                                                        <p>sizu.h@gmail.com</p>
                                                                        <label for="">Email</label>
                                                                    </div>
                                                                </div>
                                                                <div class=" d-flex justify-content-between mb-4  ">
                                                                    <div>
                                                                        <p>Robinson</p>
                                                                        <label for="">First Name</label>
                                                                    </div>
                                                                    <div>
                                                                        <p>Mathew</p>
                                                                        <label for="">Last Name</label>
                                                                    </div>
                                                                </div>
                                                                <div class=" d-flex justify-content-between mb-4  ">
                                                                    <div>
                                                                        <p>Mr.</p>
                                                                        <label for="">Salutation</label>
                                                                    </div>
                                                                    <div>
                                                                        <p>02-05-2001</p>
                                                                        <label for="">Date Of Birth</label>
                                                                    </div>
                                                                </div>
                                                                <div class=" d-flex justify-content-between mb-4  ">
                                                                    <div>
                                                                        <p>A+</p>
                                                                        <label for="">Blood Group</label>
                                                                    </div>
                                                                    <div class=" text-end ">
                                                                        <p>No</p>
                                                                        <label for="">Physically Handicapped</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 mb-4 ">
                                                <div class="card">
                                                    <div class=" card-header ">
                                                        <div class=" d-flex justify-content-between  ">
                                                            <div class=" d-flex gap-2  ">
                                                                <span><i class="ri-team-line"></i></span>
                                                                <p>Family Details</p>
                                                            </div>
                                                            <div>
                                                                <span><i class="ri-pencil-fill text-primary"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-body">
                                                        <form>
                                                            <div class="inside-p">
                                                                <div
                                                                    class=" d-flex  justify-content-between align-items-center mb-4 ">
                                                                    <div>
                                                                        <p>Baley Hains</p>
                                                                        <label for="">Mother Name</label>
                                                                    </div>
                                                                    <div class=" text-end ">
                                                                        <p>Peter Hains</p>
                                                                        <label for="">Father Name</label>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class=" d-flex  justify-content-between align-items-center mb-4  ">
                                                                    <div>
                                                                        <p>Koley Hains</p>
                                                                        <label for="">Guardian</label>
                                                                    </div>
                                                                    <div class=" text-end ">
                                                                        <p>No</p>
                                                                        <label for="">Marital Status</label>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 mb-4 ">
                                                <div class="card">
                                                    <div class=" card-header ">
                                                        <div class=" d-flex justify-content-between  ">
                                                            <div class=" d-flex gap-2  ">
                                                                <span><i class="ri-account-box-fill"></i></span>
                                                                <p>Contact Details</p>
                                                            </div>
                                                            <div>
                                                                <span><i class="ri-pencil-fill text-primary"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-body">
                                                        <form>
                                                            <div class="inside-p">
                                                                <div
                                                                    class=" d-flex  justify-content-between align-items-center mb-4 ">
                                                                    <div>
                                                                        <p>+91-9900990099</p>
                                                                        <label for="">Mobile Number</label>
                                                                    </div>
                                                                    <div class=" text-end ">
                                                                        <p>+91-9900990099</p>
                                                                        <label for="">Emergency Mobile Number</label>
                                                                    </div>
                                                                </div>
                                                                <div class=" d-flex  justify-content-between mb-4  ">
                                                                    <div>
                                                                        <p>peterparker@gmail.com</p>
                                                                        <label for="">Mail ID</label>
                                                                    </div>
                                                                    <div class=" text-end ">
                                                                        <p>peter.a@caratred.com</p>
                                                                        <label for="">Office Mail ID</label>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="row">
                                            <div class="col-12 mb-4 ">
                                                <div class="card ">
                                                    <div class=" card-header ">
                                                        <div class=" d-flex justify-content-between  ">
                                                            <div class=" d-flex gap-2  ">
                                                                <span><i class="ri-map-pin-2-fill"></i></span>
                                                                <p>Bio / Cover Letter</p>
                                                            </div>
                                                            <div>
                                                                <span><i class="ri-pencil-fill text-primary"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-body">
                                                        <p class="para-line">A cover letter is a document that accompanies
                                                            your resume when
                                                            applying for a job. Its aim is to introduce yourself, outline
                                                            your skills and experience, and explain why you would be the
                                                            best fit for the role.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 mb-4 ">
                                                <div class="card ">
                                                    <div class=" card-header ">
                                                        <div class=" d-flex justify-content-between  ">
                                                            <div class=" d-flex gap-2  ">
                                                                <span><i class="ri-map-pin-2-fill"></i></span>
                                                                <p>Address</p>
                                                            </div>
                                                            <div>
                                                                <span><i class="ri-pencil-fill text-primary"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-body">
                                                        <form>
                                                            <div class="inside-p">
                                                                <div
                                                                    class=" d-flex justify-content-between align-items-center mb-4 ">
                                                                    <div>
                                                                        <p>B-46, HAL Raghavendra Colony</p>
                                                                        <label for="">Line</label>
                                                                    </div>
                                                                    <div class=" text-end ">
                                                                        <p>Suchitra</p>
                                                                        <label for="">Street</label>
                                                                    </div>
                                                                </div>
                                                                <div class=" d-flex  justify-content-between mb-4  ">
                                                                    <div>
                                                                        <p>Opposite SBI Bank</p>
                                                                        <label for="">Landmark</label>
                                                                    </div>
                                                                    <div class=" text-end ">
                                                                        <p>Hyderabad</p>
                                                                        <label for="">City</label>
                                                                    </div>
                                                                </div>
                                                                <div class=" d-flex  justify-content-between  mb-4 ">
                                                                    <div>
                                                                        <p>Telangana</p>
                                                                        <label for="">State</label>
                                                                    </div>
                                                                    <div>
                                                                        <p>500055</p>
                                                                        <label for="">Pincode</label>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 mb-4 ">
                                                <div class="card ">
                                                    <div class=" card-header ">
                                                        <div class=" d-flex justify-content-between  ">
                                                            <div class=" d-flex gap-2  ">
                                                                <span><i class="ri-graduation-cap-fill"></i></span>
                                                                <p>Education</p>
                                                            </div>
                                                            <div>
                                                                <span><i class="ri-pencil-fill text-primary"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-body">
                                                        <form>
                                                            <div class="inside-p">
                                                                <div
                                                                    class=" d-flex justify-content-between align-items-center mb-4 ">
                                                                    <div>
                                                                        <p>Education</p>
                                                                        <label for="">Kakatiya University, Malkagiri .
                                                                            Mechanical Engineering . 2012-2016</label>
                                                                    </div>
                                                                    <div class=" text-end ">
                                                                        <p>sizu.h@gmail.com</p>
                                                                        <label for="">Email</label>
                                                                    </div>
                                                                </div>
                                                                <div class=" d-flex  justify-content-between mb-4  ">
                                                                    <div>
                                                                        <p>Intermediate</p>
                                                                        <label for="">Sri Chaitanya Junior College . MPC .
                                                                            2010-2012</label>
                                                                    </div>
                                                                    <div>
                                                                        <p>Mathew</p>
                                                                        <label for="">Last Name</label>
                                                                    </div>
                                                                </div>
                                                                <div class=" d-flex  justify-content-between mb-4  ">
                                                                    <div>
                                                                        <p>10th</p>
                                                                        <label for="">St. Martin’s High School . Secondary
                                                                            School . 2001-2010</label>
                                                                    </div>
                                                                    <div>
                                                                        <p>02-05-2001</p>
                                                                        <label for="">Date Of Birth</label>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                </div>



                            </div>
                            <div class="tab-pane fade" id="pills-attendance" role="tabpanel"
                                aria-labelledby="pills-attendance-tab" tabindex="0">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="card ">
                                            <div class=" card-header ">
                                                <div class=" d-flex justify-content-between  ">
                                                    <div class=" d-flex gap-2  ">
                                                        <span><i class="ri-verified-badge-fill"></i></span>
                                                        <p>Approvers</p>
                                                    </div>
                                                    <div>
                                                        <span><i class="ri-pencil-fill text-primary"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-body">
                                                <div class="inside-p d-flex  justify-content-around ">
                                                    <div class=" d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <div class="person-short">N</div>
                                                        </div>
                                                        <div class=" text-end ">
                                                            <p>Nagarjuna Akkineni</p>
                                                            <label for="">Expense Approver</label>
                                                        </div>
                                                    </div>
                                                    <div class=" d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <div class="person-short">N</div>
                                                        </div>
                                                        <div class=" text-end ">
                                                            <p>Nagarjuna Akkineni</p>
                                                            <label for="">Expense Approver</label>
                                                        </div>
                                                    </div>
                                                    <div class=" d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <div class="person-short">N</div>
                                                        </div>
                                                        <div class=" text-end ">
                                                            <p>Nagarjuna Akkineni</p>
                                                            <label for="">Expense Approver</label>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>



                            </div>
                            <div class="tab-pane fade" id="pills-job-details" role="tabpanel"
                                aria-labelledby="pills-job-details-tab" tabindex="0">...</div>
                            <div class="tab-pane fade" id="pills-documents" role="tabpanel"
                                aria-labelledby="pills-documents-tab" tabindex="0">...</div>
                            <div class="tab-pane fade" id="pills-time-line" role="tabpanel"
                                aria-labelledby="pills-time-line-tab" tabindex="0">...</div>

                        </div>
                    </div>
                </div>
            </div>







        </div>
    </div>
</template>

<script>
import NavPage from './NavPage.vue';
import SidebarPage from './SidebarPage.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        NavPage,
        SidebarPage,

    },
}
</script>

<style  scoped>
.search-tag {
    width: 300px;
    height: 32px;
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
    /* z-index: 0; */
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

.export {
    width: 96px;
    height: 32px;
    border-radius: 4px;
    border: 1px solid #E9EDFF;
    background: #EBEDF2;
    font-family: 'Poppins', sans-serif;
}

.create {
    width: 159px;
    height: 32px;
    border-radius: 4px;
    background: #365EFF;
    box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.10);
    color: #FFF;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.tab-name {
    color: #1C1B1F;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.profile {
    background-color: #5B76FF;
    border-radius: 4px;
    /* width: 1507px; */
    height: 100px;
}

.details {
    color: #FFF;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0px;
}

.details-label {
    color: #FAFAFA;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
}

.all-icons {
    color: #FAFAFA;
    width: 24px;
    height: 24px;
}

.imge-responsive {
    width: 90px;
    height: 90px;
    border-radius: 5px;
}

.active-state {
    border-radius: 21px;
    background: #65FF4D;
    width: 88px;
    height: 24px;
}

.active-icon {

    width: 8px;
    height: 8px;
}

.nav-pills .nav-link.active {
    color: #365EFF;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-bottom: 4px solid #365EFF;
    border-radius: 0px;
    background-color: white !important;
}

.nav-pills .nav-link {
    color: #444;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

}

.nav-pills {
    border-bottom: 2px solid #bdbdbd;

}

.card {
    border-radius: 4px;
    border: 1px solid rgba(28, 27, 31, 0.20);
    background: #FFF;
    box-shadow: 0px 4px 10px 1px rgba(0, 22, 219, 0.10);
}

.card-header {
    background-color: rgb(245, 245, 245);
}

.card-body {
    padding: 30px 60px;
}

.inside-p p {
    margin-bottom: 0px;
    color: #1C1B1F;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.inside-p label {
    color: #444;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.8;
}

.para-line {
    color: #1C1B1F;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.7px;
    opacity: 0.5;
}

.person-short {
    width: 32px;
    height: 32px;
    fill: #FD8282;
    color: #1C1B1F;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>