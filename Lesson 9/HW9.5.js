// – Є масив coursesArray котрий лежить в arrays.js
// (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками,
// в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
//
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const item of coursesArray) {
    let div = document.createElement('div');
    div.classList.add('course');
    let h1 = document.createElement('h1');
    h1.classList.add('title');
    h1.innerText = item.title;
    let allDuration = document.createElement('div');
    allDuration.classList.add('all-duration');
    let monthDuration = document.createElement('span');
    monthDuration.classList.add('duration');
    monthDuration.innerText = `Duration: ${item.monthDuration} months`;
    let hourDuration = document.createElement('span');
    hourDuration.classList.add('description');
    hourDuration.innerText = `Hour Duration: ${item.hourDuration} hours`;
    hourDuration.style.marginLeft = '20px';
    allDuration.append(monthDuration, hourDuration);
    let ul = document.createElement('ul');
    ul.classList.add('modules');
    for(const module of item.modules) {
        let li = document.createElement('li');
        li.innerText = module;
        ul.appendChild(li);
    }


    document.body.appendChild(div);
    div.append(h1, allDuration, ul);
}

