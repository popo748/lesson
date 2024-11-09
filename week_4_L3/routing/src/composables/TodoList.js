function useTodoList(){
    const todos = ref([
        { id: 1, text: 'Learn Vue', completed: false },
        { id: 2, text: 'Build a todo app', completed: false }
      ])

function addTodo(text){
    todos.value = [...todos.value, { id: Date.now(), text, completed: false }]
}
function removeTodo(id){
todos.value=todos.value.filter(todo => todo.id !== id)
}
const toggleTodo = (id) => {
    todos.value = todos.value.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  }
const incompleteTodos = computed(()=>{
return todos.value.filter(todo=>!todo.completed)})

return{
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    incompleteTodos
}
};


export default useTodoList;