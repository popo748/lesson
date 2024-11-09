
function useCounterValueChange(initialValue = 0) {
    const counterValue = ref(initialValue)
  
    function increment() {
      counterValue.value++
      console.log("Counter Value after increment:", counterValue.value)
    }
  
    function decrement() {
      counterValue.value--
      console.log("Counter Value after decrement:", counterValue.value)
    }
  
    return {
      counterValue,
      increment,
      decrement,
    }
  }
  export default useCounterValueChange;

  