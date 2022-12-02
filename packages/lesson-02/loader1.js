const os = require("os");
/**
 * 
 * return string | buffer
 */
module.exports = function(content, map, meta) {
  // 同步模式下，多结果需要分别调用 this.callback()，否则直接 return
  // 异步模式下，必须调用 this.async()，必须调用 callback，必须 return undefined
  console.log('loader1', content);
  return "/** author: frank **/\n" + os.EOF + content;
}