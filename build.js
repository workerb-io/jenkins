open("http://jenkins.workerb.io/")

var job_title = args[0]

if (!job_title) {
    prompt("provide a valid name for your new job")
}

click('New Item')

open("http://jenkins.workerb.io/view/all/newJob")
click('#name','by_query_selector')
type(job_title,'#name','by_query_selector')
click('/html/body/div[4]/div/div/div/div/form/div[2]/div[1]/ul/li[1]/div[1]','by_xpath')
click('OK')

open("http://jenkins.workerb.io/job/"+job_title+"/configure")
click('Save')

open("http://jenkins.workerb.io/job/"+job_title+"/")