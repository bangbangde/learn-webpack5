## 无需配置额外的 loaders 直接使用 asset 文件。

- asset/resource 生成一个单独文件并导出其 URL。
- asset/inline   导出 data URI。
- asset/source   导出资源源码【示例中加在一个txt文件，直接导出了文本内容】
- asset          自动选择导出 data URI 还是生成独立文件。 【默认 < 8kb 】