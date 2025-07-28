const fse = require("fs-extra");

const create = [
  {
    name: "conf",
    type: "confirm",
    message: "👉 是否创建新的项目？",
  },
  {
    name: "name",
    message: "👉 请输入项目名称:",
    validate: function (val) {
      if (!val) {
        return "请输入项目名称";
      }
      if (fse.existsSync(val)) {
        return "当前目录已存在同名的项目，请更换项目名";
      }
      return true;
    },
    when: (res) => Boolean(res.conf),
  },
  {
    name: "desc",
    message: "👉 请输入项目的描述:",
    when: (res) => Boolean(res.conf),
  },
  {
    name: "template",
    type: "list",
    message: "👉 请选择一个模板?",
    choices: [
      {
        key: "a",
        name: "vite+vue3",
        value: "github:czj0923/vite-vue-template",
      },
    ],
    filter: function (val) {
      return val.toLowerCase();
    },
    when: (res) => Boolean(res.conf),
  },
];

module.exports = {
  create,
};
