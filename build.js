open("http://jenkins.workerb.io/")

var job_title = args[0]

if (!job_title) {
    job_title = prompt("provide a valid name for your new job")
}

click('New Item')

open("http://jenkins.workerb.io/view/all/newJob")
click('#name','by_query_selector')
type(job_title, 'Enter an item name',{method: 'by_label'})
click('.hudson_model_FreeStyleProject', { method: 'by_query_selector'})
click('OK')

open("http://jenkins.workerb.io/job/"+job_title+"/configure")
click('Save')

open("http://jenkins.workerb.io/job/"+job_title+"/")