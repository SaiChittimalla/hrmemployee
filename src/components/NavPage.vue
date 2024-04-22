<template>
    <nav class="navbar navbar-expand-lg  bg-white  main-nav position-sticky top-0 z-0 ">
        <div class="container-fluid">

            <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
                aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <!-- <span class="navbar-toggler-icon"></span> -->
                <i class="ri-align-justify"></i>
            </button>
            <img src="../assets/hrmlogo.jpg" alt="" class=" img-fluid  logo">
            <div class="collapse navbar-collapse" id="navbar">
                <div class="navbar-nav me-auto my-2 my-lg-0">
                    <select class="form-select form-select-lg dropdown-toggle-split   main-nav-select" name="" id="">
                        <option selected>Carat RED</option>
                        <option value="New Delhi">wipro</option>
                        <option value="Istanbul">Infosys</option>
                        <option value="Jakarta">Tech mahindra</option>
                    </select>
                </div>
                <router-link to="/"> <button type="button" class="btn btn-outline-primary  logout " title="Log Out"
                        data-placement="auto" data-toggle="popover" data-trigger="hover">Lg
                    </button></router-link>
                <!-- <div class="dropdown dropstart">
                    <button class="btn btn-primary" type="button" id="triggerId" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        ML
                    </button>
                    <div class="dropdown-menu" aria-labelledby="triggerId">
                        <router-link to="/"> <button type="button" class="btn btn-danger  ms-5  ">Log
                                out</button></router-link>
                    </div>
                </div> -->
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style  scoped>
.main-nav-select {
    width: 230px;
    height: 42px;
    border-radius: 4px;
    border: 1px solid #E9EDFF;
    color: #1C1B1F;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    /* background: #EEEFFF; */
    cursor: pointer;

}

.logo {
    width: 100px;
    height: 40px;
}


.logout {
    font-family: 'Poppins';
    border-radius: 50%;
}

.main-nav {
    border-bottom: 1px solid #AAC1DD;
    position: sticky;
    top: 0;
    z-index: 1;
}

/* .form-select {
    background: #EEEFFF;
} */
</style>