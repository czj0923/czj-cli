
const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')

const { red, yellow, green } = chalk

function createProject(project) {
    //获取用户输入，选择的信息
    const { template, name } = project;
    const spinner = ora("正在拉取框架...");
    spinner.start();
    download(template, name, async function (err) {
        if (err) {
            red(err);
            spinner.text = red(`拉取失败. ${err}`)
            spinner.fail()
            process.exit(1);
        } else {
            spinner.text = green(`拉取成功...`)
            spinner.succeed()
            spinner.text = green(`项目已创建成功！`)
            spinner.succeed()
        }
    });
}

module.exports = createProject