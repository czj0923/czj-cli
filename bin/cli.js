#! /usr/bin/env node 

const inquirer = require('inquirer')
const question = require('../src/question')
const chalk = require('chalk')
const createProject = require('../src/create')
const { program } = require('commander')

const { red } = chalk
const package=require('../package.json')

program.version(package.version)

program
    .command('create')
    .description('创建一个项目')
    .action(function(){
        inquirer.default.prompt(question.create).then(async answer => {
            if(answer.conf){
                createProject(answer)
            }else{
                red(`您已经终止此操作`)
            }
        }).catch(()=>{
            red(`❌ 程序出错 ❌`)
            process.exit(1);
        })
})

// 解析命令行
program.parse(process.argv)