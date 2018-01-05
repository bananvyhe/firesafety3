<template>
	<div class="writeUs">
		<div class="title">НАПИШИТЕ НАМ</div>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm"   class="demo-ruleForm">
		  <el-form-item prop="name">
		    <el-input size="small" placeholder="Ваше имя" v-model="ruleForm.name" type="text"></el-input>
		  </el-form-item>
		  <el-form-item    prop="desc">
		    <el-input class="inputfont" placeholder="Напишите что-нибудь тут..." :autosize="{ minRows: 2, maxRows: 4}" type="textarea" v-model="ruleForm.desc"></el-input>
		  </el-form-item>
		  <el-form-item>
		  	<el-upload
				  class="upload-demo"
				  action="https://jsonplaceholder.typicode.com/posts/"
				  :on-preview="handlePreview"
				  :on-remove="handleRemove"
				  multiple
				  :limit="3"
				  :on-exceed="handleExceed"
				  :file-list="fileList">
				  <el-button  class="pickfile" size="mini" type="primary" >
				  	Прикрепить файл
				  </el-button>
				  <div slot="tip" class="el-upload__tip">
				  	jpg/png размером меньше 500kb
				  </div>
				</el-upload>
		    <div class="sendbutton"><nobr>
		    <el-button size="small" @click="resetForm('ruleForm')">Стереть</el-button><el-button size="small" type="primary" @click="submitForm('ruleForm')">Отправить</el-button></nobr></div>
		  </el-form-item>
		</el-form>
	</div>
</template>
<script>
  export default {
    data() {
      return {
      	 fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
    
        ruleForm: {
          name: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: 'Введите имя', trigger: 'blur' },
            { min: 2, max: 5, message: 'Длина должна быть от 3х до 5и символов', trigger: 'blur' }
          ],
          desc: [
            { required: true, message: 'Введите сообщение', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
    	handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
@import "../../../app/assets/stylesheets/postcss/variables";
.title {
	padding-bottom: 0.2em;
}

.upload-demo {
	.pickfile { 
	}
}
.writeUs {
	display: flex;
	width: 100%;
	padding-top: 1em;
	flex-direction: column;
	.sendbutton {
		padding-top: 0.5em;
		justify-content: flex-end;
	 	display: flex;
 	}  
	.title { 
		text-align: right;
		color: $advantageFontColor;
	}
	div {
		 
	}
	.demo-ruleForm{
		justify-content: flex-end; 
 		 
	}
}
</style>
