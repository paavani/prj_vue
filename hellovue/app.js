new Vue({
	el:"#app",
	data: {
		 message: 'Hello Vuejs'
	 },
	 methods :{
		 reverseMessage :function(){
		 this.message=this.message.split('').reverse().join('')

		 }
	 }
})
