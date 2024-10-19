const db = require('../config/database');

class Project {
  static async create(projectData) {
    const { title, description, userId, technologies, repoLink } = projectData;
    
    const [result] = await db.execute(
      'INSERT INTO projects (title, description, user_id, technologies, repo_link) VALUES (?, ?, ?, ?, ?)',
      [title, description, userId, technologies, repoLink]
    );
    
    return result.insertId;
  }

  static async findById(id) {
    const [rows] = await db.execute('SELECT * FROM projects WHERE id = ?', [id]);
    return rows[0];
  }

  static async findAll(limit = 10, offset = 0) {
    const [rows] = await db.execute(
      'SELECT * FROM projects ORDER BY created_at DESC LIMIT ? OFFSET ?',
      [limit, offset]
    );
    return rows;
  }

  static async update(id, projectData) {
    const { title, description, technologies, repoLink } = projectData;
    
    const [result] = await db.execute(
      'UPDATE projects SET title = ?, description = ?, technologies = ?, repo_link = ? WHERE id = ?',
      [title, description, technologies, repoLink, id]
    );
    
    return result.affectedRows > 0;
  }

  static async delete(id) {
    const [result] = await db.execute('DELETE FROM projects WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Project;
