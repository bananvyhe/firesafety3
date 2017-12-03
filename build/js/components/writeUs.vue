<template>
	<div class="writeUs">
		<div class="title">НАПИШИТЕ НАМ:</div>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
		  <el-form-item label="Ваше имя" prop="name">
		    <el-input v-model="ruleForm.name"></el-input>
		  </el-form-item>
		  <el-form-item label="Сообщение" prop="desc">
		    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
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
				  <el-button class="pickfile" size="small" type="primary">
				  	Прикрепить файл
				  </el-button>
				  <div slot="tip" class="el-upload__tip">
				  	jpg/png размером меньше 500kb
				  </div>
				</el-upload>
		    <nobr><el-button type="primary" @click="submitForm('ruleForm')">Отправить</el-button>
		    <el-button @click="resetForm('ruleForm')">Стереть</el-button></nobr>
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
            { min: 3, max: 5, message: 'Длина должна быть от 3х до 5и символов', trigger: 'blur' }
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
.upload-demo {
	float: right;
	margin-bottom: 1em;
	display: flex;
 	justify-content: flex-end;
	flex-direction: column;
	.pickfile {
		float: right;
	}

}
.writeUs {

	display: flex;
	flex-direction: column;
	padding-top: 1em;
	padding-bottom: 2em;
	padding-left: 2em; 
	.title { text-align: right;
		padding-bottom: 1em;
		color: $advantageFontColor;
	}
	div {
		 
	}
	.demo-ruleForm{
		
	}
}
</style>
