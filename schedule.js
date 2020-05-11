if (!args[0]) {
    prompt("provide a valid project title")
}
open("http://jenkins.workerb.io/job/"+args[0])

if (!args[1]) {
    prompt("provide a valid job schedule query")
}

click('Configure')

open("http://jenkins.workerb.io/job/helloworld/configure")
click('/html/body/div[5]/div/div/div/div/form/table/tbody/tr[145]/td[1]/label','by_xpath')
type(args[1], 'id("main-panel")/div[1]/div[1]/div[1]/form[1]/table[1]/tbody[1]/tr[148]/td[3]/textarea[1]', { method: 'by_xpath'})

click('Save')