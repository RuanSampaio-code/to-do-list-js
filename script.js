document.addEventListener('DOMContentLoaded', function () {

	//Variaveis de tags html
  	const todoList = document.getElementById('todo-list');
    const newTodoInput = document.getElementById('new-todo');
    const addBtn = document.getElementById('add-btn');

	//adcionando evento de click no botao para adicionar lista que seja escrita alguma coisa
    addBtn.addEventListener('click', function () {
      const todoText = newTodoInput.value.trim();
      if (todoText !== '') {
		
		//chama função para adicionar item
        addTodoItem(todoText);
        newTodoInput.value = '';
      }
    });

	//Função que adiciona novo item
    function addTodoItem(text) {

		//Cria novo item
		const li = document.createElement('li');
		//Defini classe do item
		li.className = 'todo-item';
		//caracteristicas html do item
		li.innerHTML = `
		<span>${text}</span>
		<div class = "btn-edit-delete">
			<button class="edit-btn">Edit</button>
			<button class="delete-btn">Delete</button>
			<input type="checkbox" id="scales" name="scales"  />
		</div>
	
		`;

		//Variavies de tag da nova lista
		const editBtn = li.querySelector('.edit-btn');    
		const deleteBtn = li.querySelector('.delete-btn');
		
		//Evewnto no botao de edição
		editBtn.addEventListener('click', function () {
		const span = li.querySelector('span');
		const currentText = span.innerText;

		const editText = prompt('Edit todo:', currentText);

		if (editText !== null && editText.trim() !== '') {
			span.innerText = editText.trim();
		}
		});
		
		
		deleteBtn.addEventListener('click', function () {
		
		const apagar = confirm("Deseja apagar esta infromação?")
		
		if (apagar == true) {
			li.remove();
		}


		});

      	todoList.appendChild(li);
    }
  });