<template>
    <div class="todo-list">
        <h1>Todo list</h1>
        <form @submit.prevent="handleSubmit">
            <input v-model="newTodo" v-focus placeholder="Add a new todo">
            <button type="submit">Add</button>
        </form>
        <ul>
            <li v-for="todo in todos" :key="todo.id"> 
                <input type="checkbox" :checked="todo.completed" @change="toggleTodo(todo.id)">
                <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
                <button @click="removeTodo(todo.id)">Remove</button>
            </li>
        </ul>
        <p>{{ incompleteTodos.length }} todos left</p>
    </div>
</template>
<script setup>
import useTodoList from '@/composables/TodoList';

const { todos, addTodo, removeTodo, toggleTodo, incompleteTodos } = useTodoList()

const newTodo = ref('')

const handleSubmit = () => {
  if (newTodo.value.trim()) {
    addTodo(newTodo.value.trim())
    console.log('Todos after adding:', todos.value)
    newTodo.value = ''
  }
}
</script>
<style scoped>
.todo-list {
  max-width: 400px;
  margin: 0 auto;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.completed {
  text-decoration: line-through;
  color: #888;
}

input[type="checkbox"] {
  margin-right: 10px;
}

button {
  margin-left: 10px;
}
</style>
