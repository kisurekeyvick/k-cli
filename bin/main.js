#!/usr/bin/env node

// 使用Node开发命令行工具所执行的js脚本必须在顶部加入：#!/usr/bin/env node
console.log('nice fish');

const chalk = require('chalk');
const semver = require('semver');
const requiredVersion = require('../package.json');// .engines.node;
const { templateList } = require('./template');

// /**
//  * @func 
//  * @desc 检测node版本
//  * @param {*} wanted 最低预期版本
//  * @param {*} id     脚手架名称
//  */
// function nodeVersion(wanted, id) {
//     if (!semver.satisfies(process.version, wanted)) {
//         console.log(chalk.red(
//             '你是用的Node版本号为： ' + process.version + ', 但 ' + id +
//             ' 需运行在 ' + wanted + '.\n请升级你的Node版本'
//         ));

//         process.exit(1)
//     }
// }

// nodeVersion(requiredVersion, 'k-cli');

// if (semver.satisfies(process.version, '9.x')) {
//   console.log(chalk.red(
//     `你是用的Node版本是 ${process.version}.\n` +
//     `强烈建议你使用最新 LTS 版本`
//   ))
// }

// /** 开始处理命令 */
// const program = require('commander');
// const minimist = require('minimist');

// program
//   .version(require('../package').version)
//   .usage('<command> [options]');

// // 创建命令
// program
//     /**
//      * 输入：create 项目的名字 框架 平台
//      * 其中<>代表的是必填项
//      */
//     .command('create <app-name> <framework> <platform>')
//     .description('K-cli is creating the project for you...')     //  友好提示，表述正在创建中
//     // 操作命令存在几个参数
//     .option('-t --template <templateName>', '')
//     // -d 代表跳过询问，默认使用默认的配置
//     .option('-d, --default', 'Skip prompts and use default preset')
//     // 
//     .action((name, cmd) => {
//         const options = cleanArgs(cmd);

//         //TODO: 此处需要做做一些限制，防止用户多输入，少输入
//         if (minimist(process.argv.slice(3))._.length > 1) {
//             console.log(chalk.yellow('\n ⚠️  检测到您输入了多个名称，将以第一个参数为项目名，舍弃后续参数哦'))
//         }

//         console.log(chalk.blue(options));
//     });

// program.on('--help', function() {
//     console.log(chalk.green(`
//         (1) 项目创建方式：create 项目名字 框架(react/vue/vue3/angularjs/angular) 平台(pc/h5)
//             -t / --template <templateName> 加载对应的模板
//             -d / --default 跳过询问，加载默认的模板

//     `));
// });

// function camelize (str) {
//     return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '');
// }

// // 获取参数
// function formatArgs(cmd) {
//     const args = {};

//     cmd.options.forEach((option) => {
//         const key = camelize(o.long.replace(/^--/, ''));
//         // 如果没有传递option或者有与之相同的命令，则不被拷贝
//         if (typeof cmd[key] !== 'function' && typeof cmd[key] !== 'undefined') {
//             args[key] = cmd[key];
//         }
//     });

//     return args;
// }
