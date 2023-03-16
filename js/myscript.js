const { createApp } = Vue

  createApp({
    data() {
      return {
        todoList:[
          {
            text:'testo1',
            done:false
          },
          {
            text:'testo2',
            done:true
          },
          {
            text:'testo3',
            done:false
          },
        ]
      }
    },
    methods:{
      removeTask(index){
        this.todoList.splice(index,1);
      }
    }
  }).mount('#app')