# Jenkins Commands

Some workerB commands to ease your Jenkins workflow.

## How to use:
1. `build ${project_name}` - This will create a new project under your jenkins account with the provided project_name. If you don't provide a project name then workerB will prompt you to provide one.
2. `schedule ${project_name} ${cron_expression}` - This will schedule a jenkins project with the provided cron_expression. If you don't provided a cron_expression then workerB will ask you to provide the expression on project configuration page.
3. `newBuild ${project_name` - This will start a build under the jenkins project, provided by the user.