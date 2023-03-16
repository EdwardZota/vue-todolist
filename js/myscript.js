const { createApp } = Vue

  createApp({
    data() {
      return {
        newTask:"",
        todoList:[
          {
            text:'testo3',
            done:false
          },
          {
            text:'testo2',
            done:true
          },
          {
            text:'testo1',
            done:false
          },
        ]
      }
    },
    methods:{
      removeTask(index){
        this.todoList.splice(index,1);
      },
      addTask(){
        this.todoList.unshift({text:this.newTask,done:false});
        this.newTask="";
      },
      doIt(task){
        if(task.done==false){
          task.done = true;
        }else{
          task.done = false;
        }
        
      }
    }
  }).mount('#app')