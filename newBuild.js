if (!args[0]) {
    prompt("provide a valid project title")
}

open("http://jenkins.workerb.io/job/"+args[0])
click('Build Now')

