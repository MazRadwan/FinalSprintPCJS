# Final Sprint Programming Concepts in JS

**Authors**
- Maz Radwan
- Evan Pittman
- Christopher Higgins

# Instructions for cloning Repo
Now that your repository is set up on GitHub and contains your React app's initial codebase in the main branch, your teammates can start contributing by following a collaborative workflow. Here's a simple guide you can share with them:

### Cloning the Repository

1. **Clone the Repository**: First, they'll need to clone the repository to their local machine. They can do this by opening their terminal (or command prompt/PowerShell) and running the following command:
   ```bash
   git clone https://github.com/[your-username/your-repository-name.git](https://github.com/MazRadwan/FinalSprintPCJS.git)
   ```
   Make sure to replace `https://github.com/your-username/your-repository-name.git` with the actual URL of your GitHub repository.

2. **Navigate into the Repository Directory**: After cloning, they should navigate into the newly created directory, which is named after your repository:
   ```bash
   cd your-repository-name
   ```

### Creating a New Branch

3. **Create and Switch to a New Branch**: Before they start working on their tasks, it's a good practice to create a new branch. This keeps their changes isolated from the main branch until they're ready to merge. They can create and switch to a new branch using:
   ```bash
   git checkout -b their-feature-branch
   ```
   They should replace `their-feature-branch` with a descriptive name for their branch, reflecting the feature or fix they're working on.

### Making Changes and Pushing to GitHub

4. **Make Changes**: Now, they can start working on their tasks, making changes to the code as necessary.

5. **Stage and Commit Changes**: After making changes, they'll need to stage and commit them. They can use the following commands:
   ```bash
   git add .
   git commit -m "A descriptive message about their changes"
   ```
   The `git add .` command stages all changes for commit, and `git commit -m "message"` records the staged changes along with a descriptive commit message.

6. **Push the Branch to GitHub**: Once they've committed their changes, they should push their branch to GitHub:
   ```bash
   git push -u origin their-feature-branch
   ```
   This command pushes their branch to the remote repository and sets up tracking between their local branch and the remote branch. The `-u` flag is only needed the first time they push the branch.

### Collaborating Further

- **Pulling Changes**: Remind them to regularly pull changes from the main branch into their feature branch to stay up-to-date and minimize merge conflicts. They can do this by first switching to their feature branch (if they're not already on it) and then running:
  ```bash
  git pull origin main
  ```

- **Creating Pull Requests**: Once they've completed their work on the feature and pushed their branch to GitHub, they should create a pull request through GitHub's web interface to merge their changes into the main branch. This is also a good opportunity for code review and collaboration.

Sharing these instructions with your team will help ensure a smooth and efficient workflow for contributing to the project.
