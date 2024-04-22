<template>
    <div>
        <NavPage />
        <div class=" container-fluid ">
            <div class="row">
                <div class="col-lg-2 col-md-2 col-sm-12">
                    <SidebarPage />
                </div>
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <SearchPage />
                    <img src="../assets/Group.jpg" alt="" class="img-fluid  responsive">
                </div>

            </div>
        </div>


    </div>
</template>

<script>
import NavPage from './NavPage.vue';
import SidebarPage from './SidebarPage.vue';
import SearchPage from './SearchPage.vue';
export default {
    data() {
        return {

        }

    },
    components: {
        NavPage,
        SidebarPage,
        SearchPage
    }
}
</script>

<style scoped>
/* img {
    margin-left: 300px;
}  */
</style>