from app import db, app, Project, Goal, Task, TeamMember

# Create sample data
project = Project(name='Sample Project', description='A sample project for testing')
goal = Goal(name='Sample Goal', project=project)
task = Task(name='Sample Task', goal=goal)
team_member = TeamMember(name='Sample Member')

# Add sample data to the session
with app.app_context():
    db.session.add(project)
    db.session.add(goal)
    db.session.add(task)
    db.session.add(team_member)

    # Commit the session to save data to the database
    db.session.commit()
