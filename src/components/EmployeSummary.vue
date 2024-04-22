<template>
    <NavPage />
    <div class=" container-fluid ">
        <div class="row">
            <div class="col-lg-2 col-md-2 col-sm-12">
                <SidebarPage />
            </div>
            <div class="col-lg-10 col-md-10 col-sm-12">
                <div class="row justify-content-between  search-main ">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class=" d-flex mt-2 ">
                            <div class=" d-flex ">
                                <span class="m-1" @click="navigateBack"><i
                                        class="bi bi-caret-left-square icons-prev-nxt"></i></span>
                                <span class="m-1" @click="navigateForward"><i
                                        class="bi bi-caret-right-square icons-prev-nxt"></i></span>
                            </div>
                            <div class="m-2">
                                <p class="tab-name">Employee Summary</p>
                            </div>
                            <div class="ms-5">
                                <div class="search-tag d-flex ">
                                    <span class="ms-3"><i class="bi bi-search icon-search"></i></span>
                                    <input type="search" class="form-control border-0 search " name="search" id="search"
                                        v-model="searchQuery" aria-describedby="helpId" placeholder=" Search Employee">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class=" d-flex justify-content-end mt-2 ">
                            <div class="m-1">
                                <button type="button" class="btn btn-white export">Export</button>
                            </div>
                            <div class="my-1 ms-1  me-3 ">
                                <button type="button" class="btn btn-white create " data-bs-toggle="modal"
                                    title="Add Employee" data-placement="auto" data-toggle="popover" data-trigger="hover"
                                    data-bs-target="#staticBackdrop">+ Add Employe</button>
                            </div>
                            <!-- Modal -->

                        </div>

                    </div>
                </div>
                <div v-if="show" class=" main-table  ">
                    <div class="table-data">
                        <table class=" table w-100 table-striped table-hover ">
                            <thead class="text-center ">
                                <tr>
                                    <th>S.no</th>
                                    <th>Employe</th>
                                    <th>Department</th>
                                    <th>Job Type</th>
                                    <th>Shift Type</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody class="text-center ">
                                <tr v-for=" (item, index) in  filteredData " :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td>
                                        <div v-if="!item.employee_name"> <i class="ri-subtract-line"></i></div>
                                        <div v-if="item.employee_name !== ''">{{ item.employee_name }}</div>
                                    </td>
                                    <td>
                                        <div v-if="!item.department"> <i class="ri-subtract-line"></i></div>
                                        <div v-if="item.department !== ''">{{ item.department }}</div>
                                    </td>
                                    <td>
                                        <div v-if="!item.designation"> <i class="ri-subtract-line"></i></div>
                                        <div v-if="item.designation !== ''">{{ item.designation }}</div>
                                    </td>
                                    <td>
                                        <div v-if="!item.default_shift"> <i class="ri-subtract-line"></i></div>
                                        <div v-if="item.default_shift !== ''">{{ item.default_shift }}</div>
                                    </td>
                                    <td> <span v-if="item.status == 'Active'"><i
                                                class="bi bi-circle-fill text-success me-1 "></i></span>
                                        <span v-if="item.status == 'Inactive'"><i
                                                class="bi bi-circle-fill text-danger me-1"></i></span>
                                        {{ item.status }}
                                    </td>
                                    <td>
                                        <div class=" d-flex  gap-2 justify-content-center  ">
                                            <span><i class="bi bi-pencil-fill cursor-pointer" title="Edit Employee"
                                                    data-placement="auto" data-toggle="popover" data-trigger="hover" @click="
                                                        EditPage(item.name)"></i></span>
                                            <span><i class="bi bi-exclamation-circle-fill"></i></span>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div class="paginations-tab d-flex justify-content-between  align-items-center">

                        <div class=" d-flex justify-content-center gap-1 ms-2 ">

                            <div class=" d-flex  align-items-center ">
                                <p class=" m-0  p-0 viewPage">view</p>
                            </div>
                            <div class=" d-flex  align-items-center ">
                                <p class="m-0  p-0 dd-page">15</p>
                            </div>
                            <div class=" d-flex  align-items-center ">
                                <p class=" m-0  p-0 viewPage">employes per page</p>
                            </div>
                        </div>
                        <div class=" me-5">
                            <nav aria-label="Page navigation example ">
                                <ul class="pagination m-0 ">
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>

                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="1"
                    aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-scrollable modal-lg ">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel"> Employee Details</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                    @click="formData = {}"></button>
                            </div>
                            <div class="modal-body">

                                <ul class="nav nav-pills extra-pills mb-3" id="pills-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active extra-link" id="pills-home-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                            aria-selected="true"> <span><i
                                                    class="ri-account-circle-fill me-2 "></i></span>Employee
                                            Details</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link extra-link" id="pills-profile-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-profile" type="button" role="tab"
                                            aria-controls="pills-profile" aria-selected="false"><span><i
                                                    class="ri-article-fill me-2 "></i></span>Documents</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link extra-link" id="pills-contact-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-contact" type="button" role="tab"
                                            aria-controls="pills-contact" aria-selected="false"><span><i
                                                    class="ri-shopping-bag-fill me-2 "></i></span> Job Details</button>
                                    </li>

                                </ul>

                                <div class="tab-content" id="pills-tabContent">

                                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                                        aria-labelledby="pills-home-tab" tabindex="0">

                                        <div class="row">
                                            <div class="col-12">
                                                <div class="primary px-4 mb-3 ">
                                                    <div>
                                                        <h3>Primary Details</h3>
                                                    </div>
                                                    <div>
                                                        <form @submit.prevent="submitForm">
                                                            <div class=" d-flex justify-content-between">
                                                                <div class="mb-3 form-group">
                                                                    <label for="name" class="form-label">Name
                                                                        <span class="text-danger">*</span></label>
                                                                    <input type="text" class="form-control" name="name"
                                                                        id="name" aria-describedby="helpId"
                                                                        placeholder="Name" v-model="formData.first_name"
                                                                        @input="validateName">
                                                                    <div class="text-danger errsize mt-2  "
                                                                        v-if="errors.first_name">
                                                                        {{ errors.first_name }}
                                                                    </div>
                                                                </div>

                                                                <div class="mb-3 form-group">
                                                                    <label for="email" class="form-label">Email <span
                                                                            class="text-danger">*</span></label>
                                                                    <input type="email" class="form-control" name="email"
                                                                        id="email" aria-describedby="emailHelpId"
                                                                        placeholder="abc@mail.com"
                                                                        v-model="formData.personal_email"
                                                                        @input="validate_personal_email">
                                                                    <div class="text-danger errsize mt-2  "
                                                                        v-if="errors.personal_email">
                                                                        {{ errors.personal_email }}
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div class=" d-flex justify-content-between">
                                                                <div class="mb-3 form-group">
                                                                    <label for="date_of_birth" class="form-label">Date of
                                                                        birth <span class="text-danger">*</span></label>
                                                                    <input type="date" class="form-control width-input"
                                                                        name="date_of_birth" id="date_of_birth"
                                                                        aria-describedby="helpId" placeholder=""
                                                                        v-model="formData.date_of_birth" required>

                                                                </div>
                                                                <div class="mb-3 form-group">
                                                                    <label for="Blood" class="form-label">Blood
                                                                        Group <span class="text-danger">*</span></label>
                                                                    <select class="form-select width-input" name="Blood"
                                                                        id="Blood">
                                                                        <option selected>Select blood group</option>
                                                                        <option value="A-">A+</option>
                                                                        <option value="A-">A-</option>
                                                                        <option value="B+">B+</option>
                                                                        <option value="B-">B-</option>
                                                                        <option value="AB+">AB+</option>
                                                                        <option value="AB-">AB-</option>
                                                                        <option value="O+">O+</option>
                                                                        <option value="O-">O-</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class=" d-flex  justify-content-between ">
                                                                <div class="mb-3 form-group">
                                                                    <label for="" class="form-label">Gender <span
                                                                            class="text-danger">*</span></label>
                                                                    <select class="form-select width-input" name="" id=""
                                                                        v-model="formData.gender">
                                                                        <option selected>Select one</option>
                                                                        <option value="Male">Male</option>
                                                                        <option value="Female">Female</option>
                                                                        <option value="Others">Others</option>
                                                                    </select>
                                                                </div>
                                                                <div class="mb-3 form-group">
                                                                    <label for="" class="form-label">Physically
                                                                        Handicapped</label>
                                                                    <select class="form-select width-input" name="" id="">
                                                                        <option selected>Select one</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>

                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div class="mb-3 form-group">
                                                                    <label for="" class="form-label">Marital Status <span
                                                                            class="text-danger">*</span></label>
                                                                    <select class="form-select width-input" name="" id=""
                                                                        v-model="formData.marital_status">
                                                                        <option selected>Select one</option>
                                                                        <option value="Single">Single</option>
                                                                        <option value="Married">married</option>
                                                                        <option value="Divorced">Divorced</option>
                                                                        <option value="Widowed">Widowed</option>

                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class=" col-12">
                                                <div class="primary px-4 mb-3">
                                                    <div>
                                                        <h3>Primary Details</h3>
                                                    </div>
                                                    <div class=" d-flex  justify-content-between ">
                                                        <div class="mb-3">
                                                            <label for="" class="form-label">Mobile Number <span
                                                                    class="text-danger">*</span></label>
                                                            <input type="text" class="form-control width-input" name=""
                                                                id="" aria-describedby="helpId"
                                                                placeholder="Enter mobile number">

                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="" class="form-label">Emergency Mobile
                                                                Number</label>
                                                            <input type="text" class="form-control width-input" name=""
                                                                id="" aria-describedby="helpId"
                                                                placeholder="Enter emergency Number">

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class=" col-12">
                                                <div class=" primary px-4 mb-3">
                                                    <div>
                                                        <h3>Address</h3>
                                                    </div>
                                                    <div class=" d-flex justify-content-between">
                                                        <div class="mb-3">
                                                            <label for="" class="form-label">Lane</label>
                                                            <input type="text" class="form-control width-input" name=""
                                                                id="" aria-describedby="helpId"
                                                                placeholder="Enter house number & street">

                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="" class="form-label">City</label>
                                                            <input type="text" class="form-control width-input" name=""
                                                                id="" aria-describedby="helpId" placeholder="Enter city">

                                                        </div>
                                                    </div>
                                                    <div class=" d-flex justify-content-between">
                                                        <div class="mb-3">
                                                            <label for="" class="form-label">State</label>
                                                            <input type="text" class="form-control width-input" name=""
                                                                id="" aria-describedby="helpId" placeholder="Enter state">

                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="" class="form-label">Pin Code</label>
                                                            <input type="text" class="form-control width-input" name=""
                                                                id="" aria-describedby="helpId"
                                                                placeholder="Enter pin code">

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                                        aria-labelledby="pills-profile-tab" tabindex="0">

                                        <form @submit.prevent="submitForm">
                                            <div class="mb-3">
                                                <label for="shift" class="form-label">Shift <span
                                                        class="text-danger">*</span>
                                                </label>
                                                <input type="text" class="form-control" name="shift" id="shift"
                                                    aria-describedby="shiftHelpId" placeholder="Shift"
                                                    v-model="formData.default_shift">

                                            </div>
                                        </form>
                                    </div>
                                    <div class="tab-pane fade" id="pills-contact" role="tabpanel"
                                        aria-labelledby="pills-contact-tab" tabindex="0">
                                        <form @submit.prevent="submitForm">
                                            <div class=" d-flex justify-content-between">
                                                <div class="mb-3 form-group">
                                                    <label for="Department" class="form-label">Department <span
                                                            class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" name="department"
                                                        id="department" aria-describedby="helpId" placeholder="Department"
                                                        v-model="formData.department">

                                                </div>
                                                <div class="mb-3 form-group">
                                                    <label for="job_type" class="form-label">Job
                                                        Type <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" name="job_type" id="job_type"
                                                        aria-describedby="job_typeHelpId" placeholder="Designation"
                                                        v-model="formData.designation">

                                                </div>
                                            </div>
                                            <div class=" d-flex  justify-content-between">
                                                <div class="mb-3">
                                                    <label for="" class="form-label">Date Of Joining <span
                                                            class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" name="" id=""
                                                        aria-describedby="helpId" placeholder=""
                                                        v-model="formData.date_of_joining">

                                                </div>

                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>

                            <div class="modal-footer">
                                <div class=" d-flex justify-content-between">
                                    <div class=" me-2  ">
                                        <p class=" text-secondary align-items-center mt-3   fs-6  mb-0 ">Fill All The Feilds
                                            <span class="text-danger">*</span>
                                        </p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-secondary me-3 " data-bs-dismiss="modal"
                                            @click="formData = {}">Cancel</button>
                                        <button type="submit" class="btn btn-primary me-3 "
                                            :disabled="!formData.first_name || !formData.department || !formData.designation || !formData.date_of_joining || !formData.date_of_birth || !formData.gender || !formData.default_shift || !formData.marital_status"
                                            @click="savingData">Save</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="!show" class="ShowTab">
                    <div class="profile d-flex  align-items-center   justify-content-around ">
                        <div>
                            <img src="../assets/Rectangle.jpg" alt="" class="imge-responsive  ">
                        </div>
                        <div class=" d-flex align-items-center     gap-2  ">
                            <div>
                                <i class="ri-user-fill all-icons"></i>
                            </div>
                            <div>
                                <p class="details">{{ currentEmployee.employee_name }}</p>
                                <p class="details-label">Name</p>
                            </div>
                        </div>
                        <div class=" d-flex align-items-center  gap-2  ">
                            <div>
                                <i class="ri-mail-fill all-icons"></i>
                            </div>
                            <div>
                                <p class="details">{{ currentEmployee.personal_email }}</p>
                                <p class="details-label">Email</p>
                            </div>
                        </div>
                        <div class=" d-flex align-items-center   gap-2  ">
                            <div>
                                <i class="ri-phone-fill all-icons"></i>

                            </div>
                            <div>
                                <p class="details">{{ currentEmployee.cell_number }}</p>
                                <p class="details-label">Mobile</p>
                            </div>
                        </div>
                        <div class=" d-flex align-items-center  gap-2  ">
                            <div>
                                <i class="ri-user-settings-line all-icons"></i>
                            </div>
                            <div>
                                <p class="details">{{ currentEmployee.designation }}</p>
                                <p class="details-label">Designation</p>
                            </div>
                        </div>
                        <div class=" d-flex align-items-center   ">

                            <div v-if="currentEmployee.status == 'Active'" class=" d-flex gap-2  active-state ">
                                <span><i class="bi bi-circle-fill text-white active-icon ms-2 "></i></span>
                                <p class="details active-state">{{ currentEmployee.status }}</p>

                            </div>
                            <div v-if="currentEmployee.status == 'Inactive'" class=" d-flex gap-2  Inactive-state ">
                                <span><i class="bi bi-circle-fill text-white active-icon ms-2 "></i></span>
                                <p class="details Inactive-state">{{ currentEmployee.status }}</p>

                            </div>
                        </div>
                    </div>


                    <div class="pills-static">
                        <ul class="nav nav-pills pills-nav mb-3" id="pills-tab" role="tablist">
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
                    </div>

                    <div class="tab-content tabs-view" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-personal" role="tabpanel"
                            aria-labelledby="pills-personal-tab" tabindex="0">

                            <div class="row">
                                <div class="col-6">

                                    <div class="row">

                                        <div class="col-12 mb-4 ">
                                            <v-skeleton-loader class="card ">
                                                <div class=" card-header ">
                                                    <div class=" d-flex justify-content-between  ">
                                                        <div class=" d-flex gap-2  ">
                                                            <span><i class="ri-user-fill"></i></span>
                                                            <p>Primary Details</p>
                                                        </div>

                                                        <div class="pname">
                                                            <button type="button" class=" border-0 bg-white"><i
                                                                    class="ri-pencil-fill edit-pencil  text-primary "
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#primarydetails"></i></button>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <form>
                                                        <div class="inside-p ">
                                                            <div class=" d-flex justify-content-between mb-4 ">
                                                                <div>
                                                                    <p>{{ currentEmployee.employee_name }}</p>
                                                                    <label for="">Full Name</label>
                                                                </div>
                                                                <div class=" text-end ">
                                                                    <p>{{ currentEmployee.personal_email }}</p>
                                                                    <label for="">Email</label>
                                                                </div>
                                                            </div>
                                                            <div class=" d-flex justify-content-between mb-4  ">
                                                                <div>
                                                                    <p>{{ currentEmployee.first_name }}</p>
                                                                    <label for="">First Name</label>
                                                                </div>
                                                                <div>
                                                                    <p>{{ currentEmployee.last_name }}</p>
                                                                    <label for="">Last Name</label>
                                                                </div>
                                                            </div>
                                                            <div class=" d-flex justify-content-between mb-4  ">
                                                                <div>
                                                                    <p>{{ currentEmployee.salutation }}</p>
                                                                    <label for="">Salutation</label>
                                                                </div>
                                                                <div>
                                                                    <p>{{ currentEmployee.date_of_birth }}</p>
                                                                    <label for="">Date Of Birth</label>
                                                                </div>
                                                            </div>
                                                            <div class=" d-flex justify-content-between mb-4  ">
                                                                <div>
                                                                    <p>{{ currentEmployee.blood_group }}</p>
                                                                    <label for="">Blood Group</label>
                                                                </div>
                                                                <div class=" text-end ">
                                                                    <p>NO</p>
                                                                    <label for="">Physically Handicapped</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </v-skeleton-loader>
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
                                                            <button type="button" class=" border-0 bg-white"><i
                                                                    class="ri-pencil-fill edit-pencil  text-primary "
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#familydetails"></i></button>
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
                                                                    <p>{{ currentEmployee.marital_status }}</p>
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
                                                            <button type="button" class=" border-0 bg-white"><i
                                                                    class="ri-pencil-fill edit-pencil  text-primary "
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#Contactdetails"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <form>
                                                        <div class="inside-p">
                                                            <div
                                                                class=" d-flex  justify-content-between align-items-center mb-4 ">
                                                                <div>
                                                                    <p>{{ currentEmployee.cell_number }}</p>
                                                                    <label for="">Mobile Number</label>
                                                                </div>
                                                                <div class=" text-end ">
                                                                    <p>{{ currentEmployee.emergency_phone_number }}</p>
                                                                    <label for="">Emergency Mobile Number</label>
                                                                </div>
                                                            </div>
                                                            <div class=" d-flex  justify-content-between mb-4  ">
                                                                <div>
                                                                    <p>{{ currentEmployee.personal_email }}</p>
                                                                    <label for="">Mail ID</label>
                                                                </div>
                                                                <div class=" text-end ">
                                                                    <p>{{ currentEmployee.company_email }}</p>
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
                                                            <span><i
                                                                    class="ri-pencil-fill edit-pencil text-primary"></i></span>
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
                                                            <span><i
                                                                    class="ri-pencil-fill edit-pencil text-primary"></i></span>
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
                                                            <span><i
                                                                    class="ri-pencil-fill edit-pencil text-primary"></i></span>
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

                                                            </div>
                                                            <div class=" d-flex  justify-content-between mb-4  ">
                                                                <div>
                                                                    <p>Intermediate</p>
                                                                    <label for="">Sri Chaitanya Junior College . MPC .
                                                                        2010-2012</label>
                                                                </div>

                                                            </div>
                                                            <div class=" d-flex  justify-content-between mb-4  ">
                                                                <div>
                                                                    <p>10th</p>
                                                                    <label for="">St. Martin’s High School . Secondary
                                                                        School . 2001-2010</label>
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
                                <div class="col-12 mb-4">
                                    <div class="card ">
                                        <div class=" card-header ">
                                            <div class=" d-flex justify-content-between  ">
                                                <div class=" d-flex gap-2  ">
                                                    <span><i class="ri-verified-badge-fill"></i></span>
                                                    <p>Approvers</p>
                                                </div>
                                                <div>
                                                    <span><i class="ri-pencil-fill edit-pencil text-primary"></i></span>
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

                                <div class="col-12 mb-4">
                                    <div class="card ">
                                        <div class=" card-header ">
                                            <div class=" d-flex justify-content-between  ">
                                                <div class=" d-flex gap-2  ">
                                                    <span><i class="ri-verified-badge-fill"></i></span>
                                                    <p>Attendance Information</p>
                                                </div>
                                                <div>
                                                    <span><i class="ri-pencil-fill edit-pencil text-primary"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="inside-p d-flex  justify-content-around ">
                                                <div class=" d-flex align-items-center">

                                                    <div class=" text-end ">
                                                        <p>Biometric</p>
                                                        <label for="">Device</label>
                                                    </div>
                                                </div>
                                                <div class=" d-flex justify-content-between align-items-center">

                                                    <div class=" text-end ">
                                                        <p>2023-24 Holidays</p>
                                                        <label for="">Holiday List</label>
                                                    </div>
                                                </div>
                                                <div class=" d-flex justify-content-between align-items-center">

                                                    <div class=" text-end ">
                                                        <p>Morning Shift</p>
                                                        <label for="">Default Shift</label>
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
                    <!-- primary details modal -->
                    <div class="modal fade" id="primarydetails" tabindex="-1" aria-labelledby="primarydetailsLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="primarydetailsLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="mb-3">
                                        <label for="" class="form-label">Full Name</label>
                                        <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                                            placeholder="" v-model="currentEmployee.first_name">

                                    </div>
                                    <div class="mb-3">
                                        <label for="" class="form-label">Email</label>
                                        <input type="email" class="form-control" name="" id=""
                                            aria-describedby="emailHelpId" placeholder=""
                                            v-model="currentEmployee.personal_email">

                                    </div>

                                    <div class="mb-3">
                                        <label for="" class="form-label">First Name</label>
                                        <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                                            placeholder="" v-model="currentEmployee.first_name">

                                    </div>
                                    <div class="mb-3">
                                        <label for="" class="form-label">Last Name</label>
                                        <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                                            placeholder="">

                                    </div>
                                    <div class="mb-3">
                                        <label for="" class="form-label">Date Of Birth</label>
                                        <input type="date" class="form-control" name="" id="" aria-describedby="helpId"
                                            placeholder="" v-model="currentEmployee.date_of_birth">

                                    </div>
                                    <div class="mb-3">
                                        <label for="" class="form-label">Salutation</label>
                                        <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                                            placeholder="" v-model="currentEmployee.Salutation">

                                    </div>
                                    <div class="mb-3">
                                        <label for="" class="form-label">Blood Group</label>
                                        <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                                            placeholder="">

                                    </div>
                                    <div class="mb-3">
                                        <label for="" class="form-label">Physically Handicapped</label>
                                        <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                                            placeholder="">

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

                    <!-- family details -->
                    <div class="modal fade" id="familydetails" tabindex="-1" aria-labelledby="familydetailsLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="familydetailsLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="mb-3">
                                        <label for="" class="form-label">Mother Name</label>
                                        <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                                            placeholder="">

                                    </div>
                                    <div class="mb-3">
                                        <label for="" class="form-label">Father Name</label>
                                        <input type="email" class="form-control" name="" id=""
                                            aria-describedby="emailHelpId" placeholder="">

                                    </div>
                                    <div class="mb-3">
                                        <label for="" class="form-label">Guardian</label>
                                        <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                                            placeholder="">

                                    </div>
                                    <div class="mb-3">
                                        <label for="" class="form-label">Marital Status</label>
                                        <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                                            placeholder="" v-model="currentEmployee.marital_status">

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
                    <!-- conatact -->
                    <div class="modal fade" id="Contactdetails" tabindex="-1" aria-labelledby="ContactdetailsLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="ContactdetailsLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="mb-3">
                                        <label for="" class="form-label">First Name</label>
                                        <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                                            placeholder="" v-model="currentEmployee.first_name">

                                    </div>
                                    <div class="mb-3">
                                        <label for="" class="form-label">Email</label>
                                        <input type="email" class="form-control" name="" id=""
                                            aria-describedby="emailHelpId" placeholder=""
                                            v-model="currentEmployee.personal_email">

                                    </div>
                                    <div class="mb-3">
                                        <label for="" class="form-label">Date Of Birth</label>
                                        <input type="date" class="form-control" name="" id="" aria-describedby="helpId"
                                            placeholder="" v-model="currentEmployee.date_of_birth">

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
    </div>
