<template>
    <div class="course">
    
        <div class="title">
    
            课程
            <el-button type="primary" plain class="fr" style="transform:translateX(-50%)">更多课程</el-button>
    
        </div>
    
        <el-row :gutter="20">
    
            <el-col :span="6"   v-for="item in course" :key="item.title">
    
               <el-card class="box-card">
    
                <img :src="item.src" alt="" @mouseover="mixin" style="width:100%" class="hov_img">
    
                <div class="course_title clearfix mgtb">
    
                    <div class="fl">{{item.title}}</div>
    
                    <div class="fr">{{item.rate}}</div>
    
                </div>
    
                <hr style="color:#111">
    
                <div class="tutor mgtb">
    
                    <div class="fl">讲师：{{item.tutor}}</div>
    
                    <div class="fr">更新至第{{item.progress}}节</div>
    
                </div>
    
            </el-card>

            </el-col>
             
            

    
</el-row>

            
      
        <button></button>
    
    </div>
</template>
<script>
    export default {
    
        name: "course",
    
        methods: {
    
            mixins(e) {
    
                console.log(e.target.getElementsByTagName("img")[0]);
    
            },
    
            rescure(e) {
    
                console.log(e.target);
    
            }
    
        },
    
        data() {
    
            return {
    
                course: [{
    
                        src: "https://img.shiyanbar.net/UploadImage/2018/10/12/161408547300598001.jpg",
    
                        title: "Excel统计分析",
    
                        rate: "初级",
    
                        tutor: "西普专家",
    
                        progress: 5
    
                    },
    
                    {
    
                        src: "https://img.shiyanbar.net/UploadImage/2018/10/12/161408547300598001.jpg",
    
                        title: "Excel统计分析",
    
                        rate: "初级",
    
                        tutor: "西普专家",
    
                        progress: 5
    
                    },
    
                    {
    
                        src: "https://img.shiyanbar.net/UploadImage/2018/10/12/161408547300598001.jpg",
    
                        title: "Excel统计分析",
    
                        rate: "初级",
    
                        tutor: "西普专家",
    
                        progress: 5
    
                    },
    
                    {
    
                        src: "https://img.shiyanbar.net/UploadImage/2018/10/12/161408547300598001.jpg",
    
                        title: "Excel统计分析",
    
                        rate: "初级",
    
                        tutor: "西普专家",
    
                        progress: 5
    
                    },
    
                    {
    
                        src: "https://img.shiyanbar.net/UploadImage/2018/10/12/161408547300598001.jpg",
    
                        title: "Excel统计分析",
    
                        rate: "初级",
    
                        tutor: "西普专家",
    
                        progress: 5
    
                    },
    
                    {
    
                        src: "https://img.shiyanbar.net/UploadImage/2018/10/12/161408547300598001.jpg",
    
                        title: "Excel统计分析",
    
                        rate: "初级",
    
                        tutor: "西普专家",
    
                        progress: 5
    
                    },
    
                    {
    
                        src: "https://img.shiyanbar.net/UploadImage/2018/10/12/161408547300598001.jpg",
    
                        title: "Excel统计分析",
    
                        rate: "初级",
    
                        tutor: "西普专家",
    
                        progress: 5
    
                    },
    
                    {
    
                        src: "https://img.shiyanbar.net/UploadImage/2018/10/12/161408547300598001.jpg",
    
                        title: "Excel统计分析",
    
                        rate: "初级",
    
                        tutor: "西普专家",
    
                        progress: 5
    
                    }
    
                ]
    
            };
    
        }
    
    };
</script>

<style>
    .course {
    
        padding-top: 22px;
    
        padding-left: 5%;
    
        padding-right: 5%;
    
    }
    
    
    
    .course .title {
    
        border-left: 4px solid skyblue;
    
        padding-left: 1%;
    
        margin-bottom: 20px;
    
        font-size: 1.5em;
    
    }
    
    
    
    .text {
    
        font-size: 14px;
    
    }
    
    
    
    .item {
    
        margin-bottom: 18px;
    
    }
    
    
    
    .fl {
    
        float: left;
    
    }
    
    
    
    .fr {
    
        float: right;
    
    }
    
    
    
    .clearfix:before,
    
    .clearfix:after {
    
        display: table;
    
        content: "";
    
    }
    
    
    
    .clearfix:after {
    
        clear: both;
    
    }
    
    
    
    .box-card {
    
        display: inline-block;
    
        /* min-width: 440px; */
    
        margin-right: 15px;
    
        margin-block-end: 30px;
    
    }
    
    
    
    .mgtb {
    
        margin-top: 12px;
    
        margin-bottom: 12px;
    
    }
    
    
    
    .tutor {
    
        font-size: 14px;
    
        color: #aaa;
    
    }
    
    
    
    .el-card__body {
    
        padding-bottom: 28px;
    
    }
    
    
    
    .hov_img {
    
        transition: 0.5s all ease;
    
    }
    
    
    
    .hov_img:hover {
    
        transform: scale(0.95);
    
    }
</style>


