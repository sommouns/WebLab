<template>
    <div class="register">
                
                <el-card class="box-card">
                    <el-tabs type="card">
                    <el-tab-pane label="学生登录">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position="left">
                        <el-form-item label="学生ID" prop="name"> 
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                         <el-form-item label="密碼" prop="pass" > 
                            <el-input v-model="ruleForm.psd" type="password"></el-input>
                        </el-form-item>
                        <el-row style="text-align:center">
                            <el-button style="width:40%" type="primary" @click="loginStudent">登录</el-button>&nbsp;&nbsp;&nbsp;<router-link to="register"><el-button style="width:40%">注册</el-button></router-link>

                        </el-row>
                        
                    </el-form>
                    </el-tab-pane>
                    <el-tab-pane label="教师登录">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position="left">
                        <el-form-item label="学生ID" prop="name"> 
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                         <el-form-item label="密碼" prop="pass"> 
                            <el-input v-model="ruleForm.psd" type="password"></el-input>
                        </el-form-item>
                        <el-row style="text-align:center">
                            <el-button style="width:40%" type="primary"  @click="loginTeacher">登录</el-button>&nbsp;&nbsp;&nbsp;<router-link to="register"><el-button style="width:40%">注册</el-button></router-link>

                        </el-row>
                        
                    </el-form>
                    </el-tab-pane>
                    <el-tab-pane label="管理员登录">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position="left">
                        <el-form-item label="学生ID" prop="name"> 
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                         <el-form-item label="密碼" prop="pass"> 
                            <el-input v-model="ruleForm.psd" type="password"></el-input>
                        </el-form-item>
                        <el-row style="text-align:center">
                            <el-button style="width:40%" type="primary" @click="loginAdmin">登录</el-button>&nbsp;&nbsp;&nbsp;<router-link to="register"><el-button style="width:40%">注册</el-button></router-link>

                        </el-row>
                        
                    </el-form>
                    </el-tab-pane>
                    
                </el-tabs>
                    
                </el-card>
            
        
        

        
        
    </div>
</template>
<script>
   
    export default {
    
        data() {
    
            return {
    
                ruleForm: {
    
                    name: "",
                    psd:""
    
                }
    
            };
    
        },
    
    
    
        methods: {
    
            onSubmit() {
                console.log("submit!");
            },
            loginStudent(){

                const res={
                    type:'student',
                    id:this.ruleForm.name,
                    password:this.ruleForm.psd
                }
                this.$store.commit('setInfo',res)
                this.$router.push('/')
            },
            loginTeacher(){
               const res={
                    type:'teacher',
                    id:this.ruleForm.name,
                    password:this.ruleForm.psd
                }
                this.$store.commit('setInfo',res)
                this.$router.push('/')
            },
            loginAdmin(){
                const res={
                    type:'admin',
                    id:this.ruleForm.name,
                    password:this.ruleForm.psd
                }
                this.$store.commit('setInfo',res)
                this.$router.push('/')
            }
    
        }
    
    };
</script>
<style>
body,html{
    height: 100%;
    width: 100%;
}
    .register {
        height: 100%;
        width: 100%;
        /* padding-top: 30px; */
        background:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540293197&di=ffafcf0df5e1cc32ecf03a1cff78c037&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F038db7f56d7f14532f875520f74927b.png) no-repeat;
         background-size: cover;
         
    }
    .register .box-card{
        position:absolute;
        top: 50%;
        left: 50%;
        transform:translate(-50%,-50%)
    }
</style>