</template>

<script>
import NavPage from './NavPage.vue';
import SidebarPage from './SidebarPage.vue';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


export default {
    data() {
        return {
            data: [],
            searchQuery: '',
            show: true,
            data1: [],
            currentEmployee: {},
            formData: {

            },
            errors: {},
        }

    },
    components: {
        NavPage,
        SidebarPage,

    },
    mounted() {
        this.EmployeSummary();
    },
    computed: {
        filteredData() {
            return this.data.filter(item => {
                return Object.values(item).some(value => {
                    return String(value).toLowerCase().includes(this.searchQuery.toLowerCase());
                });
            });
        }
    },

    methods: {
        EditPage(name) {
            console.log(name)
            this.show = false;
            this.data.filter(employee => {
                if (employee.name == name) {
                    this.currentEmployee = employee
                }
            })
        },
        EmployeSummary() {
            // Make an HTTP GET request to the API endpoint
            axios.get('http://192.168.1.194:8000/api/method/life_slimming.events.employee_details')
                .then((response) => {
                    this.data = response.data.message;
                    console.log(this.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        navigateBack() {
            this.$router.go(-1); // Go back one step in the history
        },
        navigateForward() {
            this.$router.go(1); // Go forward one step in the history
        },
        savingData() {
            console.log(this.formData);
            axios.post('http://192.168.1.194:8000/api/resource/Employee', this.formData)
                .then((response) => {
                    console.log(response);
                    this.EmployeSummary()
                });
            this.formData = {};
            toast.success("Successfully Employee Details Added ", {
                // toast options here
            });
        },
        UpdateSavings() {
            console.log(this.currentEmployee);
            axios.put('http://192.168.1.194:8000/api/resource/Employee/' + this.currentEmployee?.name, this.currentEmployee)
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
            if (!this.formData.first_name) {
                this.errors.first_name = "Enter Name"
            } else {
                delete this.errors.first_name;
            }
        },
        validate_personal_email() {
            if (!this.formData.personal_email) {
                this.errors.personal_email = "Email requried"
            } else if (!this.formData.personal_email.includes("@gmail.com")) {
                this.errors.personal_email = "Invalid email format"
            }
            else {
                delete this.errors.personal_email;
            }
        }
    }
}
</script>

<style scoped>
.search-tag {
    /* width: 300px;
    height: 32px; */
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

.export {
    width: 96px;
    height: 32px;
    border-radius: 4px;
    border: 1px solid #E9EDFF;
    background: #EBEDF2;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
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
    display: flex;
    justify-content: center;
    align-items: center;
}

.tab-name {
    color: #1C1B1F;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.main-table {
    position: relative;
    z-index: 0;
}

.table-data {
    height: 80vh;
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



.primary {
    border-radius: 4px;
    border: 1px solid #E0DBDB;
    background: #F5F6FF;
}

.cursor-pointer {
    cursor: pointer;
}

.profile {
    background-color: #5B76FF;
    border-radius: 4px;
    height: 100px;
    position: sticky;
    top: 115px;
    z-index: 1;
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
    /* width: 88px; */
    height: 24px;
    padding-right: 6px;
}

.Inactive-state {
    border-radius: 21px;
    background: #ff2a2a;
    /* width: 98px; */
    height: 24px;
    padding-right: 6px;
}

.active-icon {

    width: 5px !important;
    height: 5px !important;
}

.pills-nav .nav-link.active {
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

.pills-nav .nav-link {
    color: #444;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

}

.pills-nav {
    border-bottom: 2px solid #bdbdbd;

}

.pills-static {
    position: sticky;
    top: 215px;
    z-index: 10;
    background: white;
}

.extra-link {
    color: #444;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;


}

.extra-pills .extra-link .active {
    border-radius: 4px;
    background: #365EFF !important;

}

/* .tabs-view {
    z-index: -1;
    position: relative;
} */

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

.modal {
    font-family: Poppins;
}

.width-input {
    width: 343px;
}

.errsize {
    font-size: 12px;
}

.paginations-tab {
    /* width: 100%; */
    height: 48px;
    border-radius: 0px 0px 8px 8px;
    border-bottom: 1px solid #EEEFFF;
    background: #E6EBFE;
    /* position: absolute; */
    bottom: 0px;
}

.page-link {
    background-color: transparent !important;
    color: #444;
    border: none;
}

.dd-page {
    width: 68px;
    height: 28px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #CBD4E2;
    background: #F4F6F9;
}

.viewPage {
    color: #444;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>