<template>
    <div class="mainbackground  d-flex  justify-content-center  align-items-center ">
        <div>
            <div>
                <div class=" d-flex justify-content-center ">
                    <h1 class="vision-text ">HRM</h1>
                </div>
                <div class="from-padding p-5">
                    <form @submit.prevent="submitForm">
                        <h4 class=" d-flex  text-white   justify-content-center ">Login</h4>
                        <p class=" text-white ">Please enter the valid credentials to login.</p>
                        <div class="mb-3">
                            <!-- <label for="Email" class="form-label text-white ">Email <span class="text-danger">*</span></label> -->
                            <input type="email" class="form-control input-radius mb-3 " name="Email"
                                :class="{ 'is-invalid': errors.email }" id="Email" aria-describedby="emailHelpId"
                                placeholder="Username" v-model="formData.email" @input="validatemail">
                        </div>
                        <div class="text-danger errsize" v-if="errors.email">
                            {{ errors.email }}
                        </div>
                        <div class="mb-3">
                            <!-- <label for="password" class="form-label text-white ">Password : <span class="text-danger">*</span></label> -->
                            <input type="password" class="form-control input-radius" name="password"
                                :class="{ 'is-invalid': errors.password }" id="password" placeholder="Password"
                                v-model="formData.password" @input="vaildatePassword">
                            <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                        </div>
                        <div class="text-danger" v-if="errors.password">
                            {{ errors.password }}
                        </div>

                        <button type="submit" class=" btn btn-white login  text-white     w-100 input-radius border-0 p-2"
                            :disabled="!formData.email || !formData.password">LOGIN</button>
                        <a href="" class=" text-white text-decoration-none d-flex justify-content-end mt-3">Forget
                            Password?</a>
                    </form>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
    data() {
        return {
            formData: {},
            errors: {},
            userName: "sai@gmail.com",
            password: "root123"
        }
    }
    , methods: {
        submitForm() {
            console.log("username: " + this.formData.email);
            console.log("password: " + this.formData.password);
            console.log(this.formData);
            if (this.formData.email == this.userName && this.formData.password == this.password) {
                toast.success("Login Successfull", { autoClose: 10000, });
                this.$router.push({
                    path: '/homepage',
                    query: {
                        page: 'HomePage'
                    }
                });
            } else {
                toast.error("Invalid Credentials")
            }


        },
        validatemail() {
            if (!this.formData.email) {
                this.errors.email = "Email requried"
                console.log('=========' + this.errors.email);
            } else if (!this.formData.email.includes("@gmail.com")) {
                this.errors.email = "Invalid email format"
            }
            else {
                delete this.errors.email;
            }
        }
        ,
        vaildatePassword() {
            // console.log(this.FormData.password);
            if (!this.formData.password) {
                this.errors.password = "requried";

            } else if (this.formData.password.length < 5) {
                this.errors.password = "password Must Be 5 Charaters";
            }
            else {
                delete this.errors.password;
            }
        },

    }
}



</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainbackground {
    width: 100%;
    height: 100vh !important;
    background-image: url(../assets/bg.jpg);
    font-family: 'Poppins', sans-serif;

}

.errsize {
    font-size: 15px;
}

.vision-text {
    color: white;
}

.login {
    border: 1px solid rgb(219, 219, 219) !important;
}

.login:hover {
    border: 1px solid rgb(245, 245, 245) !important;

}

.form-control::-webkit-input-placeholder {
    color: rgba(255, 255, 255, .8) !important;
}

.form-control {
    background: transparent;
    border: none;
    height: 50px;
    color: rgba(255, 255, 255, 1) !important;
    border: 1px solid transparent;
    background: rgba(255, 255, 255, .08);
    border-radius: 40px;
    padding-left: 20px;
    padding-right: 20px;


}

.form-control::-moz-placeholder {
    /* Firefox 19+ */
    color: rgba(255, 255, 255, .8) !important;
}

.form-control:-ms-input-placeholder {
    /* IE 10+ */
    color: rgba(255, 255, 255, .8) !important;
}

.form-control:-moz-placeholder {
    /* Firefox 18- */
    color: rgba(255, 255, 255, .8) !important;
}


.form-control:hover,
.form-control:focus {
    background: transparent !important;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-color: rgba(255, 255, 255, 0.4) !important;
}

.from-padding {
    border-radius: 20px;

}

.is-invalid {
    border: 1px solid red;
}

.input-radius {
    border-radius: 20px;
}
</style>
  