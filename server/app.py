import os
from flask import Flask, jsonify, request
from dotenv import load_dotenv
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# Load environment variables
load_dotenv()

app = Flask(__name__)
# Enable CORS for all domains on all routes with support for credentials
CORS(app, supports_credentials=True)

@app.after_request
def after_request(response):
    # Removed manual CORS headers to avoid conflict with CORS extension
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

# Use the environment variable for the database URI
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("SQLALCHEMY_DATABASE_URI")
db = SQLAlchemy(app)

class Project(db.Model):
    __tablename__ = "projects"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    # Relationships
    goals = db.relationship('Goal', backref='project', lazy=True)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'goals': [goal.to_dict() for goal in self.goals]
        }

class Goal(db.Model):
    __tablename__ = "goals"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    progress = db.Column(db.Integer, nullable=False, default=0)
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)
    # Relationships
    tasks = db.relationship('Task', backref='goal', lazy=True)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'progress': self.progress,
            'tasks': [task.to_dict() for task in self.tasks]
        }

class Task(db.Model):
    __tablename__ = "tasks"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    is_completed = db.Column(db.Boolean, default=False, nullable=False)
    goal_id = db.Column(db.Integer, db.ForeignKey('goals.id'), nullable=False)
    team_member_id = db.Column(db.Integer, db.ForeignKey('team_members.id'), nullable=True)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'is_completed': self.is_completed,
            'goal_id': self.goal_id,
            'team_member_id': self.team_member_id
        }

class TeamMember(db.Model):
    __tablename__ = "team_members"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    # Relationships
    tasks = db.relationship('Task', backref='team_member', lazy=True)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'tasks': [task.to_dict() for task in self.tasks]
        }

@app.route('/projects', methods=['GET'])
def get_projects():
    projects = Project.query.all()
    return jsonify([project.to_dict() for project in projects])

@app.route('/projects/<int:project_id>', methods=['GET'])
def get_project(project_id):
    project = Project.query.get_or_404(project_id)
    return jsonify(project.to_dict())

@app.route('/projects', methods=['POST'])
def create_project():
    data = request.get_json()
    project = Project(name=data['name'], description=data['description'])
    db.session.add(project)
    db.session.commit()
    return jsonify(project.to_dict()), 201

@app.route('/projects/<int:project_id>', methods=['PUT'])
def update_project(project_id):
    project = Project.query.get_or_404(project_id)
    data = request.get_json()
    project.name = data.get('name', project.name)
    project.description = data.get('description', project.description)
    db.session.commit()
    return jsonify(project.to_dict())

@app.route('/projects/<int:project_id>', methods=['DELETE'])
def delete_project(project_id):
    project = Project.query.get_or_404(project_id)
    db.session.delete(project)
    db.session.commit()
    return jsonify({}), 204

@app.route('/team-members', methods=['GET'])
def get_team_members():
    team_members = TeamMember.query.all()
    return jsonify([member.to_dict() for member in team_members])

@app.route('/team-members/<int:member_id>', methods=['GET'])
def get_team_member(member_id):
    member = TeamMember.query.get_or_404(member_id)
    return jsonify(member.to_dict())

@app.route('/team-members', methods=['POST'])
def create_team_member():
    data = request.get_json()
    member = TeamMember(name=data['name'])
    db.session.add(member)
    db.session.commit()
    return jsonify(member.to_dict()), 201

@app.route('/team-members/<int:member_id>', methods=['PUT'])
def update_team_member(member_id):
    member = TeamMember.query.get_or_404(member_id)
    data = request.get_json()
    member.name = data.get('name', member.name)
    db.session.commit()
    return jsonify(member.to_dict())

@app.route('/team-members/<int:member_id>', methods=['DELETE'])
def delete_team_member(member_id):
    member = TeamMember.query.get_or_404(member_id)
    db.session.delete(member)
    db.session.commit()
    return jsonify({}), 204

@app.route('/projects/<int:project_id>/goals/<int:goal_id>/tasks', methods=['POST'])
def add_task_to_goal(project_id, goal_id):
    project = Project.query.get(project_id)
    if not project:
        return jsonify({'error': 'Project not found'}), 404
    goal = Goal.query.get(goal_id)
    if not goal:
        return jsonify({'error': 'Goal not found'}), 404
    data = request.get_json()
    task = Task(name=data['name'], goal_id=goal.id)
    db.session.add(task)
    db.session.commit()
    return jsonify(task.to_dict()), 201

# Add similar CRUD routes for Goals, Tasks, and TeamMembers

with app.app_context():
    db.create_all()
    db.session.commit()

if __name__ == "__main__":
    app.run(debug=True, port=5000)
