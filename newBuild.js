var project = args[0]

if (!project) {
    project = prompt("provide a valid project title")
}

open("http://jenkins.workerb.io/job/" + project)
click('Build Now')

