<template>
	<div class="more_course">
		<el-row>
			<el-col :span="6" style="" class="more_course_filter">
				<div class="filter">
					<span>全部分类</span>
					<ul>
						<li 
							v-for="item in typeList" 
							:key={item} 
							@click="handleTypeChange($event)"
							:class="cur.text === item ? 'filter-active' : null">{{item}}</li>
					</ul>
				</div>
				<div class="recommend">
					<span>推荐课程</span>
					<ul>
						<li>1. Excel统计分析</li>
						<li>1. Excel统计分析</li>
						<li>1. Excel统计分析</li>
						<li>1. Excel统计分析</li>
						<li>1. Excel统计分析</li>
						<li>1. Excel统计分析</li>
						<li>1. Excel统计分析</li>
						<li>1. Excel统计分析</li>
						<li>1. Excel统计分析</li>
					</ul>
				</div>
			</el-col>
			<el-col :span="18"  class="detail">
				<el-row style="text-align: right">
					<el-input v-model="input" placeholder="请输入内容" style="display: inline-block;width: 40%"></el-input>
					<el-button class="search el-icon-zoom-in"> 搜索</el-button>				
				</el-row>
				<el-card>
					<img src="http://www.shiyanbar.com/UploadImage/2016/9/30/154686496457374901.jpg" alt="" height="120" style="float: left">
					<div class="course_info">
						<el-row >
							<div class="fl title">HTML5开发</div>
							<div class="fr charpter">已经更新至13章</div>
						</el-row>
						<el-row >
							<div class="desc">
                                        知识与实例相结合，本部分是HTML5课程的基础内容，主要讲解HTML5的标签结构，与传统的HTML4相比，新增和删去的标签及相关属性，并深入拓展了全局属性的相关知识。...                                    </div>
						</el-row>
						<el-row class="sm">
							<div class="tutor fl">讲师：张教授</div>
							<div class="level fl"><span style="color: red">·</span> 初级</div>
							<div class="people fr">1314人学习</div>
						</el-row>
					</div>
					<div style="clear: both"></div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				typeList: ['信息安全','移动开发','大数据','操作系统','云计算','人工只能'],
				cur:{
					text:''
				}
			}
		},
		methods:{
			handleTypeChange(ev){
				let target = ev.target
				this.cur.text = target.innerText
			}
		}
	}
</script>

<style lang="less">
	.more_course{
		width: 1180px;
		margin: 0 auto;
		margin-top: 20px;
		.more_course_filter,{
			padding: 0 30px;

			.filter, .recommend{
				border: 1px solid #aaa;
				border-radius: 15px 15px 0 0;
				overflow: hidden;
				span{
					font-size: 1.3em;
					padding-top:5px;
					padding-bottom: 10px;
					display: block;
					text-align: center;
					background: #22272f;
					color:#fff;
					border-bottom: 1px solid #eee
				}
				background:#fff;
				ul{
					padding:15px;
					li{
						line-height: 2.3em;
						list-style:none;
						cursor: pointer;
						width: 100%;
						height: 2.3em;
						text-overflow: ellipsis;
						white-space: nowrap; 
						overflow: hidden;
					}
					li:hover{
						background:#efe;
					}
				}
			}
			.filter{
				ul{
					padding:0;
					li{
						padding:0 15px;
					}
					.filter-active{
						background: #efe
					}
				}
				margin-bottom: 20px;
				
			}
			.recommend{
				ul{
					padding:0;
					li{
						// margin:4px 0;
						border-bottom:1px solid #aaa;
						padding: 0 5px;
					}
					li:nth-child(even) {

					}
					li:nth-child(odd) {
						// background: #;
					}
					li:last-child{
						margin-bottom: 0
					}
				}
				
			}
			
		}
		.detail{
			.search{
				background: #22272f;
				color: #fff;
				font-size: 1em;
			}
			.el-card{
				margin:15px 0;
				cursor: pointer;
				.course_info{
					float: left;
					margin-left: 10px;
					width:600px;
					transition: 1s all ease;
					.sm{
						font-size: .8em;
						margin-top: 7px;
						.level{
							margin-left: 35px;

						}
					}
					.title{
						font-size:1.2em
					}
					.charpter{
						color: #aaa;
						font-size: .9em
					}
					.desc{
						font-size: .95em;
						padding: 5px
					}
					.fl{
						float: left;
					}
					.fr{
						float: right;
					}
				}
				
			}
			.el-card:hover .course_info{
				margin-left: 30px
			}

		}
	}
</style>