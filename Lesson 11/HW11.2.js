//#whXxOBlYS0H
//
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути списком під час відображення.

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(recipesObject => {
        const {recipes} = recipesObject;
        console.log(recipes);
        const container = document.getElementById('container')
        const div = document.createElement('div');
        div.classList.add('recipes');
        for (const recipe of recipes) {
            const divMain = document.createElement('div');
            divMain.innerText = `
                id: ${recipe.id},
                name: ${recipe.name}
            `;
            const ingredientsList = document.createElement('ul');
            for (const ingredient of recipe.ingredients) {
                const li = document.createElement('li');
                li.innerText = ingredient;
                ingredientsList.appendChild(li);
            }

            const instructionsList = document.createElement('ol');
            for (const instruction of recipe.instructions) {
                const li = document.createElement('li');
                li.innerText = instruction;
                instructionsList.appendChild(li);
            }
            const cookingTime = document.createElement('div')
                cookingTime.innerText = ` 
                prepTimeMinutes: ${recipe.prepTimeMinutes}
                cookTimeMinutes: ${recipe.cookTimeMinutes}
                servings: ${recipe.servings}
                difficulty: ${recipe.difficulty}
                cuisine: ${recipe.cuisine}
                caloriesPerServing: ${recipe.caloriesPerServing}
                `;
            const cookingTimeTags = document.createElement('ul');
            for (const tag of recipe.tags) {
                const li = document.createElement('li');
                li.innerText = tag;
                cookingTimeTags.appendChild(li)

            }
            cookingTime.appendChild(cookingTimeTags);

            const recipeInfo = document.createElement('div');
            const recipeUsersId = document.createElement('p');
            const recipeImage = document.createElement('img');
            const recipeDes = document.createElement('p');
            const recipeMealType = document.createElement('ol');
            for (let meal of recipe.mealType) {
                const li = document.createElement('li');
                li.innerText = meal;
                recipeMealType.appendChild(li);
            }

            recipeImage.src = recipe.image;
            recipeUsersId.innerText = `userId: ${recipe.userId}`;
            recipeDes.innerText = `
            rating: ${recipe.rating}
            reviewCount: ${recipe.reviewCount}
            `;
            recipeInfo.append(recipeUsersId, recipeImage, recipeDes, recipeMealType);



            div.append(divMain, ingredientsList, instructionsList, cookingTime, recipeInfo);
        }
        container.appendChild(div);
    })