<template>
    <div class=" row justify-content-between  search-main ">
        <div class="col-lg-6 col-md-6 col-sm-6">
            <div class=" d-flex mt-2 ">
                <div class=" d-flex ">
                    <span class="" @click="navigateBack"><i class="bi bi-caret-left-square icons-prev-nxt"></i></span>
                    <span class="" @click="navigateForward"><i class="bi bi-caret-right-square icons-prev-nxt"></i></span>
                </div>
                <div>
                    <p class="tab-name  ">{{ $route.query.name }}</p>
                </div>
                <div class="ms-5">
                    <div class="search-tag d-flex ">
                        <span class="ms-3"><i class="bi bi-search icon-search"></i></span>
                        <input type="search" class="form-control border-0 search " name="search" id="search"
                            aria-describedby="helpId" placeholder=" Search for Information">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
            <div class=" d-flex justify-content-end  ">
                <div class="m-1">
                    <button type="button" class="btn btn-white export">Export</button>
                </div>
                <div class="my-1 ms-1  me-3 ">
                    <button type="button" class="btn btn-white create ">+ Create Shift</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        navigateBack() {
            this.$router.go(-1); // Go back one step in the history
        },
        navigateForward() {
            this.$router.go(1); // Go forward one step in the history
        }
    }
}
</script>

<style  scoped>
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
    margin: 0px;
}
</style>