const pool = require('../db');

exports.createTask = async (req, res) => {
    const { title, description } = req.body;

    if (!title || title.trim() === '') {
        return res.status(400).json({ message: "Title cannot be empty" });
    }

    try {
        const conn = await pool.getConnection();
        await conn.query(
            "INSERT INTO tasks (title, description) VALUES (?, ?)",
            [title, description]
        );
        conn.release();
        res.json({ message: "Task created successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM tasks");
        conn.release();
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    try {
        const conn = await pool.getConnection();
        await conn.query(
            "UPDATE tasks SET title=?, description=? WHERE id=?",
            [title, description, id]
        );
        conn.release();
        res.json({ message: "Task updated" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        const conn = await pool.getConnection();
        await conn.query("DELETE FROM tasks WHERE id=?", [id]);
        conn.release();
        res.json({ message: "Task deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.markComplete = async (req, res) => {
    const { id } = req.params;

    try {
        const conn = await pool.getConnection();

        const rows = await conn.query("SELECT is_completed FROM tasks WHERE id=?", [id]);

        if (rows[0].is_completed) {
            return res.status(400).json({ message: "Task already completed" });
        }

        await conn.query(
            "UPDATE tasks SET is_completed = true WHERE id=?",
            [id]
        );

        conn.release();
        res.json({ message: "Task marked as completed" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};