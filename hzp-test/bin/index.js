#!/usr/bin/env node

const lib = require("hzp-test-lib");
// console.log(lib.sum(3,4));
// console.log(lib.mul(3,4));
// console.log('welcome hzp-test!!!');

//注册一个命令 hzp-test init
const argv = require('process').argv;
console.log(argv);
//命令
const command = argv[2];
console.log(command);
//参数
const options = argv.slice(3);
console.log(options);

if (options.length > 1) {
  let [option, param] = options;
  console.log(option.replace('--', ''), param);
  if (command) {
    if (lib[command]) {
      lib[command]({option, param});
    } else {
      console.log('无效的命令');
    }
  } else {
    console.log('请输入命令');
  }

}

//实现参数解析 --version 和 init --name
if (command.startsWith('--') || command.startsWith('-')) {
  const globalOption = command.replace(/--|-/g, '');
  console.log(globalOption);
  if (globalOption === 'version' || globalOption === 'V') {
    console.log("1.0.0");
  }
}




