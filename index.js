#!node

const program = require('commander');
const download = require('download-git-repo');
const { templateList } = require('./template');

// 1.获取用户的输入命令
// 2.根据不同的执行，执行不同的功能操作

// <>代表的是必填参数，而[]代表的是可填写的参数



program
  .version('0.1.0')
  .option('-C, --chdir <path>', 'change the working directory')
  .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
  .option('-T, --no-tests', 'ignore test hook');

program
  .command('init <framework> <projectName>')
  // description代表的是运行命令提示的文本
  .description('K-Cli initing....')
  .option("-s, --init_mode [mode]", "Which init mode to use")
  .action((framework, projectName) => {
    // 根据名称下载对应的模板
    const { url } = templateList[framework];
    /** 
     * download的参数：
     * (1) 仓库的地址
     * (2) 下载的路径
     */
    url && download(url, projectName, { clone: true }, err => {
        if (err) {
            console.log('下载失败');
        }
    });
  });

program
  .command('f')
  .description('查看可用的框架')
  .action(() => {
    console.log(`
        Angularjs
        Angular
        Vue
        React
    `);
  });

program
  .command('exec <cmd>')
  .alias('ex')
  .description('execute the given remote cmd')
  .option("-e, --exec_mode <mode>", "Which exec mode to use")
  .action(function(cmd, options){
    console.log('exec "%s" using %s mode', cmd, options.exec_mode);
  }).on('--help', function() {
    console.log('');
    console.log('Examples:');
    console.log('');
    console.log('  $ deploy exec sequential');
    console.log('  $ deploy exec async');
  });

program
  .command('*')
  .action(function(env){
    console.log('deploying "%s"', env);
  });

program.parse(process.argv);

