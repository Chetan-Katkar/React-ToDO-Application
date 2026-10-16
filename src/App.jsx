import { useState } from 'react';

const starterTasks = [
  { id: 1, text: 'Plan my day', completed: false },
  { id: 2, text: 'Take a short break', completed: true },
];

export default function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('daily-tasks');
      return saved ? JSON.parse(saved) : starterTasks;
    } catch {
      return starterTasks;
    }
  });
  const [newTask, setNewTask] = useState('');

  function saveTasks(nextTasks) {
    setTasks(nextTasks);
    localStorage.setItem('daily-tasks', JSON.stringify(nextTasks));
  }

  function addTask(event) {
    event.preventDefault();
    const text = newTask.trim();
    if (!text) return;
    saveTasks([...tasks, { id: Date.now(), text, completed: false }]);
    setNewTask('');
  }

  function toggleTask(id) {
    saveTasks(tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));
  }

  function deleteTask(id) {
    saveTasks(tasks.filter((task) => task.id !== id));
  }

  const remaining = tasks.filter((task) => !task.completed).length;

  return (
    <main className="page">
      <section className="todo-card" aria-labelledby="title">
        <div className="eyebrow"><span className="sun" aria-hidden="true">☀</span> A LITTLE SPACE FOR YOUR DAY</div>
        <h1 id="title">Daily tasks<span>.</span></h1>
        <p className="intro">One thing at a time. You’ve got this.</p>

        <form className="add-form" onSubmit={addTask}>
          <label className="sr-only" htmlFor="new-task">Add a task</label>
          <input
            id="new-task"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            placeholder="What needs doing?"
            maxLength={120}
          />
          <button type="submit" aria-label="Add task">+</button>
        </form>

        <div className="list-heading">
          <h2>YOUR LIST</h2>
          <span>{remaining} {remaining === 1 ? 'left' : 'left'}</span>
        </div>

        {tasks.length ? (
          <ul className="task-list">
            {tasks.map((task) => (
              <li className={`task ${task.completed ? 'completed' : ''}`} key={task.id}>
                <button
                  className="check"
                  type="button"
                  aria-label={task.completed ? `Mark ${task.text} incomplete` : `Complete ${task.text}`}
                  aria-pressed={task.completed}
                  onClick={() => toggleTask(task.id)}
                >{task.completed ? '✓' : ''}</button>
                <span>{task.text}</span>
                <button className="delete" type="button" aria-label={`Delete ${task.text}`} onClick={() => deleteTask(task.id)}>×</button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty">Nothing on your list. Enjoy the breathing room!</p>
        )}

        <footer>Small steps still move you forward <span aria-hidden="true">✳</span></footer>
      </section>
    </main>
  );
}
