let minutes = 25;
let seconds = 0;
let timerInterval;
let pomodoroCount = 0;
let isTimerRunning = false;

const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const toggleTimerButton = document.getElementById('toggle-timer');
const resetButton = document.getElementById('reset');
const toDoList = document.getElementById('to-do-list');
const addTaskButton = document.getElementById('add-task');
const newTaskInput = document.getElementById('new-task');
const backgroundAudio = document.getElementById('background-audio');
const toggleMusicButton = document.getElementById('toggle-music');
const currentTaskElement = document.getElementById('current-task');
const pomodoroCountElement = document.getElementById('pomodoro-count');
const audioSelect = document.getElementById('audio-select');
const decreaseTimeButton = document.getElementById('decrease-time');
const increaseTimeButton = document.getElementById('increase-time');
const backgroundChanger = document.getElementById('background-changer');

const backgroundImages = [
    'ThinkingPlace.webp',
    'ThinkingPlace1.webp',
    'ThinkingPlace2.webp'
];
let currentBackgroundIndex = 0;

function changeBackground() {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
    document.body.style.backgroundImage = `url('${backgroundImages[currentBackgroundIndex]}')`;
    localStorage.setItem('pomodoroBackground', currentBackgroundIndex);
}

document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
    const saved = localStorage.getItem('pomodoroBackground');
    if (saved !== null) {
        currentBackgroundIndex = parseInt(saved);
        document.body.style.backgroundImage = `url('${backgroundImages[currentBackgroundIndex]}')`;
    }
});

window.addEventListener('beforeunload', (e) => {
    if (isTimerRunning) {
        e.preventDefault();
        e.returnValue = 'Your timer is still running! Are you sure you want to leave?';
        return 'Your timer is still running! Are you sure you want to leave?';
    }
});

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#to-do-list li').forEach(li => {
        const text = li.querySelector('.task-content span:nth-child(2)').textContent;
        const time = li.querySelector('.task-time').textContent;
        tasks.push({ text, time });
    });
    localStorage.setItem('pomodoroTasks', JSON.stringify(tasks));
}

function loadTasks() {
    const saved = localStorage.getItem('pomodoroTasks');
    if (saved) {
        JSON.parse(saved).forEach(task => createTaskElement(task.text, task.time));
        updateTaskNumbers();
    }
}

function createTaskElement(taskText, taskTime = null) {
    const li = document.createElement('li');
    const content = document.createElement('div');
    content.className = 'task-content';

    const num = document.createElement('span');
    num.className = 'task-number';
    const textSpan = document.createElement('span');
    textSpan.textContent = taskText;
    const timeSpan = document.createElement('span');
    timeSpan.className = 'task-time';
    if (!taskTime) {
        const now = new Date();
        taskTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    }
    timeSpan.textContent = taskTime;

    const del = document.createElement('button');
    del.textContent = '×';
    del.className = 'delete-task';
    del.addEventListener('click', (e) => {
        e.stopPropagation();
        li.remove();
        updateTaskNumbers();
        saveTasks();
    });

    li.addEventListener('click', () => {
        currentTaskElement.textContent = `⌛  ${taskText}`;
    });

    content.appendChild(num);
    content.appendChild(textSpan);
    content.appendChild(timeSpan);
    li.appendChild(content);
    li.appendChild(del);
    toDoList.appendChild(li);
    return li;
}

function updateTaskNumbers() {
    document.querySelectorAll('#to-do-list li').forEach((li, i) => {
        li.querySelector('.task-number').textContent = `${i+1}.`;
    });
}

function addTask() {
    const text = newTaskInput.value.trim();
    if (!text) return alert('Please enter a task name');
    createTaskElement(text);
    updateTaskNumbers();
    newTaskInput.value = '';
    newTaskInput.focus();
    saveTasks();
}

function updateDisplay() {
    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');
}

function updateTimer() {
    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
    }
    if (minutes < 0) {
        clearInterval(timerInterval);
        alert('Pomodoro complete!');
        pomodoroCount++;
        pomodoroCountElement.textContent = `Pomodoros Completed: ${pomodoroCount}`;
        resetTimer();
        return;
    }
    updateDisplay();
}

function toggleTimer() {
    if (isTimerRunning) {
        backgroundAudio.pause();
        clearInterval(timerInterval);
        toggleTimerButton.textContent = 'Start';
        toggleTimerButton.style.backgroundColor = '';
    } else {
        backgroundAudio.play().catch(() => alert('Error playing audio. Please interact with the page first.'));
        timerInterval = setInterval(updateTimer, 1000);
        toggleTimerButton.textContent = 'Pause';
        toggleTimerButton.style.backgroundColor = '#c4a83c';
    }
    isTimerRunning = !isTimerRunning;
}

function resetTimer() {
    backgroundAudio.pause();
    clearInterval(timerInterval);
    minutes = 25;
    seconds = 0;
    updateDisplay();
    toggleTimerButton.textContent = 'Start';
    toggleTimerButton.style.backgroundColor = '';
    isTimerRunning = false;
}

function toggleMusic() {
    if (backgroundAudio.paused) {
        backgroundAudio.play().catch(() => alert('Error playing audio. Please interact with the page first.'));
        toggleMusicButton.textContent = 'Pause Music';
        toggleMusicButton.style.backgroundColor = '#5a7a8a';
    } else {
        backgroundAudio.pause();
        toggleMusicButton.textContent = 'Play Music';
        toggleMusicButton.style.backgroundColor = '#4a6a7a';
    }
}

function changeAudio() {
    backgroundAudio.src = audioSelect.value;
    if (!backgroundAudio.paused) {
        backgroundAudio.play().catch(() => {});
    }
}

function decreaseTime() {
    if (minutes >= 5) minutes -= 5;
    else minutes = 0;
    updateDisplay();
}

function increaseTime() {
    minutes += 5;
    updateDisplay();
}

addTaskButton.addEventListener('click', addTask);
newTaskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask();
});
toggleTimerButton.addEventListener('click', toggleTimer);
resetButton.addEventListener('click', resetTimer);
toggleMusicButton.addEventListener('click', toggleMusic);
decreaseTimeButton.addEventListener('click', decreaseTime);
increaseTimeButton.addEventListener('click', increaseTime);
audioSelect.addEventListener('change', changeAudio);
backgroundChanger.addEventListener('click', changeBackground);

document.querySelectorAll('.collapsible-header').forEach(header => {
    header.addEventListener('click', function() {
        this.closest('.collapsible-section').classList.toggle('collapsed');
    });
});

updateDisplay();