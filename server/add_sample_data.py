from app import db, app, Project, Goal, Task, TeamMember

# Create sample data
project = Project(name='HackMIT Development Tracker', description='A productivity tracker for the HackMIT development team.')
goal = Goal(name='Implement Login Page', project=project)
task = Task(name='Implement Frontend', goal=goal)
team_member = TeamMember(name='Devin Engineer')

# Add sample data to the session
with app.app_context():
    db.session.add(project)
    print('Added project:', project.name)
    db.session.add(goal)
    print('Added goal:', goal.name)
    db.session.add(task)
    print('Added task:', task.name)
    db.session.add(team_member)
    print('Added team member:', team_member.name)

    # Commit the session to save data to the database
    db.session.commit()
    print('Committed the session to the database')
